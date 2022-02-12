import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import type { IconType } from 'react-icons';
import { FontSize } from '../theme';

interface IconProps extends BoxProps {
	as: IconType;
}
export const Icon = (props: IconProps) => <Box {...props} size={FontSize._4} />;
