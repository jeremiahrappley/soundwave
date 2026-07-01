function PlaylistEmbed({ title, embedUrl }: { title: string; embedUrl: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-surface p-4 shadow-sm transition hover:border-accent/30">
      <h2 className="mb-3 text-base font-semibold text-fg">{title}</h2>
      <iframe
        title={title}
        src={embedUrl}
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="450"
        style={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      />
    </div>
  );
}

export default PlaylistEmbed;
