function PlaylistEmbed({ title, embedUrl }: { title: string; embedUrl: string }) {
  return (
    <div className="mx-auto mt-10 max-w-[1200px] px-6">
      <h2 className="mb-2 text-fg">{title}</h2>
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
