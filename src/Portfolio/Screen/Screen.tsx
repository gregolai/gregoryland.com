import React, { FunctionComponent, Suspense, forwardRef, Ref, useRef, useEffect, useState } from 'react';
import { ActivityIndicator } from './ActivityIndicator';
import Portfolio from '../Portfolio';
import { Box, Flex, Text } from 'core/primitives';
import { space } from 'core/tokens';

interface LinkProps {
	pathname: string;
	label: string;
}

interface Props {
	id?: string;
	label?: string;
	link?: LinkProps;
	children: React.ReactChild | React.ReactChild[];
	[key: string]: any;
}

export const Screen: FunctionComponent<Props> = ({ center = false, css, id, link, label, children }) => {
	const [el, setEl] = useState(null);
	const { registerScreen } = Portfolio.useContext();

	useEffect(() => {
		if (el && link) {
			registerScreen({ el, id, link });
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
			{label && (
				<Text.Title css={{ position: 'absolute', top: space._7, left: space._7, zIndex: '1' }}>
					{label}
				</Text.Title>
			)}
			<Suspense fallback={<ActivityIndicator />}>{children}</Suspense>
		</Component>
	);
};
