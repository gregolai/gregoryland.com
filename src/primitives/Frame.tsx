import React, { forwardRef } from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Breakpoint, mediaLessThan, Space } from '../theme';

interface FrameProps extends BoxProps {}
export const Frame: React.FC<BoxProps> = forwardRef((props: FrameProps, ref) => (
	<Box
		px={Space._9}
		py={Space._6}
		bg="#F7F2E9"
		{...props}
		css={{
			...props.css,
			[mediaLessThan(Breakpoint.tablet)]: {
				px: Space._5,
				py: Space._5
			}
		}}
	/>
));
