import React, { lazy, Fragment } from 'react';
import TitleScreen from './screens/TitleScreen';
// import MusicPlayerScreen from './screens/MusicPlayerScreen';
// import LoremIpsumScreen from './screens/LoremIpsumScreen';
// import FourthScreen from './screens/FourthScreen';
// import ResumeScreen from './screens/ResumeScreen';
// import ProjectsScreen from './screens/ProjectsScreen';
import Screen from './Screen';
import { space } from 'core/tokens';

// Height not initially known
import ResumeScreen from './screens/ResumeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

const MusicPlayerScreen = lazy(() =>
	import(
		/* webpackChunkName: "MusicPlayerScreen" */
		'./screens/MusicPlayerScreen'
	)
);
const LoremIpsumScreen = lazy(() =>
	import(
		/* webpackChunkName: "LoremIpsumScreen" */
		'./screens/LoremIpsumScreen'
	)
);
const FourthScreen = lazy(() =>
	import(
		/* webpackChunkName: "FourthScreen" */
		'./screens/FourthScreen'
	)
);

export default () => (
	<Fragment>
		<Screen
			id="title"
			link={{
				label: 'Home',
				pathname: '/'
			}}
			center
			css={{
				height: '100vh',
				background:
					'linear-gradient(rgb(255, 255, 255) 0%, rgb(242, 246, 250) 10%, rgb(214, 229, 244) 90%)'
			}}
		>
			<TitleScreen />
		</Screen>
		<Screen
			id="resume"
			link={{
				label: 'Resume',
				pathname: '/resume'
			}}
			center
			css={{
				minHeight: '100vh',
				py: space._6
			}}
		>
			<ResumeScreen />
		</Screen>
		<Screen
			id="music"
			label="Music Player"
			link={{
				label: 'Music Player',
				pathname: '/music'
			}}
			center
			css={{
				height: '800px',
				background:
					'linear-gradient(transparent 0%, rgba(175, 204, 232, 0.5) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(181, 175, 233, 0.3) 0%, transparent 350px)'
			}}
		>
			<MusicPlayerScreen />
		</Screen>
		<Screen
			id="lorem"
			label="Lorem Ipsum"
			link={{
				label: 'Lorem Ipsum',
				pathname: '/lorem'
			}}
			center
			css={{
				height: '900px',
				background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<LoremIpsumScreen />
		</Screen>
		<Screen
			id="fourth"
			link={{
				label: 'Fourth Screen',
				pathname: '/fourth'
			}}
			center
			css={{
				minHeight: '640px',
				height: '100vh'
			}}
		>
			<FourthScreen />
		</Screen>
		<Screen
			id="projects"
			label="Projects"
			link={{
				label: 'Projects',
				pathname: '/projects'
			}}
			css={{
				minHeight: '100vh',
				background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<ProjectsScreen />
		</Screen>
	</Fragment>
);
