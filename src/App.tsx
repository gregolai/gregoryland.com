import React from 'react';
import { Box } from 'pu2/style-lib';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Resume } from './Resume/Resume';
import { Space } from './theme';
import { Flex, P } from './primitives';

import { PageHome } from './pages/page.Home';
import { PageCareer } from './pages/page.Career';
import { PageLife } from './pages/page.Life';
import { PageProjects } from './pages/page.Projects';

const PageFrame = () => (
	<Box>
		<Header />
		<main>
			<Outlet />
		</main>
	</Box>
);

export const App = () => {
	return (
		<Box py={Space._6} px="4%" minHeight="100vh" bg="#D6E5f4">
			<Routes>
				<Route path="/" element={<PageFrame />}>
					<Route index element={<PageHome />} />
					<Route path="career" element={<PageCareer />} />
					<Route path="life" element={<PageLife />} />
					<Route path="projects" element={<PageProjects />} />
				</Route>
			</Routes>
		</Box>
	);
};
