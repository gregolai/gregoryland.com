import { h } from 'preact';
import { PlaylistEntry } from './PlaylistEntry';
import { useContext } from 'preact/hooks';
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
