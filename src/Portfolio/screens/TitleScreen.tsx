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
		<img src="//static.gregoryland.com/gregory.jpeg?w=300" width="300px" />
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
					Programming is fun and I firmly believe it should stay that way. I've been writing code
					since before 2005, even dipping my feet into developing custom Warcraft III mods. I've
					humbled myself throughout the years.
				</BigBlock>
				<BigBlock mt={space._4}>
					A big struggle of mine is premature optimization of code. I'm aware that it's useful
					during specific scenarios, but mostly irrelevant (depending on the context). It can get in
					the way of releasing the first iteration of a product. Optimization should come later.
					Optimizing too early can lead to unreadable code, such as the famous{' '}
					{
						<Box
							as="a"
							background="white"
							href="https://en.wikipedia.org/wiki/Fast_inverse_square_root#Overview_of_the_code"
						>
							Fast Inverse Square Root
						</Box>
					}{' '}
					(God bless John Carmack). Brilliant!
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
