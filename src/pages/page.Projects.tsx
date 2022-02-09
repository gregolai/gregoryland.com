import React from 'react';
import { Box } from 'pu2/style-lib';
import { AiFillGithub } from 'react-icons/ai';
import {
	Anchor,
	AnchorButtonNewTab,
	Button,
	ExternalLinkButton,
	Flex,
	H2,
	H3,
	Img,
	P,
	Text
} from '../primitives';

import aiImgSrc from '../img/gaugan_output.jpg';
import { Space } from '../theme';

interface ProjectProps {
	children: React.ReactNode;
	github?: string;
	playSrc?: string;
	title: string;
}

const Project = ({ children, github, playSrc, title }: ProjectProps) => (
	<Box my={Space._6}>
		<H3>{title}</H3>
		<P>{children}</P>
		<Flex alignItems="center">
			{playSrc && <ExternalLinkButton to={playSrc}>Open in new tab</ExternalLinkButton>}
			{github && (
				<ExternalLinkButton to={github} Icon={AiFillGithub} ml={playSrc && Space._6}>
					View code
				</ExternalLinkButton>
			)}
		</Flex>
	</Box>
);

export const PageProjects = () => (
	<>
		<Project github="https://github.com/gregolai/gregoryland.com" title="gregoryland.com">
			This website.
		</Project>
		<Project github="https://github.com/gregolai/pu2/tree/master/src/style-lib" title="Style Lib">
			(Yet another) CSS-in-JS styling library I wrote. It's being used on this site.
		</Project>
		<Project github="https://github.com/gregolai/animator" title="Squarespace Animator">
			A project I worked on during "hack week" at Squarespace. It's a CSS animation tool.
		</Project>
		<Project
			github="https://github.com/gregolai/snek"
			playSrc="https://gregoryland.com/projects/snek/"
			title="SNEK"
		>
			A small snake game I wrote for Squarespace during my hiring process.
		</Project>
		<Project
			github="https://github.com/gregolai/vimeo-player"
			playSrc="https://gregoryland.com/projects/vimeo-player/public/"
			title="HTML5 Vimeo Player"
		>
			I wrote this for a Vimeo interview. I learned a lot about the JS video API.
		</Project>
		<Project
			github="https://github.com/gregolai/warnew"
			playSrc="https://gregoryland.com/projects/warnew/"
			title="War Game"
		>
			A little Warcraft 2 clone I started working on.
		</Project>
		<Project
			github="https://github.com/gregolai/starfield-demo"
			playSrc="https://gregoryland.com/projects/starfield-js/"
			title="Starfields"
		>
			A couple of star field projects using ActionScript, then Javascript.
		</Project>
		<Project
			github="https://github.com/gregolai/canvas-masking-demo"
			playSrc="https://gregoryland.com/projects/masking/"
			title="Canvas Masking"
		>
			A little JS canvas masking demo.
		</Project>
		<Project title="CmdTool">
			My friend and I had an idea for a tool to visualize command-line (CLI) commands as graphical (GUI)
			equivalents. It was one of my first web projects. Kinda like a command-line wikipedia.
		</Project>
		<Project github="https://github.com/gregolai/Icosphere" title="IcoSphere">
			An icosahedron that can be subdivided.
		</Project>
		<Project github="https://github.com/gregolai/CatGame" title="Cat Game">
			The start of a game where you play as a cat that sneaks around the neighborhood stealing things
			and completes missions.
		</Project>
		<Img src={aiImgSrc} />
	</>
);
