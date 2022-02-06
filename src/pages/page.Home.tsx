import React from 'react';
import { Box } from 'pu2/style-lib';
import { MediaQ, Space } from '../theme';
import { Button, H2, H3, Img, P } from '../primitives';
import { Links } from '../Links';

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
			<Box gridArea="c" py={Space._6} px={Space._8} bb="2px solid black" bg="#f7f2e9">
				<H2>Human / Programmer</H2>
				<P py={Space._5}>
					My name's Greg and this is my website. Please have a look and print my resume.
				</P>
				<Button>View my resume</Button>
			</Box>
			<Links gridArea="d" />
		</Box>
	);
};

export const PageHome = () => (
	<>
		<BigGrid />
	</>
);
