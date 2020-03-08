import React, { useContext } from 'react';
import { Context } from '../MusicPlayerProvider';
import { Flex, Box } from 'primitives';

export const SongDetails = props => {
	const { currentSong, isPlaylistOpen } = useContext(Context);
	if (!currentSong) {
		return null;
	}

	return (
		<Flex
			css={{
				flexDirection: 'column',
				alignItems: 'center',
				position: 'absolute',
				left: '0px',
				top: isPlaylistOpen ? '400px' : '60px',
				width: '100%',
				transition: 'all 600ms cubic-bezier(0.770, 0.060, 0.240, 0.925)'
			}}
		>
			<Box
				css={{
					fontSize: '15px',
					color: 'rgba(0,0,0,0.6)'
				}}
			>
				{currentSong.title}
			</Box>
			<Box
				css={{
					marginTop: '4px',
					fontSize: '11px',
					color: 'rgba(0,0,0,0.4)'
				}}
			>
				{currentSong.artist}
			</Box>
		</Flex>
	);
};
