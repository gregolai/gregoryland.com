import React, { useState, useEffect } from 'react';
import { Box, Text, Flex } from 'core/primitives';
import { space } from 'core/tokens';

export default () => {
	return (
		<Box>
			<Box css={{ mr: '348px' }}>
				<Text.MegaTitle as="div">Gregory Dalton</Text.MegaTitle>
				<Box css={{ position: 'relative' }}>
					<Text.Subtitle as="div">Software Engineer</Text.Subtitle>
					<Flex css={{ justifyContent: 'space-around' }}>
						<Text.BodyMedium css={{ display: 'inline-block' }}>TypeScript</Text.BodyMedium>
						<Text.BodyMedium css={{ display: 'inline-block', px: space._2 }}>
							{'\u25CF'}
						</Text.BodyMedium>
						<Text.BodyMedium css={{ display: 'inline-block' }}>JavaScript</Text.BodyMedium>
						<Text.BodyMedium css={{ display: 'inline-block', px: space._2 }}>
							{'\u25CF'}
						</Text.BodyMedium>
						<Text.BodyMedium css={{ display: 'inline-block' }}>C#</Text.BodyMedium>
						<Text.BodyMedium css={{ display: 'inline-block', px: space._2 }}>
							{'\u25CF'}
						</Text.BodyMedium>
						<Text.BodyMedium css={{ display: 'inline-block' }}>C++</Text.BodyMedium>
					</Flex>
				</Box>
			</Box>

			<Box
				css={{
					position: 'absolute',
					bottom: space._5,
					right: space._5,
					background: 'black',
					p: space._5,
					width: '300px'
				}}
			>
				{/* <Text.BodyBook css={{ color: 'white' }}>
					For instance, I wrote my own little CSS-in-JS component system to support this website,
					without the cruft that comes with using external libraries. I have always been a supporter
					of the "build your own" camp, as it's a great way to learn! I have also learned,
					throughout my professional career, that there's also great value in using trusted,
					well-tested, open source libraries.
				</Text.BodyBook> */}
				<Text.BodyBook css={{ color: 'white' }}>
					Hey, I'm Greg, a software developer in NYC. This site showcases my passion for software
					development and my career experience. I built this site to reflect my joy of creation;
					forging a beautiful website from the ground up, with simplicity in mind.
				</Text.BodyBook>
			</Box>
		</Box>
	);
};
