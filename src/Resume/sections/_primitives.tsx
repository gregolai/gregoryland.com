import React from 'react';
import { Box } from 'pu2/style-lib';
import { FontSize, LetterSpacing, LineHeight, Palette, Space } from '../resume-theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { mediaLessThan, Breakpoint } from '../../theme';

const border = `2px solid ${Palette.darkest}`;

export const HR = (props: BoxProps) => <Box bb={border} mt="-1px" {...props} />;

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

// "Gregory" and "Dalton"
export const NameHeading = (props: BoxProps) => (
	<Box
		color={Palette.darkest}
		{...props}
		fontSize={FontSize._39px}
		letterSpacing={LetterSpacing._4px}
		textTransform="uppercase"
	/>
);

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
		color={Palette.darker}
		{...props}
		fontSize={FontSize._14px}
		fontWeight="400"
		letterSpacing="0px"
		lineHeight={LineHeight._20px}
	/>
);

export const Para = (props: BoxProps) => (
	<Box {...props} fontSize={FontSize._14px} letterSpacing="0px" lineHeight={LineHeight._20px} />
);

interface SectionFrameProps extends BoxProps {
	children: React.ReactNode;
	title: string;
}
export const SectionFrame = ({ title, children, ...rest }: SectionFrameProps) => (
	<Box {...rest}>
		<MediumHeading>{title}</MediumHeading>
		<Box
			pt={Space._18px}
			css={{
				[mediaLessThan(Breakpoint.tablet)]: {
					pt: Space._8px
				}
			}}
		>
			{children}
		</Box>
	</Box>
);
