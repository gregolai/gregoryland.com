import React from 'react';
import { Box } from 'pu2/style-lib';
import { FontSize, Palette, Space } from '../resume-theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Diamond, HR, MediumHeading } from './_primitives';
import { Flex } from '../../primitives';

const border = `2px solid ${Palette.darkest}`;

interface SkillProps {
	name: string;
	value: number;
}
export const Skill = ({ name, value }: SkillProps) => (
	<Box pt={Space._18px} css={{ ':first-of-type': { pt: '0px' } }}>
		<Box bg={Palette.lighter} overflow="hidden">
			<Box h={Space._12px} bg={Palette.light} w={`${value * 10}%`} />
		</Box>
		<Box textAlign="center" fontSize={FontSize._14px} pt={Space._4px}>
			{name}
		</Box>
	</Box>
);
const HideVerticalStubHack = (props: BoxProps) => (
	<Box {...props} position="absolute" bg={Palette.bg} w="4px" h="8px" />
);

export const Skills = (props: BoxProps) => (
	<Box position="relative" {...props}>
		<HideVerticalStubHack />
		<HideVerticalStubHack right="0px" />
		<Box bx={border} bb={border}>
			<Flex position="relative" alignItems="center">
				<Diamond />
				<MediumHeading px={Space._30px}>Skills</MediumHeading>
				<Flex position="relative" flex="1" alignItems="center">
					<Diamond />
					<HR w="100%" />
				</Flex>
			</Flex>
			<Box px={Space._30px} py={Space._18px}>
				<Skill name="Javascript" value={9} />
				<Skill name="Typescript" value={8} />
				<Skill name="React" value={8} />
				<Skill name="C#, C++, Backend" value={6} />
			</Box>
		</Box>
	</Box>
);
