import React, { useContext } from 'react';
import { cx } from 'pu2';
import { Context } from '../MusicPlayerProvider';
import { PrimaryButton } from './PrimaryButton';
import { SongDetails } from './SongDetails';
import { Record } from './Record';
import { DragHandle } from './DragHandle';
import MainPanelStore from './MainPanelStore';
import { Box, Button, Flex } from 'core/primitives';

const SVG_FILL_OPACITY = '40%';

const PlaySvg = () => (
	<svg
		style={{
			width: '10px',
			height: '10px',
			opacity: SVG_FILL_OPACITY
		}}
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
		style={{
			width: '10px',
			height: '10px',
			opacity: SVG_FILL_OPACITY
		}}
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
		style={{
			width: '8px',
			height: '8px',
			opacity: SVG_FILL_OPACITY
		}}
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
		style={{
			width: '8px',
			height: '8px',
			opacity: SVG_FILL_OPACITY
		}}
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
		style={{
			width: '10px',
			height: '10px',
			opacity: SVG_FILL_OPACITY
		}}
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
			style={{
				width: '20px',
				height: '20px',
				opacity: SVG_FILL_OPACITY
			}}
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

const AuxButton = ({ children }) => (
	<Button
		css={{
			height: '48px',
			width: '48px'
		}}
	>
		{children}
	</Button>
);

const MainPanel = props => {
	const { isPlaylistOpen, setPlaylistOpen, knockAt, isPlaying, setPlaying } = useContext(Context);
	const { dragY, isDragging } = useContext(MainPanelStore.Context);

	return (
		<Box
			css={{
				position: 'absolute',
				left: '0px',
				top: '0px',
				bottom: isPlaylistOpen ? 'calc(100% - 140px)' : '0px',
				width: '100%',
				overflow: 'hidden',
				zIndex: '2',
				background: 'linear-gradient(155deg, #F2F6FA 10%, #D6E5F4 90%)',
				boxShadow: '0 0 36px rgba(0,0,0,0.2)',
				borderRadius: '16px'
			}}
			style={{ transform: isDragging ? `translateY(${dragY}px)` : undefined }}
		>
			<SongDetails />

			<Record />

			{/* CONTROLS */}
			<Flex
				css={{
					alignItems: 'center',
					justifyContent: 'space-between',

					// MAYBE TEMP FOR NOW - CONSTRAIN TO BOTTOM
					position: 'absolute',
					bottom: isPlaylistOpen ? '32px' : '42px',
					left: '0px',
					width: '100%',
					transition: 'all 600ms cubic-bezier(0.770, 0.060, 0.240, 0.925)'
				}}
			>
				<AuxButton>
					<LoopSvg />
				</AuxButton>
				<Flex css={{ alignItems: 'center' }}>
					<PrimaryButton size="small" /*onPointerDown={knockAt}*/>
						<PrevSongSvg />
					</PrimaryButton>
					<PrimaryButton
						size="large"
						css={{
							mx: '8px'
						}}
						onClick={() => setPlaying(!isPlaying)}
						/* onPointerDown={knockAt} */
					>
						{isPlaying ? <PauseSvg /> : <PlaySvg />}
					</PrimaryButton>
					<PrimaryButton size="small" /*onPointerDown={knockAt}*/>
						<NextSongSvg />
					</PrimaryButton>
				</Flex>
				<AuxButton>
					<PlusSvg />
				</AuxButton>
			</Flex>

			<DragHandle />
		</Box>
	);
};

export default props => (
	<MainPanelStore>
		<MainPanel {...props} />
	</MainPanelStore>
);
