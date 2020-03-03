import React, { useContext, useRef } from 'react';
import { cx } from 'pu2';
import { Context } from '../MusicPlayerProvider';

const css = require('./PlaylistEntry.scss');

const Progress = ({ percent }) => {
	return (
		<div
			className={css.progress}
			style={{
				width: `${percent}%`
			}}
		/>
	);
};

export const PlaylistEntry = ({ song }) => {
	const ref = useRef(null);
	const { bufferingSongId, bufferingSongProgress, bufferAndPlaySong, currentSong } = useContext(Context);
	const isCurrent = currentSong && currentSong.id === song.id;

	return (
		<div
			ref={ref}
			className={css.container}
			onClick={() => {
				bufferAndPlaySong(song);
			}}
		>
			<div className={cx(css.button, isCurrent && css.current)} />
			<div className={css.body}>
				<div className={css.title}>{song.title}</div>
				<div className={css.artist}>{song.artist}</div>
			</div>
			<div className={css.duration}>{song.duration}</div>
			{bufferingSongId === song.id && <Progress percent={bufferingSongProgress} />}
		</div>
	);
};
