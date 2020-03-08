import React, { FunctionComponent, Suspense, forwardRef, Ref, useRef, useEffect, useState } from 'react';
import { ActivityIndicator } from './ActivityIndicator';
import Portfolio from '../Portfolio';
import Router from '../../Router';
import { Box, Flex, Text } from 'primitives';

interface Props {
	id: string;
	label: string;
	children: React.ReactChild | React.ReactChild[];
	[key: string]: any;
}

export const Screen: FunctionComponent<Props> = ({ center = false, css, id, label, children }) => {
	const [el, setEl] = useState(null);
	const { registerScreen } = Portfolio.useContext();
	// const { registerRoute, unregisterRoute } = Router.useContext();

	useEffect(() => {
		if (el) {
			//registerRoute(`/${id}`, ref);
			registerScreen({ el, label, id });

			return () => {
				//unregisterRoute(`/${id}`);
			};
		}
	}, [el]);

	const Component = center ? Flex : Box;
	return (
		<Component
			ref={setEl}
			id={id}
			css={{
				position: 'relative',
				justifyContent: center && 'center',
				alignItems: center && 'center',
				...css
			}}
		>
			<Text.Title style={{ position: 'absolute', top: '32px', left: '64px' }}>{label}</Text.Title>
			<Suspense fallback={<ActivityIndicator />}>{children}</Suspense>
		</Component>
	);
};
