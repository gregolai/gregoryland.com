import React, { useContext } from 'react';
import { PlaylistEntry } from './PlaylistEntry';
import { Context } from '../MusicPlayerProvider';
import { Box, Flex } from 'primitives';

export const PlaylistPanel = () => {
	const { currentAlbum } = useContext(Context);
	if (!currentAlbum) {
		return null;
	}

	return (
		<Flex
			css={{
				flexDirection: 'column',

				position: 'absolute',
				top: '0px',
				left: '0px',
				height: '100%',
				width: '100%',
				zIndex: '1',
				background: '#977ADE',
				paddingTop: '140px'
			}}
		>
			<Box css={{ overflow: 'auto' }}>
				{currentAlbum.songs.map(song => (
					<PlaylistEntry key={song.id} song={song} />
				))}
			</Box>
		</Flex>
	);
};
