import React from 'react';
import { Link } from 'react-router-dom';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Space } from '../theme';
import { createComponent } from './_createComponent';

export const Button = createComponent({
	alignItems: 'center',
	as: 'button',
	b: '2px solid black',
	bg: 'white',
	color: 'black',
	cursor: 'pointer',
	display: 'flex',
	px: Space._6,
	py: Space._4,
	css: {
		':hover': {
			bg: 'black',
			color: 'white'
		}
	}
});

interface LinkButtonProps extends BoxProps {
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
