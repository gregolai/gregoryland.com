import React from 'react';
import { Box, Text, Flex } from '../../core/primitives';
import { palette, space } from '../../core/tokens';

const Lang = ({ children }) => <Text.BodyMedium display="inline-block">{children}</Text.BodyMedium>;
const LangDivider = () => (
	<Text.BodyMedium display="inline-block" px={space._2}>
		{'\u25CF'}
	</Text.BodyMedium>
);

const Polaroid = () => (
	<Box
		position="absolute"
		padding="20px 20px 80px 20px"
		background="url('img/grain.png')"
		backgroundSize="300px"
		border={`2px solid ${palette.mineshaft}`}
		transform="rotate(6deg)"
		boxShadow="inset 2px 2px 6px rgb(0,0,0,0.4), 4px 4px 10px rgba(0,0,0,0.5)"
	>
		<img src="//static.gregoryland.com/gregory.jpeg?w=300" />
	</Box>
);

export const TitleScreen = () => {
	return (
		<Flex p={space._8}>
			<Polaroid />
			<Box pl="400px" flex="1">
				<Text.MegaTitle display="inline-block" background="black" p={space._5} color="white">
					Hey, I'm Greg
				</Text.MegaTitle>
				<Box background="black" p={space._5} mt={space._6}>
					<Text.BodyBook color="white">
						I've created this website from the ground-up. It's both personal and professional,
						because life's too short to define an identity as just a career. Programming is fun
						and it should stay that way. I've been programming since before 2005. My goal is to
						open up and to express myself, which is something I haven't been great at in the past.
						I've come to some realizations in life by connecting with my spiritual side.
					</Text.BodyBook>
				</Box>
				<Box pl={space._5} mt={space._2}>
					<Lang>TypeScript</Lang>
					<LangDivider />
					<Lang>JavaScript</Lang>
					<LangDivider />
					<Lang>Node</Lang>
					<LangDivider />
					<Lang>C#</Lang>
					<LangDivider />
					<Lang>C++</Lang>
				</Box>
			</Box>
		</Flex>
	);
};
