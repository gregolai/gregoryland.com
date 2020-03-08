import React, { FunctionComponent, Suspense, forwardRef, Ref, useRef, useEffect, useState } from 'react';
import { ActivityIndicator } from './ActivityIndicator';
import Portfolio from '../Portfolio';
import { Box, Flex, Text } from 'core/primitives';

interface Props {
	id: string;
	label: string;
	children: React.ReactChild | React.ReactChild[];
	[key: string]: any;
}

export const Screen: FunctionComponent<Props> = ({ center = false, css, id, label, children }) => {
	const [el, setEl] = useState(null);
	const { registerScreen } = Portfolio.useContext();

	useEffect(() => {
		if (el) {
			registerScreen({ el, label, id });
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
			<Text.Title css={{ position: 'absolute', top: '32px', left: '64px', zIndex: '1' }}>
				{label}
			</Text.Title>
			<Suspense fallback={<ActivityIndicator />}>{children}</Suspense>
		</Component>
	);
};
