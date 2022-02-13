import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';

import imgSrc from '../../img/me_suit.jpg';

// const imgSrc =
// 'https://images.unsplash.com/photo-1644123550420-ee28152ab925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2781&q=80';
export const ProfileImage = (props: BoxProps) => (
	<Box
		bg={`url('${imgSrc}')`}
		backgroundSize="cover"
		backgroundPosition="50% 50%"
		filter="brightness(1.5) contrast(0.9) saturate(0.5)"
		{...props}
	/>
);
