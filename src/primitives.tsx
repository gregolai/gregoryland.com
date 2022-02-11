import React, { forwardRef } from 'react';
import { Box } from 'pu2/style-lib';
import { FontSize, Space } from './theme';
import type { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

type BoxProps = React.ComponentPropsWithRef<typeof Box>;

export const createComponent = (baseProps: BoxProps) =>
	forwardRef<HTMLElement, BoxProps>((props: BoxProps, ref) => (
		<Box {...baseProps} {...props} ref={ref} />
	)) as React.FC<BoxProps>;

export const Text = createComponent({
	as: 'span',
	// lineHeight: '1',
	textRendering: 'optimizeLegibility',
	webkitFontSmoothing: 'subpixel-antialiased',
	mozOsxFontSmoothing: 'grayscale',
	// color: Palette.mineshaft,
	m: Space._0
});

interface ButtonProps extends BoxProps {
	children?: React.ReactNode;
}

interface IconTextProps extends BoxProps {
	children?: React.ReactNode;
	Icon?: IconType | false;
	IconRight?: IconType | false;
}

export const IconText = ({ children, Icon, IconRight, ...rest }: IconTextProps) => (
	<Flex alignItems="center" {...rest}>
		{Icon && <Box as={Icon} size={FontSize._3} mr={Space._4} />}
		<Text fontFamily="Chakra Petch,system-ui" fontSize={FontSize._3} fontWeight="600" lineHeight="1">
			{children}
		</Text>
		{IconRight && <Box as={IconRight} size={FontSize._3} ml={Space._4} />}
	</Flex>
);

export const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<Box
			px={Space._6}
			py={Space._5}
			b="2px solid black"
			bg="white"
			color="black"
			display="flex"
			cursor="pointer"
			{...rest}
			css={{
				':hover': {
					bg: 'black',
					color: 'white'
				},
				...rest.css
			}}
		>
			{children}
		</Box>
	);
};

interface LinkButtonProps extends ButtonProps {
	newTab?: boolean;
	to: string;
}

const newTabProps = (newTab?: boolean) =>
	newTab
		? {
				rel: 'noopener noreferrer',
				target: '_blank'
		  }
		: {};

export const InternalLinkButton = ({ newTab, to, ...rest }: LinkButtonProps) => {
	const loc = useLocation();

	let extra: BoxProps = {};
	if (loc.pathname === to) {
		extra.bg = '#A0A0A0';
		extra.color = 'white';
	}
	return <Button as={Link} textDecoration="none" to={to} {...extra} {...rest} {...newTabProps(newTab)} />;
};

export const ExternalLinkButton = ({ newTab, to, ...rest }: LinkButtonProps) => {
	return <Button as="a" textDecoration="none" href={to} to={to} {...rest} {...newTabProps(newTab)} />;
};

export const H1 = (props: BoxProps) => (
	<Text {...props} as="h1" fontFamily="Chakra Petch" fontSize={FontSize._5} />
);
export const H2 = (props: BoxProps) => (
	<Text {...props} as="h2" fontWeight="500" fontFamily="Chakra Petch" fontSize={FontSize._4} />
);
export const H3 = (props: BoxProps) => (
	<Text {...props} as="h3" fontWeight="500" fontFamily="Chakra Petch" fontSize={FontSize._3} />
);
export const H4 = (props: BoxProps) => <Text {...props} as="h4" fontFamily="Chakra Petch" />;
export const H5 = (props: BoxProps) => <Text {...props} as="h5" fontFamily="Chakra Petch" />;
export const H6 = (props: BoxProps) => <Text {...props} as="h6" fontFamily="Chakra Petch" />;

export const Img = (props: BoxProps) => <Box {...props} as="img" />;

export const Li = (props: BoxProps) => <Box {...props} as="li" />;
export const Ul = (props: BoxProps) => <Box {...props} as="ul" />;

export const P = (props: BoxProps) => <Text {...props} as="p" />;

export const Flex = createComponent({ display: 'flex' });
