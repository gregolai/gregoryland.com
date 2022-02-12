import React, { forwardRef } from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

export const createComponent = (baseProps: BoxProps) =>
	forwardRef<HTMLElement, BoxProps>((props: BoxProps, ref) => (
		<Box {...baseProps} {...props} ref={ref} />
	)) as React.FC<BoxProps>;
