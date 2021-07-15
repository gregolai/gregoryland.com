import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Box, Flex, Text } from '../../core/primitives';
import { space } from '../../core/tokens';
import { NAV_WIDTH } from '../Nav';

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
		animationName="loading-bar"
		animationDuration="400ms"
		animationIterationCount="infinite"
		animationDirection="alternate"
		animationDelay={`${i * 100}ms`}
		backgroundColor="white"
		display="inline-block"
		height="0px"
		mx="2px"
		mt="24px"
		width="8px"
	/>
);

const Loading = () => {
	return (
		<Flex justifyContent="center">
			<Box backgroundColor="rgba(0,0,0,0.5)" border="1px solid rgba(0,0,0,0.8)" p={space._2}>
				<LoadingBar i={0} />
				<LoadingBar i={1} />
				<LoadingBar i={2} />
				<LoadingBar i={3} />
				<LoadingBar i={4} />
				<Text.Caption color="white" textAlign="center">
					Loading
				</Text.Caption>
			</Box>
		</Flex>
	);
};

export const Screen: React.FC<Props> = ({ center = false, background, css, children }) => {
	return (
		<Box position="relative" css={css}>
			{background && (
				<Box position="absolute" top="0px" left="0px" width="100%" height="100%">
					{background}
				</Box>
			)}
			<Box
				position="relative"
				height="100%"
				pl={NAV_WIDTH}
				display={center && 'flex'}
				alignItems={center && 'center'}
				justifyContent={center && 'center'}
			>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</Box>
		</Box>
	);
};
