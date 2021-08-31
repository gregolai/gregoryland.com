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
		padding="20px 20px 40px 20px"
		background="url('img/grain.png')"
		backgroundSize="300px"
		border={`2px solid ${palette.mineshaft}`}
		transform="rotate(6deg)"
		boxShadow="inset 2px 2px 6px rgb(0,0,0,0.4), 4px 4px 10px rgba(0,0,0,0.5)"
	>
		<img src="//static.gregoryland.com/gregory.jpeg?w=300" width="300px" />
		<Text.BodyMedium textAlign="right">With love...from Austin, TX.</Text.BodyMedium>
		<Text.BodyMedium textAlign="right">@gregolai</Text.BodyMedium>
	</Box>
);

const BigBlock = ({ children, mt }) => (
	<Box background="black" p={space._4} mt={mt}>
		<Text.BodyBook color="white">{children}</Text.BodyBook>
	</Box>
);

export const TitleScreen = () => {
	return (
		<Flex px={space._8} pt={space._8} pb={space._6}>
			<Polaroid />
			<Box pl="400px" flex="1">
				<Text.MegaTitle
					display="inline-block"
					background="black"
					px={space._4}
					pb={space._2}
					pt={space._0}
					color="white"
				>
					Hey, I'm Greg
				</Text.MegaTitle>

				<BigBlock mt={space._4}>
					I've created this website from the ground-up. It's both personal and professional, y'all!
					Programming is fun and it should stay that way. I've been writing code since before 2005
					(high school), developing custom video game mods and creating levels. I'm a humble guy who
					enjoys life, wherever it takes me.
				</BigBlock>
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
