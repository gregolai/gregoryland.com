import { h } from 'preact';
import { useContext } from 'preact/hooks';
import cx from 'classnames';
import { Context } from '../MusicPlayerProvider';

const css = require('./SongDetails.scss');

export const SongDetails = props => {
	const { currentSong, isPlaylistOpen } = useContext(Context);
	return (
		<div className={cx(css.container, isPlaylistOpen && css.isPlaylistOpen)}>
			<div className={css.songTitle}>{currentSong.title}</div>
			<div className={css.songArtist}>{currentSong.artist}</div>
		</div>
	);
};
