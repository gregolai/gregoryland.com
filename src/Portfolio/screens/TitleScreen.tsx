import React, { useState, useEffect } from 'react';
import { Box, Text, Flex } from 'core/primitives';
import { space } from 'core/tokens';

export default () => {
	return (
		<Box>
			<Flex css={{ justifyContent: 'center' }}>
				<Box>
					<Box css={{ position: 'relative' }}>
						<Text.Title as="div">Gregory Dalton</Text.Title>
					</Box>
					<Box css={{ position: 'relative' }}>
						<Text.Subtitle as="div">Software Engineer</Text.Subtitle>
					</Box>
				</Box>
			</Flex>
			<Box css={{ mx: space._8, px: space._8 }}>
				<Text.BodyBook css={{ pt: space._5 }}>
					Hey, I'm Greg, a software developer in NYC. This site showcases my passion for software
					development and my career experience. I built this site to reflect my joy of creation;
					forging a beautiful website from the ground up, with simplicity in mind.
				</Text.BodyBook>
				{/*  */}
			</Box>

			<Box css={{ background: 'black', p: space._5, width: '400px' }}>
				<Text.BodyBook css={{ color: 'white' }}>
					For instance, I wrote my own little CSS-in-JS component system to support this website,
					without the cruft that comes with using external libraries. I have always been a supporter
					of the "build your own" camp, as it's a great way to learn! I have also learned,
					throughout my professional career, that there's also great value in using trusted,
					well-tested, open source libraries.
				</Text.BodyBook>
			</Box>
		</Box>
	);
};
