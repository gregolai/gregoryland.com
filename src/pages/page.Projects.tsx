import React from 'react';
import { Box } from 'pu2/style-lib';
import { AiFillGithub } from 'react-icons/ai';
import { Flex, Frame, H3, Icon, LinkButton, Para, Span } from '../primitives';
import { Breakpoint, mediaLessThan, Space } from '../theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

interface ImgLinkProps {
	filename: string;
}
const ImgLink = ({ filename }: ImgLinkProps) => {
	const href = `https://static.gregoryland.com/projects/${filename}`;
	return (
		<Box as="a" href={href}>
			<Box
				as="img"
				h="120px"
				src={`${href}?w=256`}
				css={{
					[mediaLessThan(Breakpoint.tablet)]: {
						h: '80px'
					}
				}}
			/>
		</Box>
	);
};

interface ProjectProps {
	children: React.ReactNode;
	github?: string;
	imgs?: string[];
	playSrc?: string;
	title: string;
}
const Project = ({ children, github, imgs, playSrc, title }: ProjectProps) => (
	<Frame
		b="2px solid black"
		mt={Space._6}
		css={{
			':first-of-type': { mt: '0px' },
			[mediaLessThan(Breakpoint.tablet)]: {
				p: Space._5
			}
		}}
	>
		<Flex
			alignItems="center"
			justifyContent="space-between"
			css={{
				[mediaLessThan(Breakpoint.tablet)]: {
					display: 'block'
				}
			}}
		>
			<H3>{title}</H3>
			<Flex
				alignItems="stretch"
				gap={Space._5}
				css={{
					[mediaLessThan(Breakpoint.tablet)]: {
						pt: Space._4
					}
				}}
			>
				{playSrc && (
					<LinkButton newTab to={playSrc}>
						<Span>Open in new tab</Span>
					</LinkButton>
				)}
				{github && (
					<LinkButton
						newTab
						to={github}
					>
						<Icon as={AiFillGithub} mr={Space._5} />
						<Span>View code</Span>
					</LinkButton>
				)}
			</Flex>
		</Flex>
		{imgs && (
			<Flex flexWrap="wrap" gap={Space._4} pt={Space._5}>
				{imgs.map((filename, i) => (
					<ImgLink key={filename} filename={filename} />
				))}
			</Flex>
		)}
		<Para textIndent="0px">{children}</Para>
	</Frame>
);

export const PageProjects = () => (
	<Box p={Space._6}>
		<Project github="https://github.com/gregolai/gregoryland.com" title="gregoryland.com">
			A mobile-friendly website built using a my custom style lib and server-side rendering. You're looking at it right now.
		</Project>
		<Project github="https://github.com/gregolai/pu2/tree/master/src/style-lib" title="Style Lib">
			(Yet another) CSS-in-JS styling library I wrote. It's being used on this site.
		</Project>
		<Project github="https://github.com/gregolai/animator" title="Squarespace Animator">
			A project I worked on during "hack week" at Squarespace. It's a CSS animation tool.
		</Project>
		<Project
			github="https://github.com/gregolai/snek"
			imgs={['snek1.png']}
			playSrc="https://gregoryland.com/projects/snek/"
			title="SNEK"
		>
			A small snake game I wrote for my hiring process at Squarespace.
		</Project>
		<Project
			github="https://github.com/gregolai/vimeo-player"
			imgs={['html5-player1.png', 'html5-player2.png']}
			playSrc="https://gregoryland.com/projects/vimeo-player/public/"
			title="HTML5 Vimeo Player"
		>
			I wrote this for a Vimeo interview. I learned a lot about the HTML5 video API.
		</Project>
		<Project
			github="https://github.com/gregolai/warnew"
			imgs={['war1.png', 'war2.png']}
			playSrc="https://gregoryland.com/projects/warnew/"
			title="War Game"
		>
			A little Warcraft 2 clone I started working on.
		</Project>
		<Project
			github="https://github.com/gregolai/starfield-demo"
			imgs={['starfield-as-1.png', 'starfield-js-1.png']}
			playSrc="https://gregoryland.com/projects/starfield-js/"
			title="Starfields"
		>
			A couple of star field projects using ActionScript, then Javascript.
		</Project>
		<Project
			github="https://github.com/gregolai/canvas-masking-demo"
			imgs={['masking.png']}
			playSrc="https://gregoryland.com/projects/masking/"
			title="Canvas Masking"
		>
			A little JS canvas masking demo.
		</Project>
		<Project
			imgs={[
				'cmdtool1.png',
				'cmdtool2.png',
				'cmdtool3.png',
				'cmdtool4.png',
				'cmdtool5.png',
				'cmdtool6.png'
			]}
			title="CmdTool"
		>
			My friend and I had an idea for a tool to visualize command-line (CLI) commands as graphical (GUI)
			equivalents. It was one of my first web projects. Kinda like a command-line wikipedia.
		</Project>
		<Project
			github="https://github.com/gregolai/Icosphere"
			imgs={['ico-lod0-1.png', 'ico-lod5-1.png']}
			title="IcoSphere"
		>
			An icosahedron that can be subdivided.
		</Project>
		<Project
			github="https://github.com/gregolai/CatGame"
			imgs={['catgame1.png', 'catgame2.png']}
			title="Cat Game"
		>
			The start of a game where you play as a cat that sneaks around the neighborhood stealing things
			and completing missions.
		</Project>
	</Box>
);
