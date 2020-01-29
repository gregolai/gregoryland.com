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
		style={{ opacity: SVG_FILL_OPACITY }}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<polygon points="10,0 90,50 10,100" fill="black" />
	</svg>
);

const PauseSvg = () => (
	<svg
		className={css.largeIcon}
		style={{ opacity: SVG_FILL_OPACITY }}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="10" y="0" width="20" height="100" fill="black" />
		<rect x="70" y="0" width="20" height="100" fill="black" />
	</svg>
);

const PrevSongSvg = () => (
	<svg
		className={css.smallIcon}
		style={{ opacity: SVG_FILL_OPACITY }}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="0" y="0" width="20" height="100" fill="black" />
		<polygon points="20,50 100,0 100,100" fill="black" />
	</svg>
);

const NextSongSvg = () => (
	<svg
		className={css.smallIcon}
		style={{ opacity: SVG_FILL_OPACITY }}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="80" y="0" width="20" height="100" fill="black" />
		<polygon points="80,50 0,0 0,100" fill="black" />
	</svg>
);

const PlusSvg = () => (
	<svg
		className={css.largeIcon}
		style={{ opacity: SVG_FILL_OPACITY }}
		viewBox="0 0 100 100"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid"
	>
		<rect x="40" y="0" width="20" height="100" fill="black" />
		<rect x="0" y="40" width="100" height="20" fill="black" />
	</svg>
);

const LoopSvg = () => {
	// arrow distance x and y
	const ax = 22;
	const ay = 16;

	const p0 = [20, 50];
	const c = [20, 30];
	const p1 = [60, 30];

	const a0 = [p1[0], p1[1] - ay];
	const a1 = [p1[0] + ax, p1[1]];
	const a2 = [p1[0], p1[1] + ay];

	return (
		<svg
			style={{ opacity: SVG_FILL_OPACITY }}
			className={css.largestIcon}
			viewBox="0 0 100 100"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid"
		>
			<path
				d={`M${p0} C${c} ${c} ${p1}`}
				stroke="black"
				fill="transparent"
				style={{
					stroke: 'black',
					strokeWidth: 10
				}}
			/>
			<polygon points={`${a0} ${a1} ${a2}`} fill="black" />
			<path
				d={`M${100 - p0[0]},${100 - p0[1]} C${100 - c[0]},${100 - c[1]} ${100 - c[0]},${100 -
					c[1]} ${100 - p1[0]},${100 - p1[1]}`}
				stroke="black"
				fill="transparent"
				style={{
					stroke: 'black',
					strokeWidth: 10
				}}
			/>
			<polygon
				points={`${100 - a0[0]},${100 - a0[1]} ${100 - a1[0]},${100 - a1[1]} ${100 - a2[0]},${100 -
					a2[1]}`}
				fill="black"
			/>
		</svg>
	);
};

export const MainPanel = props => {
	const { isPlaylistOpen, setPlaylistOpen, knockAt, isPlaying, setPlaying } = useContext(Context);

	return (
		<div className={cx(css.container, isPlaylistOpen && css.playlistOpen)}>
			{isPlaylistOpen && <div className={css.hiddenHover} onClick={() => setPlaylistOpen(false)} />}
			<SongDetails />

			<Record />

			{/* CONTROLS */}
			<div className={cx(css.controlButtonsRow, isPlaylistOpen && css.isPlaylistOpen)}>
				<div className={css.auxButton}>
					<LoopSvg />
				</div>
				<div className={css.controlButtons}>
					<ControlButton size="small" onPointerDown={knockAt}>
						<PrevSongSvg />
					</ControlButton>
					<ControlButton
						size="large"
						className={css.playButton}
						onClick={() => setPlaying(!isPlaying)}
						onPointerDown={knockAt}
					>
						{isPlaying ? <PauseSvg /> : <PlaySvg />}
					</ControlButton>
					<ControlButton size="small" onPointerDown={knockAt}>
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
