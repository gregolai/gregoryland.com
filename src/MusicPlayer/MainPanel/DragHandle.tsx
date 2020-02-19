import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { startDrag } from 'pu2';
import { Context } from '../MusicPlayerProvider';

import MainPanelStore from './MainPanelStore';

const css = require('./DragHandle.scss');

export const DragHandle = () => {
	const { playerRef, isPlaylistOpen, setPlaylistOpen } = useContext(Context);
	const { setDragY, setDragging } = useContext(MainPanelStore.Context);

	return (
		<div
			className={css.container}
			onClick={() => setPlaylistOpen(!isPlaylistOpen)}
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
			<div className={css.background} />
			<div className={css.notch} />
		</div>
	);
};
