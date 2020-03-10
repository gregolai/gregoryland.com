import React, { useContext } from 'react';
import { Context } from '../MusicPlayerProvider';
import { Box, Button, Flex } from 'core/primitives';

const Progress = ({ percent }) => {
	return (
		<Box
			css={{
				position: 'absolute',
				top: '0px',
				left: '0px',
				height: '100%',
				zIndex: '-1',
				transition: 'width 100ms linear',
				background: 'black'
			}}
			style={{
				width: `${percent}%`
			}}
		/>
	);
};

export const PlaylistEntry = ({ song }) => {
	const { bufferingSongId, bufferingSongProgress, bufferAndPlaySong, currentSong } = useContext(Context);
	const isCurrent = currentSong && currentSong.id === song.id;

	// TODO: SHOULD THIS BE <Flex> or <Relative>, SINCE IT'S A FLEX CONTAINER AND HOLDS AN ABSOLUTE ELEMENT
	return (
		<Flex
			css={{
				position: 'relative',
				paddingTop: '14px',
				paddingBottom: '14px',
				paddingLeft: '16px',
				paddingRight: '16px',

				alignItems: 'center',
				justifyContent: 'space-between',

				':first-child': {
					paddingTop: '30px'
				},
				':last-child': {
					paddingBottom: '30px'
				},

				':not(:first-child)': {
					borderTop: '1px solid rgba(255,255,255,0.3)'
				},
				':not(:last-child)': {
					borderBottom: '1px solid rgba(0,0,0,0.2)'
				}
			}}
			onClick={() => {
				bufferAndPlaySong(song);
			}}
		>
			<Button
				css={{
					background: isCurrent ? 'yellow' : 'white',
					width: '24px',
					height: '24px',
					borderRadius: '50%'
				}}
			/>
			<Box
				css={{
					flex: '1',
					paddingLeft: '8px'
				}}
			>
				<Box
					css={{
						fontSize: '11px',
						letterSpacing: '0.4px',
						color: 'rgba(255,255,255,0.8)'
					}}
				>
					{song.title}
				</Box>
				<Box
					css={{
						fontSize: '9px',
						letterSpacing: '0.8px',
						color: 'rgba(255,255,255,0.5)'
					}}
				>
					{song.artist}
				</Box>
			</Box>
			<Box
				css={{
					fontSize: '10px',
					letterSpacing: '0.8px',
					color: 'rgba(255, 255, 255, 0.6)'
				}}
			>
				{song.duration}
			</Box>
			{bufferingSongId === song.id && <Progress percent={bufferingSongProgress} />}
		</Flex>
	);
};
