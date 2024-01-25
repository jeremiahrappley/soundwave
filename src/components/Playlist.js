import React from 'react';
import '../styles.css';

function Playlist({ title, embedUrl }) {
	return (
		<div style={{ marginTop: '80px', marginLeft: '80px', marginRight: '80px'}}>
    		<h2>{title}</h2>
    		<iframe
				title={title}
				src={embedUrl}
				allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameborder="0"
                height="450"
                style={{
                	width: '100%',
                	maxWidth: '1200px',
                	overflow: 'hidden',
                	borderRadius: '10px',
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
			></iframe>
		</div>
  	);
}

export default Playlist;
