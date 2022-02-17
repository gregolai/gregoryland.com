import React from 'react';
import { Box } from 'pu2/style-lib';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Breakpoint, mediaLessThan, Space } from '../theme';
import { Frame, H3, Icon, LinkButton, Para, Span } from '../primitives';
import { Links } from '../Links';
const bigImgUrl =
	'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80';

const BigGrid = () => {
	return (
		<Box
			display="grid"
			gridTemplateAreas={'"b c c c" "b d d d"'}
			gridTemplateColumns="7fr 3fr 3fr 3fr"
			b="2px solid black"
			css={{
				[mediaLessThan(Breakpoint.smallScreen)]: {
					gridTemplateColumns: '5fr 3fr 3fr 3fr'
				},
				[mediaLessThan(Breakpoint.tablet)]: {
					gridTemplateAreas: '"a a a a" "c c c c" "d d d d"'
				}
			}}
		>
			<Box
				bg={`50%/50% url("${bigImgUrl}")`}
				backgroundSize="cover"
				br="2px solid black"
				gridArea="b"
				css={{
					[mediaLessThan(Breakpoint.tablet)]: {
						display: 'none'
					}
				}}
			/>
			<Frame gridArea="c" bb="2px solid black">
				<H3>My site</H3>
				<Para>
					Hi, my name's Greg and this is my website. It's primarily meant to showcase my career and
					the projects I've done over the years. I've been working as a web developer since 2014 and
					have been programming little projects on my own for over a decade. I graduated from CSU
					Long Beach with a degree in Computer Science.
				</Para>
				<Para>
					I currently reside in Austin, Texas and looking for a job position that challenges and
					inspires me. I'd prefer to work in an office, but I'm open to a remote role if the job is
					right. Please have a look at my site and print my resume.
				</Para>
				<LinkButton
					display="inline-flex"
					to="/career"
					css={{
						':hover': {
							' .icon': {
								ml: Space._7
							}
						}
					}}
				>
					<Span>View my resume</Span>
					<Icon
						className="icon"
						as={AiOutlineArrowRight}
						transition="margin-left 200ms ease-in-out"
						ml={Space._5}
					/>
				</LinkButton>
			</Frame>
			<Links gridArea="d" />
		</Box>
	);
};

export const PageHome = () => (
	<Box
		p={Space._8}
		css={{
			[mediaLessThan(Breakpoint.tablet)]: {
				p: Space._6
			}
		}}
	>
		<BigGrid />
	</Box>
);
