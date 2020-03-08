import React, { useContext, useState } from 'react';
import { startDrag } from 'pu2';
import { Context } from '../MusicPlayerProvider';

import MainPanelStore from './MainPanelStore';
import { Box, Flex } from 'primitives';

export const DragHandle = () => {
	const [isHovering, setHovering] = useState(false);
	const { playerRef, isPlaylistOpen, setPlaylistOpen } = useContext(Context);
	const { setDragY, setDragging } = useContext(MainPanelStore.Context);

	return (
		<Flex
			css={{
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				bottom: '0px',
				left: '0px',
				height: '42px',
				width: '100%'
			}}
			onClick={() => setPlaylistOpen(!isPlaylistOpen)}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			onMouseDown={e => {
				startDrag(e, {
					measureTarget: playerRef,
					distance: 0,
					onDragStart: () => {
						setDragging(true, 0);
					},
					onDrag: ({ clientX, clientY, localY, deltaY, ratioY }) => {
						setDragY(deltaY);
					},
					onDragEnd: ({ ratioY }) => {
						setDragging(false);
						setPlaylistOpen(ratioY < 0.5);
					}
				});
			}}
		>
			<Box
				css={{
					position: 'absolute',
					top: '0px',
					left: '0px',
					width: '100%',
					height: '100%',
					background: 'linear-gradient(0deg, rgba(255,255,255,0.3), transparent)',
					transition: 'all 300ms cubic-bezier(0.770, 0.060, 0.240, 0.925)',
					opacity: isHovering ? '1' : '0'
				}}
			/>
			<Box
				css={{
					position: 'relative',
					marginTop: '14px',
					background: 'rgba(0,0,0,0.4)',
					height: '2px',
					width: isHovering ? '26px' : '12px',
					transition: 'all 300ms cubic-bezier(0.770, 0.060, 0.240, 0.925)'
				}}
			/>
		</Flex>
	);
};
