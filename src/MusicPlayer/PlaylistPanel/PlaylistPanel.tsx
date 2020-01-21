import { h } from 'preact';
import { PlaylistEntry } from './PlaylistEntry';
import { songs } from '../songs';

const css = require('./PlaylistPanel.scss');

export const PlaylistPanel = props => {
	return (
		<div className={css.container}>
			<div className={css.innerContainer}>
				{songs.map((song, index) => (
					<PlaylistEntry key={index} song={song} />
				))}
			</div>
		</div>
	);
};
