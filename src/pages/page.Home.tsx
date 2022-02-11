import React from 'react';
import { Box } from 'pu2/style-lib';
import { MediaQ, Space } from '../theme';
import { Button, Flex, H3, Icon, LinkButton, Para, Span } from '../primitives2';
import { Links } from '../Links';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const gridTemplateAreas = '"b c c c" "b d d d"';
const gridTemplateAreasMobile = '"a a a a" "c c c c" "d d d d"';

const bigImgUrl =
	'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80';

const BigGrid = () => {
	return (
		<Box
			display="grid"
			gridTemplateAreas={gridTemplateAreas}
			gridTemplateColumns="7fr 3fr 3fr 3fr"
			b="2px solid black"
			css={{
				[MediaQ.phone]: {
					gridTemplateAreas: gridTemplateAreasMobile
				}
			}}
		>
			<Box
				bg={`50%/50% url("${bigImgUrl}")`}
				backgroundSize="cover"
				br="2px solid black"
				gridArea="b"
				css={{
					[MediaQ.phone]: {
						display: 'none'
					}
				}}
			/>
			<Box gridArea="c" py={Space._6} px={Space._9} bb="2px solid black" bg="#f7f2e9">
				<Flex>
					<Box flex="1">
						<Button>
							<Span>I am a button</Span>
						</Button>
						<Button>
							<Icon as={FaExternalLinkSquareAlt} />
							<Span pl={Space._4}>I am a button with an Icon</Span>
						</Button>
						<Button>
							<Icon as={FaExternalLinkSquareAlt} />
							<Span px={Space._4}>I am a button with an Icon on both sides</Span>
							<Icon as={FaExternalLinkSquareAlt} />
						</Button>
						<LinkButton newTab to="https://github.com">
							External link
						</LinkButton>
						<LinkButton newTab to="/career">
							Internal link
						</LinkButton>
						<H3>My website</H3>
						<Para>
							My name's Greg and this is my website. Please have a look and print my resume.
						</Para>
						<LinkButton to="/career">
							<Span>View my resume</Span>
						</LinkButton>
					</Box>
				</Flex>
			</Box>
			<Links gridArea="d" />
		</Box>
	);
};

export const PageHome = () => (
	<Box p={Space._6}>
		<BigGrid />
	</Box>
);
