import React, { Fragment } from 'react';
import TitleScreen from './screens/TitleScreen';
import MusicPlayerScreen from './screens/MusicPlayerScreen';
import LoremIpsumScreen from './screens/LoremIpsumScreen';
import FourthScreen from './screens/FourthScreen';
import ResumeScreen from './screens/ResumeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

export const Screens = () => {
	return (
		<Fragment>
			<TitleScreen />
			<ResumeScreen />
			<MusicPlayerScreen />
			<LoremIpsumScreen />
			<FourthScreen />
			<ProjectsScreen />
		</Fragment>
	);
};
