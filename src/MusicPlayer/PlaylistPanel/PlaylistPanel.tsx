import React, { useContext } from 'react';
import { PlaylistEntry } from './PlaylistEntry';
import { Context } from '../MusicPlayerProvider';

const css = require('./PlaylistPanel.scss');

import uid from 'uid';
window['uid'] = uid;

export const PlaylistPanel = () => {
	const { currentAlbum } = useContext(Context);
	if (!currentAlbum) {
		return null;
	}

	return (
		<div className={css.container}>
			<div className={css.innerContainer}>
				{currentAlbum.songs.map(song => (
					<PlaylistEntry key={song.id} song={song} />
				))}
			</div>
		</div>
	);
};
