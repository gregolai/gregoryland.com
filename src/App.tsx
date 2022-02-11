import React from 'react';
import { Box } from 'pu2/style-lib';
import { Outlet, Route, Routes } from 'react-router-dom';
import { NavDesktop, NavMobile } from './Nav';

import { Breakpoint, mediaGreaterThan, mediaLessThan, MediaQ, Space } from './theme';

import { PageHome } from './pages/page.Home';
import { PageCareer } from './pages/page.Career';
import { PageLife } from './pages/page.Life';
import { PageProjects } from './pages/page.Projects';
import { MediaHide } from './MediaHide';
import { Flex } from './primitives2';

const navWidth = '180px';

const PageFrame = () => (
	<Box bg="#D6E5f4">
		<MediaHide
			render={(props) => (
				<Box {...props}>
					<NavDesktop w={navWidth} />
					<Box as="main" ml={navWidth} minHeight="100vh" overflow="hidden">
						<Outlet />
					</Box>
				</Box>
			)}
			q={mediaLessThan(Breakpoint.tablet)}
		/>
		<MediaHide
			render={(props) => (
				<Flex flexDirection="column" minHeight="100vh" {...props}>
					<NavMobile />
					<Box as="main">
						<Outlet />
					</Box>
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
