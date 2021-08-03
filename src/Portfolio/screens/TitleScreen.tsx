import React from 'react';
import { Box, Text, Flex } from '../../core/primitives';
import { space } from '../../core/tokens';

const Lang = ({ children }) => <Text.BodyMedium display="inline-block">{children}</Text.BodyMedium>;
const LangDivider = () => (
	<Text.BodyMedium display="inline-block" px={space._2}>
		{'\u25CF'}
	</Text.BodyMedium>
);

const Polaroid = () => {
	return (
		<Box
			padding="20px 20px 80px 20px"
			background="url('img/grain.png')"
			border="3px solid black"
			transform="rotate(6deg)"
		>
			<img src="//static.gregoryland.com/gregory.jpeg?w=300" />
		</Box>
	);
};

const LeftArea = () => {
	return (
		<Flex p={space._8}>
			<Polaroid />
			<Box pl={space._8} flex="1">
				<Text.MegaTitle display="inline-block" background="black" p={space._5} color="white">
					Hey, I'm Greg
				</Text.MegaTitle>
				<Box background="black" p={space._5} mt={space._6}>
					<Text.BodyBook color="white">
						I've created this website from the ground-up. It's both personal and professional,
						because life's too short to define an identity as just a career. Programming is fun
						and it should stay that way. I've been programming since before 2005. My goal is to
						open up and to express myself, which is something I value more and more every day.
						I've come to some realizations in life by waking up to my spiritual side and seeing
						reality through the eyes of pure awareness.
					</Text.BodyBook>
				</Box>
			</Box>
		</Flex>
	);
};

export const TitleScreen = () => {
	return <LeftArea />;
	return (
		<Flex alignItems="flex-end" pb={space._7}>
			<Flex width="100%">
				<Box flex="1" px={space._7}>
					<Flex justifyContent="space-between">
						<Box>
							<Text.Title as="div">Human</Text.Title>
							<Box>A never-ending quest figuring out why I'm on this planet.</Box>
						</Box>
						<Box>
							<Text.Title as="div">Software Engineer</Text.Title>
							<Box>
								<Lang>TypeScript</Lang>
								<LangDivider />
								<Lang>JavaScript</Lang>
								<LangDivider />
								<Lang>C#</Lang>
							</Box>
						</Box>
					</Flex>
				</Box>

				<Box pr={space._7} pb={space._7}>
					<Box backgroundColor="black" p={space._5} width="300px">
						{/* <BodyBook css={{ color: 'white' }}>
					For instance, I wrote my own little CSS-in-JS component system to support this website,
					without the cruft that comes with using external libraries. I have always been a supporter
					of the "build your own" camp, as it's a great way to learn! I have also learned,
					throughout my professional career, that there's also great value in using trusted,
					well-tested, open source libraries.
				</BodyBook> */}
						<Text.BodyBook color="white">
							Hey, I'm Greg, a software developer in NYC. This site showcases my passion for
							software development and my career experience. I built this site to reflect my joy
							of creation; forging a beautiful website from the ground up, with simplicity in
							mind.
						</Text.BodyBook>
					</Box>
				</Box>
			</Flex>
		</Flex>
	);
};
