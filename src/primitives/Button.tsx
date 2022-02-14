import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'pu2/style-lib';
import { Breakpoint, mediaLessThan, Space } from '../theme';
import { createComponent } from './_createComponent';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

interface ButtonProps extends BoxProps {
	invert?: boolean;
}

export const Button: React.FC<ButtonProps> = forwardRef(({ invert, ...rest }: ButtonProps, ref) => {
	const invertColorProps = invert && {
		bg: 'black',
		color: 'white'
	};
	return (
		<Box
			ref={ref}
			alignItems="center"
			as="button"
			b="2px solid black"
			bg="white"
			color="black"
			cursor="pointer"
			display="flex"
			m="0px"
			px={Space._6}
			py={Space._4}
			{...rest}
			{...invertColorProps}
			css={{
				':hover': {
					bg: 'black',
					color: 'white'
				},
				[mediaLessThan(Breakpoint.tablet)]: {
					py: Space._5
				},
				...rest.css
			}}
		/>
	);
});

interface LinkButtonProps extends ButtonProps {
	children: React.ReactNode;
	newTab?: boolean;
	to: string;
}
export const LinkButton = ({ children, newTab, to, ...rest }: LinkButtonProps) => {
	const isInternal = to[0] === '/';

	const props: BoxProps = {
		...rest,
		textDecoration: 'none'
	};

	if (isInternal) {
		props.as = Link;
		props.to = to;
	} else {
		props.as = 'a';
		props.href = to;
	}

	if (newTab) {
		props.rel = 'noopener noreferrer';
		props.target = '_blank';
	}

	return <Button {...props}>{children}</Button>;
};
