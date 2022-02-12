import React from 'react';
import { Box } from 'pu2/style-lib';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { NavDesktop, NavMobile } from './Nav';

import { Breakpoint, mediaGreaterThan, mediaLessThan, MediaQ, Space } from './theme';

import { PageHome } from './pages/page.Home';
import { PageCareer } from './pages/page.Career';
import { PageLife } from './pages/page.Life';
import { PageProjects } from './pages/page.Projects';
import { MediaHide } from './MediaHide';
import { Flex } from './primitives';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

const navWidth = '180px';

const Main = (props: BoxProps) => {
	const loc = useLocation();
	console.log(loc);
	return (
		<Box as="main" {...props}>
			<Outlet />
		</Box>
	);
};

const PageFrame = () => (
	<Box bg="#D6E5f4">
		<MediaHide
			render={(props) => (
				<Box {...props}>
					<NavDesktop w={navWidth} />
					<Main ml={navWidth} minHeight="100vh" overflow="hidden" />
				</Box>
			)}
			q={mediaLessThan(Breakpoint.tablet)}
		/>
		<MediaHide
			render={(props) => (
				<Flex flexDirection="column" minHeight="100vh" {...props}>
					<NavMobile />
					<Main />
				</Flex>
			)}
			q={mediaGreaterThan(Breakpoint.tablet)}
		/>
	</Box>
);

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<PageFrame />}>
				<Route index element={<PageHome />} />
				<Route path="career" element={<PageCareer />} />
				<Route path="life" element={<PageLife />} />
				<Route path="projects" element={<PageProjects />} />
			</Route>
		</Routes>
	);
};
