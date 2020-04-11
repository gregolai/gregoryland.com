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

const Loading2Bar = ({ i }) => (
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

const Loading2 = () => {
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
				<Loading2Bar i={0} />
				<Loading2Bar i={1} />
				<Loading2Bar i={2} />
				<Loading2Bar i={3} />
				<Loading2Bar i={4} />
				<Text.Caption css={{ textAlign: 'center', color: 'white' }}>Loading</Text.Caption>
			</Box>
		</Flex>
	);
};

const NAV_WIDTH = '160px';

const Screen: React.FC<Props> = ({ center = false, background, css, id, link, label, children }) => {
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
				pl: NAV_WIDTH,
				...css
			}}
		>
			<Box>{background}</Box>
			{label && (
				<Text.Title css={{ position: 'absolute', ml: NAV_WIDTH, left: space._7, zIndex: '1' }}>
					{label}
				</Text.Title>
			)}
			<Suspense fallback={<Loading2 />}>{children}</Suspense>
		</Component>
	);
};
export default Screen;
