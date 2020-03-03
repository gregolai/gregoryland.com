import React, { FunctionComponent } from 'react';
import { cx } from 'pu2';

const css = require('./ScreenSplat.scss');

interface Props {
	color: string;
	colorPos?: string;
	overlay?: boolean;
	x: number | string;
	y: number | string;
	width: number | string;
	height?: number | string;
}

export const ScreenSplat: FunctionComponent<Props> = ({
	color,
	colorPos = '0%',

	overlay,

	x,
	y,

	width,
	height = width
}) => (
	<div
		className={cx(css.container, overlay && css.overlay)}
		style={{
			left: x,
			top: y,
			width,
			height,
			backgroundImage: `radial-gradient(${color} ${colorPos}, transparent 50%)`
		}}
	/>
);
