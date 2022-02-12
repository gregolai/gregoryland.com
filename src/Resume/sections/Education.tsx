import React from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Flex } from '../../primitives';
import { SmallHeading, SectionFrame, SubHeading } from './_primitives';

export const Education = (props: BoxProps) => (
	<SectionFrame {...props} title="Education">
		<Flex justifyContent="space-between">
			<Box>
				<SmallHeading>Bachelor of Science</SmallHeading>
				<SmallHeading>Computer Science</SmallHeading>
			</Box>

			<SmallHeading>2009</SmallHeading>
		</Flex>
		<SubHeading>California State University, Long Beach</SubHeading>
	</SectionFrame>
);
