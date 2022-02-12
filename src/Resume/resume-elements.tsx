import React from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Palette } from './resume-theme';

interface ResumeFrameProps extends BoxProps {
	children: React.ReactNode;
}
export const ResumeFrame = ({ children, ...rest }: ResumeFrameProps) => (
	<Box {...rest} position="relative" bg={Palette.bg} lineHeight="1" fontFamily="system-ui,sans-serif">
		{children}
	</Box>
);
