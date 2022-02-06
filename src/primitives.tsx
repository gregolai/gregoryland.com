import React, { forwardRef } from 'react';
import { Box } from 'pu2/style-lib';
import { FontSize, Palette, Space } from './theme';

type BoxProps = React.ComponentPropsWithRef<typeof Box>;

export const createComponent = (baseProps: BoxProps) =>
	forwardRef<HTMLElement, BoxProps>((props: BoxProps, ref) => (
		<Box {...baseProps} {...props} ref={ref} />
	)) as React.FC<BoxProps>;

export const Text = createComponent({
	as: 'span',
	textRendering: 'optimizeLegibility',
	webkitFontSmoothing: 'subpixel-antialiased',
	mozOsxFontSmoothing: 'grayscale',
	color: Palette.mineshaft,
	m: Space._0
});

export const Button = (props: BoxProps) => (
	<Box
		border="2px solid black"
		cursor="pointer"
		color="black"
		bg="white"
		px={Space._5}
		py={Space._3}
		css={{
			':hover': {
				color: 'white',
				bg: 'black'
			}
		}}
		{...props}
		as="button"
	/>
);

export const H1 = (props: BoxProps) => <Text {...props} as="h1" fontFamily="Chakra Petch" />;
export const H2 = (props: BoxProps) => <Text {...props} as="h2" fontWeight="500" fontFamily="Chakra Petch" />;
export const H3 = (props: BoxProps) => <Text {...props} as="h3" fontWeight="500" fontFamily="Chakra Petch" />;
export const H4 = (props: BoxProps) => <Text {...props} as="h4" fontFamily="Chakra Petch" />;
export const H5 = (props: BoxProps) => <Text {...props} as="h5" fontFamily="Chakra Petch" />;
export const H6 = (props: BoxProps) => <Text {...props} as="h6" fontFamily="Chakra Petch" />;

export const Img = (props: BoxProps) => <Box {...props} as="img" />;

export const Li = (props: BoxProps) => <Box {...props} as="li" />;
export const Ul = (props: BoxProps) => <Box {...props} as="ul" />;

export const P = (props: BoxProps) => <Text {...props} as="p" />;

export const Flex = createComponent({ display: 'flex' });
