import React, { FunctionComponent, Suspense, forwardRef, Ref, useRef, useEffect, useState } from 'react';
import { cx } from 'pu2';
import { ActivityIndicator } from './ActivityIndicator';
import Portfolio from '../Portfolio';
import { Text } from '../../Resume/tokens';

const css = require('./Screen.scss');

interface Props {
	id: string;
	label: string;
	children: React.ReactChild | React.ReactChild[];
	[key: string]: any;
}

export const Screen: FunctionComponent<Props> = ({ id, label, children, ...props }) => {
	const { registerScreen } = Portfolio.useContext();

	useEffect(() => {
		registerScreen({ label, id });
	}, []);

	return (
		<div {...props} id={id} className={cx(css.container, props.className)}>
			<Text.Title style={{ position: 'absolute', top: 32, left: 64 }}>{label}</Text.Title>
			<Suspense fallback={<ActivityIndicator />}>{children}</Suspense>
		</div>
	);
};
