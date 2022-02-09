import React from 'react';
import { Box } from 'pu2/style-lib';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './Nav';
import { Resume } from './Resume/Resume';
import { MediaQ, Space } from './theme';
import { Flex, P } from './primitives';

import { PageHome } from './pages/page.Home';
import { PageCareer } from './pages/page.Career';
import { PageLife } from './pages/page.Life';
import { PageProjects } from './pages/page.Projects';

const navWidth = '180px';

const PageFrame = () => (
	<>
		<Nav
		// w={navWidth}
		// css={{
		// 	[MediaQ.tablet]: {
		// 		position: 'relative',
		// 		flexDirection: 'row',
		// 		h: 'auto',
		// 		w: 'auto'
		// 	}
		// }}
		/>
		<Box
			ml={navWidth}
			py={Space._6}
			px="4%"
			minHeight="100vh"
			bg="#D6E5f4"
			css={{
				[MediaQ.tablet]: {
					ml: '0px'
				}
			}}
		>
			<Header />
			<main>
				<Outlet />
			</main>
		</Box>
	</>
);

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<PageFrame />}>
					<Route index element={<PageHome />} />
					<Route path="career" element={<PageCareer />} />
					<Route path="life" element={<PageLife />} />
					<Route path="projects" element={<PageProjects />} />
				</Route>
			</Routes>
		</>
	);
};
