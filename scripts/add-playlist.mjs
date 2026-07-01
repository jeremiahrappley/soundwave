#!/usr/bin/env node
// Adds one monthly playlist entry to src/data/playlists.ts.
//
// Usage:
//   npm run add-playlist -- <apple-music-url> [--year 2026] [--month July] [--title "July 2026"] [--dry-run]
//
// The URL can be either a public share link (music.apple.com/.../pl.xxxx) or
// an embed link (embed.music.apple.com/...) — it's normalized to the embed
// form used by the site. Title is auto-suggested from the URL's slug (e.g.
// "january-2024" -> "January 2024" — the embed page itself is a client-
// rendered shell with no server-side title metadata to scrape); pass
// --title to override. Year/month are inferred from the title when omitted.
//
// This only edits the local file and `git add`s it — it does not commit or
// push, so you can review the diff before committing.

import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { parseArgs } from 'node:util';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'playlists.ts');
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

function normalizeEmbedUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    fail(`not a valid URL: ${rawUrl}`);
  }
  if (!/(^|\.)music\.apple\.com$/.test(url.hostname)) {
    fail(`not an apple music URL: ${rawUrl}`);
  }
  if (!url.pathname.includes('/playlist/')) {
    fail(`URL doesn't look like a playlist link: ${rawUrl}`);
  }
  url.hostname = 'embed.music.apple.com';
  url.search = '';
  return url.toString();
}

function titleFromSlug(embedUrl) {
  const match = new URL(embedUrl).pathname.match(/\/playlist\/([^/]+)\//);
  if (!match) return null;
  return match[1]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function inferYearMonth(title) {
  if (!title) return {};
  const match = title.match(/([A-Za-z]+)\s+(\d{4})/);
  if (!match) return {};
  const [, month, year] = match;
  const normalizedMonth = MONTHS.find((m) => m.toLowerCase() === month.toLowerCase());
  return { month: normalizedMonth, year: normalizedMonth ? Number(year) : undefined };
}

async function prompt(rl, question, fallback) {
  const suffix = fallback ? ` (${fallback})` : '';
  const answer = (await rl.question(`${question}${suffix}: `)).trim();
  return answer || fallback;
}

function parsePlaylistsFile(source) {
  const entryRe = /\{\s*year:\s*(\d+),\s*month:\s*'([^']+)',\s*title:\s*'([^']+)',\s*embedUrl:\s*'([^']+)'\s*,?\s*\}/g;
  const entries = [];
  let match;
  while ((match = entryRe.exec(source))) {
    const [, year, month, title, embedUrl] = match;
    entries.push({ year: Number(year), month, title, embedUrl });
  }
  return entries;
}

function renderPlaylistsFile(entries) {
  const sorted = [...entries].sort(
    (a, b) => a.year - b.year || MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month),
  );
  const lines = sorted.map(
    (e) => `  { year: ${e.year}, month: '${e.month}', title: '${e.title.replace(/'/g, "\\'")}', embedUrl: '${e.embedUrl}' },`,
  );
  return `export interface PlaylistEntry {
  year: number;
  month: string;
  title: string;
  embedUrl: string;
}

// Source of truth for every monthly playlist. New entries are appended here
// (in sorted order) by \`npm run add-playlist\` — see scripts/add-playlist.mjs.
export const playlists: PlaylistEntry[] = [
${lines.join('\n')}
];
`;
}

async function main() {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: {
      year: { type: 'string' },
      month: { type: 'string' },
      title: { type: 'string' },
      'dry-run': { type: 'boolean', default: false },
    },
  });

  const rawUrl = positionals[0];
  if (!rawUrl) {
    fail('usage: npm run add-playlist -- <apple-music-playlist-url> [--year Y] [--month M] [--title T] [--dry-run]');
  }

  const embedUrl = normalizeEmbedUrl(rawUrl);
  console.log(`normalized URL: ${embedUrl}`);

  const suggestedTitle = titleFromSlug(embedUrl);
  const inferred = inferYearMonth(values.title ?? suggestedTitle);

  const needsPrompt = !values.title || !values.month || !values.year;
  if (needsPrompt && !process.stdin.isTTY) {
    fail('missing --title/--month/--year and stdin is not a TTY to prompt for them (running non-interactively)');
  }

  let title = values.title;
  let month = values.month;
  let yearStr = values.year;

  if (needsPrompt) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    title ??= await prompt(rl, 'Title', suggestedTitle ?? undefined);
    month ??= await prompt(rl, 'Month', inferred.month);
    yearStr ??= await prompt(rl, 'Year', inferred.year ? String(inferred.year) : undefined);
    rl.close();
  }

  if (!title) fail('title is required');
  if (!MONTHS.includes(month)) fail(`month must be one of: ${MONTHS.join(', ')}`);
  const year = Number(yearStr);
  if (!Number.isInteger(year) || year < 2000) fail(`invalid year: ${yearStr}`);

  const source = readFileSync(DATA_FILE, 'utf8');
  const entries = parsePlaylistsFile(source);

  if (entries.some((e) => e.year === year && e.month === month)) {
    fail(`an entry for ${month} ${year} already exists in ${DATA_FILE}`);
  }

  entries.push({ year, month, title, embedUrl });
  const output = renderPlaylistsFile(entries);

  console.log(`\nadding: { year: ${year}, month: '${month}', title: '${title}', embedUrl: '${embedUrl}' }`);

  if (values['dry-run']) {
    console.log('\n--dry-run set, not writing file.');
    return;
  }

  writeFileSync(DATA_FILE, output);
  try {
    execFileSync('git', ['add', DATA_FILE], { cwd: path.join(__dirname, '..') });
  } catch {
    // not fatal — the file is still written even if this isn't a git repo checkout
  }

  console.log(`\nwrote ${DATA_FILE} and staged it.`);
  console.log('review the diff, then: git commit -m "Add playlist for ' + month + ' ' + year + '"');
}

main();
