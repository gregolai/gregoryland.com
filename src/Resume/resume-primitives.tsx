import React from 'react';
import { Box, useStyle } from 'pu2/style-lib';
import { FontSize, LetterSpacing, LineHeight, Palette } from './resume-theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

export const Icon = ({ Comp, ...rest }: any) => <Comp className={useStyle(rest)} />;

export const Diamond = (props: BoxProps) => (
	<Box
		position="absolute"
		left="-1px"
		width="8px"
		height="8px"
		bg={Palette.darkest}
		transform="translateX(-50%) rotateZ(45deg)"
		{...props}
	/>
);

// Job / Contact label
export const SmallHeading = (props: BoxProps) => (
	<Box
		color={Palette.darkest}
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

export const NameHeading = (props: BoxProps) => (
	<Box
		color={Palette.darkest}
		{...props}
		fontSize={FontSize._39px}
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

export const Para = (props: BoxProps) => (
	<Box {...props} fontSize={FontSize._14px} letterSpacing="0px" lineHeight={LineHeight._20px} />
);
