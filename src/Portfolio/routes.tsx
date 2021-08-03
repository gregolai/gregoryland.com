import { Box } from 'pu2';
import React, { lazy } from 'react';
import { Blog } from '../Blog/Blog';
import { Flex, Text } from '../core/primitives';
import { space } from '../core/tokens';
import { useDocumentScrollY } from '../utils/DocumentScrollProvider';
import { Screen } from './screen/Screen';
import { Splat } from './Screen/Splat';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { ResumeScreen } from './screens/ResumeScreen';
import { TitleScreen } from './screens/TitleScreen';

const MusicPlayerScreen = lazy(() =>
	import(
		/* webpackChunkName: "MusicPlayerScreen" */
		'./screens/MusicPlayerScreen'
	).then((module) => ({ default: module.MusicPlayerScreen }))
);

const TitleImage = () => {
	const maskImage = 'linear-gradient(to bottom, black 80%, transparent 100%)';
	const scrollY = useDocumentScrollY();
	return (
		<Box
			position="relative"
			height="100vh"
			overflow="hidden"
			maskImage={maskImage}
			webkitMaskImage={maskImage}
		>
			<img
				style={{
					// Fake parallax
					marginTop: `-${scrollY * 0.2}px`,
					width: '100%',
					objectFit: 'none'
				}}
				src="img/IMG-2660.jpg"
			/>
		</Box>
	);
};

class Pics extends React.Component {
	state = {
		filenames: []
	};

	async componentDidMount() {
		const res = await fetch('http://localhost:8087/streetart');
		const filenames = await res.json();
		this.setState({ filenames });
	}

	render() {
		return (
			<Box>
				{this.state.filenames.map((filename) => {
					return (
						<Box as="a" p={space._4} href={`http://localhost:8087/img/${filename}`}>
							<img src={`http://localhost:8087/img/t/128/${filename}`} />
						</Box>
					);
				})}
			</Box>
		);
	}
}

export const routes = [
	{
		id: 'title',
		label: 'Home',
		path: '/',
		Component: () => (
			<Screen
				background={<TitleImage />}
				css={{
					height: '100vh',
					minHeight: '550px'
				}}
			>
				<TitleScreen />
			</Screen>
		)
	},
	{
		id: 'resume',
		label: 'Resume',
		path: '/resume',
		Component: () => (
			<Screen
				background={
					<>
						<Splat
							color="rgba(255,255,255,0.5)"
							width="1800px"
							x="200px"
							y="600px"
							colorPos="20%"
						/>
						{/* DIAGONAL LINE BACK */}
						<div
							style={{
								background: 'black',
								height: '500px',
								position: 'absolute',
								width: '100%',
								transform: 'translateY(250px) rotate(25deg) scaleX(20)',

								right: '0px',
								bottom: '0px',
								transformOrigin: 'right top'
							}}
						/>
					</>
				}
				center
				css={{
					minHeight: '100vh',
					py: space._6
				}}
			>
				<ResumeScreen />
			</Screen>
		)
	},
	{
		id: 'music',
		label: 'Music Player',
		path: '/music',
		Component: () => (
			<Screen
				background={
					<>
						<Splat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
						<Splat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />

						{/* DIAGONAL LINE BACK */}
						<div
							style={{
								background: 'rgb(97, 95, 107)',
								height: '500px',
								position: 'absolute',
								width: '100%',
								transform: 'translateY(-250px) rotate(-25deg) scaleX(20)',

								top: '0px',
								right: '0px',
								transformOrigin: 'right top'
							}}
						/>
					</>
				}
				center
				css={{
					height: '800px',
					background:
						'linear-gradient(transparent 0%, rgba(175, 204, 232, 0.5) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(181, 175, 233, 0.3) 0%, transparent 350px)'
				}}
			>
				<MusicPlayerScreen />
			</Screen>
		)
	},
	{
		id: 'drawings',
		label: 'Drawings',
		path: '/drawings',
		Component: () => (
			<Screen
				css={{
					padding: space._8
				}}
			>
				<Flex
					p={space._4}
					justifyContent="center"
					background="rgba(255,255,255,0.8)"
					border="2px solid black"
				>
					Showcase my drawings here, both original and from sources.
				</Flex>
			</Screen>
		)
	},
	{
		id: 'blog',
		label: 'Blog',
		path: '/blog',
		Component: () => (
			<Screen
				css={{
					padding: space._8
				}}
			>
				<Flex
					p={space._4}
					justifyContent="center"
					background="rgba(255,255,255,0.8)"
					border="2px solid black"
				>
					Blog about my favorite video games.
				</Flex>
				<Blog />
			</Screen>
		)
	},
	{
		id: 'pics',
		label: 'Pics',
		path: '/pics',
		Component: () => (
			<Screen>
				<Pics />
			</Screen>
		)
	},
	{
		id: 'projects',
		label: 'Projects',
		path: '/projects',
		Component: () => (
			<Screen
				background={
					<>
						<Splat x="50%" y="1200px" color="rgba(255,255,255,0.8)" width="1200px" />
						<Splat x="80%" y="1600px" color="rgba(255,137,60,0.2)" width="2100px" />
						<Splat x="10%" y="2300px" color="rgba(255,0,255,0.2)" width="2100px" />
					</>
				}
				css={{
					minHeight: '100vh',
					background:
						'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
				}}
			>
				<ProjectsScreen />
			</Screen>
		)
	},
	{
		id: 'snek',
		label: 'Snek',
		path: '/snek',
		Component: () => (
			<Screen
				css={{
					height: '700px'
					// background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
				}}
			>
				<Flex justifyContent="space-between" px={space._7}>
					<Box>
						<Text.Caption>May 2017</Text.Caption>
						<Text.Caption as="a" href={'https://gregoryland.com/projects/snek/snek.zip'}>
							Source Code
						</Text.Caption>

						<Text.Caption as="a" href={'https://gregoryland.com/projects/snek/'}>
							Play SNEK
						</Text.Caption>
					</Box>
					<Box>
						<Box backgroundColor="black" p={space._5} width="300px">
							<Text.BodyBook color="white">100% Vanilla HTML/JS/CSS</Text.BodyBook>
						</Box>
					</Box>
				</Flex>
			</Screen>
		)
	}
];
