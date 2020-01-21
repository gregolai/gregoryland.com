import { h } from 'preact';
import { useContext } from 'preact/hooks';
import cx from 'classnames';
import { Context } from '../MusicPlayerProvider';

const css = require('./PlaylistEntry.scss');

export const PlaylistEntry = ({ song }) => {
	const { currentSong, setCurrentSong } = useContext(Context);
	const isCurrent = currentSong.id === song.id;
	return (
		<div className={css.container} onClick={() => setCurrentSong(song)}>
			<div className={cx(css.button, isCurrent && css.current)} />
			<div className={css.body}>
				<div className={css.title}>{song.title}</div>
				<div className={css.artist}>{song.artist}</div>
			</div>
			<div className={css.duration}>{song.duration}</div>
		</div>
	);
};
