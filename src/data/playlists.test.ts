import { describe, expect, it } from 'vitest';
import { playlists } from './playlists';
import { MONTHS } from './months';

describe('playlists data', () => {
  it('has every entry pointing at a valid embed.music.apple.com URL', () => {
    for (const entry of playlists) {
      expect(entry.embedUrl).toMatch(/^https:\/\/embed\.music\.apple\.com\/.+\/playlist\/.+\/pl\..+/);
    }
  });

  it('has no duplicate year+month combinations', () => {
    const seen = new Set<string>();
    for (const entry of playlists) {
      const key = `${entry.year}-${entry.month}`;
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    }
  });

  it('only uses recognized month names', () => {
    for (const entry of playlists) {
      expect(MONTHS).toContain(entry.month);
    }
  });
});
