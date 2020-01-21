import { h } from 'preact';
import { useContext } from 'preact/hooks';
import cx from 'classnames';
import { Context } from '../MusicPlayerProvider';
import { ControlButton } from './ControlButton';
import { SongDetails } from './SongDetails';
import { Record } from './Record';

const css = require('./MainPanel.scss');

const SVG_FILL_OPACITY = '40%';

const PlaySvg = () => (
	<svg
		className={css.largeIcon}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<polygon points="10,0 90,50 10,100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
	</svg>
);

const PauseSvg = () => (
	<svg
		className={css.largeIcon}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="10" y="0" width="20" height="100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
		<rect x="70" y="0" width="20" height="100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
	</svg>
);

const PrevSongSvg = () => (
	<svg
		className={css.smallIcon}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="0" y="0" width="20" height="100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
		<polygon points="20,50 100,0 100,100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
	</svg>
);

const NextSongSvg = () => (
	<svg
		className={css.smallIcon}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="80" y="0" width="20" height="100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
		<polygon points="80,50 0,0 0,100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
	</svg>
);

const PlusSvg = () => (
	<svg
		className={css.largeIcon}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="40" y="0" width="20" height="100" fill="black" fill-opacity={SVG_FILL_OPACITY} />
		<rect x="0" y="40" width="100" height="20" fill="black" fill-opacity={SVG_FILL_OPACITY} />
	</svg>
);

export const MainPanel = props => {
	const { isPlaylistOpen, setPlaylistOpen, isPlaying, setPlaying } = useContext(Context);

	return (
		<div className={cx(css.container, isPlaylistOpen && css.playlistOpen)}>
			{isPlaylistOpen && <div className={css.hiddenHover} onClick={() => setPlaylistOpen(false)} />}
			<SongDetails />

			<Record />

			{/* CONTROLS */}
			<div className={cx(css.controlButtonsRow, isPlaylistOpen && css.isPlaylistOpen)}>
				<div className={css.auxButton}>
					<PlusSvg />
				</div>
				<div className={css.controlButtons}>
					<ControlButton size="small">
						<PrevSongSvg />
					</ControlButton>
					<ControlButton
						size="large"
						className={css.playButton}
						onClick={() => setPlaying(!isPlaying)}
					>
						{isPlaying ? <PauseSvg /> : <PlaySvg />}
					</ControlButton>
					<ControlButton size="small">
						<NextSongSvg />
					</ControlButton>
				</div>
				<div className={css.auxButton}>
					<PlusSvg />
				</div>
			</div>

			<div className={css.playlistDragHandle} onClick={() => setPlaylistOpen(!isPlaylistOpen)}>
				<div className={css.playlistDragNotch} />
			</div>
		</div>
	);
};
