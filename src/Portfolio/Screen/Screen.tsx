import React, { Suspense, useEffect, useState } from 'react';
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

const LoadingBar = ({ i }) => (
	<Box
		css={{
			display: 'inline-block',
			width: '8px',
			height: '0px',
			mx: '2px',
			mt: '24px',
			backgroundColor: 'white',
			animationName: 'loading-bar',
			animationDuration: '400ms',
			animationIterationCount: 'infinite',
			animationDirection: 'alternate',
			animationDelay: `${i * 100}ms`
		}}
	/>
);

const Loading = () => {
	return (
		<Flex
			css={{
				justifyContent: 'center'
			}}
		>
			<Box
				css={{
					p: '8px',
					backgroundColor: 'rgba(0,0,0,0.5)',
					border: '1px solid rgba(0,0,0,0.8)'
				}}
			>
				<LoadingBar i={0} />
				<LoadingBar i={1} />
				<LoadingBar i={2} />
				<LoadingBar i={3} />
				<LoadingBar i={4} />
				<Text.Caption css={{ textAlign: 'center', color: 'white' }}>Loading</Text.Caption>
			</Box>
		</Flex>
	);
};

const NAV_WIDTH = '160px';

const Screen: React.FC<Props> = ({ center = false, background, css, id, link, children }) => {
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
			<Box>{background}</Box>
			<Box css={{ position: 'relative', pl: NAV_WIDTH }}>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</Box>
		</Component>
	);
};
export default Screen;
