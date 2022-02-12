import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import { SmallHeading, SectionFrame, SubHeading } from './_primitives';

export const Education = (props: BoxProps) => (
	<SectionFrame {...props} title="Education">
		<SmallHeading>2009</SmallHeading>
		<SmallHeading>Bachelor of Science</SmallHeading>
		<SmallHeading>Computer Science</SmallHeading>
		<SubHeading>California State University, Long Beach</SubHeading>
	</SectionFrame>
);
