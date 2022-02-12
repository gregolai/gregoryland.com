import React from 'react';
import { Palette, Space } from '../resume-theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { SectionFrame, SmallHeading } from './_primitives';

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
			<SmallHeading
				key={skill.name}
				display="inline-block"
				color={Palette.darkest}
				mr={Space._18px}
				mb={Space._4px}
			>
				{skill.name}
			</SmallHeading>
		))}
	</SectionFrame>
);
