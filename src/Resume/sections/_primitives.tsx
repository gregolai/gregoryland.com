import React from 'react';
import { Box } from 'pu2/style-lib';
import { FontSize, LetterSpacing, LineHeight, Palette, Space } from '../resume-theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

// Job / Contact label
export const SmallHeading = (props: BoxProps) => (
	<Box
		color="inherit"
		{...props}
		fontSize={FontSize._14px}
		fontWeight="700"
		letterSpacing="0px"
		lineHeight={LineHeight._18px}
		textTransform="uppercase"
	/>
);

// Work Experience / Career Summary
export const MediumHeading = (props: BoxProps) => (
	<Box
		color={Palette.darkest}
		{...props}
		fontSize={FontSize._18px}
		fontWeight="700"
		letterSpacing={LetterSpacing._4px}
		textTransform="uppercase"
	/>
);

// Company name / College name
export const SubHeading = (props: BoxProps) => (
	<Box
		color={Palette.dark}
		{...props}
		fontSize={FontSize._14px}
		fontWeight="400"
		letterSpacing="0px"
		lineHeight={LineHeight._18px}
	/>
);

interface SectionFrameProps extends BoxProps {
	children: React.ReactNode;
	title: string;
}
export const SectionFrame = ({ title, children, ...rest }: SectionFrameProps) => (
	<Box {...rest}>
		<MediumHeading>{title}</MediumHeading>
		<Box pt={Space._18px}>{children}</Box>
	</Box>
);
