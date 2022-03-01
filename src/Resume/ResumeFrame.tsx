import React from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

interface ResumeFrameProps extends BoxProps {
	children: React.ReactNode;
}
export const ResumeFrame = ({ children, ...rest }: ResumeFrameProps) => (
	<Box lineHeight="1" fontFamily="system-ui,sans-serif" bg="white" {...rest}>
		{children}
	</Box>
);
