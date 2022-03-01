import React from 'react';
import { Palette, Space } from '../resume-theme';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { SectionFrame, SubHeading } from './_primitives';

const skills = [
	{ name: 'Javascript' },
	{ name: 'Typescript' },
	{ name: 'React' },
	{ name: 'NodeJS' },
	{ name: 'C#' },
	{ name: 'C++' }
];

export const Skills = (props: BoxProps) => (
	<SectionFrame {...props} title="Skills">
		{skills.map((skill) => (
			<SubHeading key={skill.name} display="inline-block" color={Palette.darkest} mr={Space._18px}>
				{skill.name}
			</SubHeading>
		))}
	</SectionFrame>
);
