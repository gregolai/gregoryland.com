import React, { Suspense, useEffect, useState } from 'react';
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

const Loading = () => (
	<Flex
		css={{
			py: space._8,
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<ActivityIndicator />
	</Flex>
);

const NAV_WIDTH = '160px';

const Screen: React.FC<Props> = ({ center = false, css, id, link, label, children }) => {
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
			{label && (
				<Text.Title
					css={{ position: 'absolute', ml: NAV_WIDTH, top: space._7, left: space._7, zIndex: '1' }}
				>
					{label}
				</Text.Title>
			)}
			{/* <Loading /> */}
			<Suspense fallback={<Loading />}>{children}</Suspense>
		</Component>
	);
};
export default Screen;
