import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Box, Flex, Text } from '../../core/primitives';
import { space } from '../../core/tokens';
import { NAV_WIDTH } from '../Nav';

type BoxProps = React.ComponentProps<typeof Box>;

interface ScreenProps {
	background?: React.ReactElement;
	center?: boolean;
	children: React.ReactChild | React.ReactChild[];
	css?: BoxProps['css'];
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

const Loading = () => (
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

export const Screen: React.FC<ScreenProps> = ({ center = false, background, css, children }) => {
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
				ml={NAV_WIDTH}
				display={center && 'flex'}
				alignItems={center && 'center'}
				justifyContent={center && 'center'}
			>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</Box>
		</Box>
	);
};
