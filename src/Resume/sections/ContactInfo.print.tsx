import React from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Palette, Space } from '../resume-theme';
import { MdFace, MdOutlineEmail } from 'react-icons/md';
import { SmallHeading } from './_primitives';
import { Flex, Icon, Span } from '../../primitives';
import { mediaPrint } from '../../theme';

const Email = (props: BoxProps) => (
	<Box {...props}>
		<SmallHeading>Email</SmallHeading>
		<Span>gregolai@gmail.com</Span>
	</Box>
);
const Website = (props: BoxProps) => (
	<Box {...props}>
		<SmallHeading>Website</SmallHeading>
		<Span>www.gregoryland.com</Span>
	</Box>
);

export const ContactInfoPrint = { Email, Website };
