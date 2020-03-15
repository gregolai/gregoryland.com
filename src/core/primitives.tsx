import React, { forwardRef } from 'react';
import { StyledPrimitive } from 'pu2';
import { space } from './tokens';

const BASE_TEXT_STYLE = {
	textRendering: 'optimizeLegibility',
	webkitFontSmoothing: 'antialiased',
	mozOsxFontSmoothing: 'grayscale',
	color: '#313131',
	m: space._0
};

export const createPrimitive = (baseProps, css) => {
	return forwardRef<any, any>((props, ref) => (
		<StyledPrimitive
			{...baseProps}
			{...props}
			css={{
				...css,
				...props.css
			}}
			ref={ref}
		/>
	));
};

export const createText = (name, baseProps, css) => {
	if (__DEV__) {
		baseProps['debug-tag'] = `Text.${name}`;
	}

	return createPrimitive(baseProps, {
		...BASE_TEXT_STYLE,
		...css
	});
};

const Label = createText(
	'Label',
	{ as: 'p' },
	{
		fontSize: '9.75px',
		lineHeight: '11px',
		letterSpacing: '0.75px',
		textTransform: 'uppercase'
	}
);

const Caption = createText(
	'Caption',
	{ as: 'p' },
	{
		fontSize: '12px',
		lineHeight: '16px'
	}
);

const Action = createText(
	'Action',
	{ as: 'p' },
	{
		fontSize: '12.5px',
		lineHeight: '22px',
		letterSpacing: '0.5px',
		textTransform: 'uppercase'
	}
);

const BodyBook = createText(
	'BodyBook',
	{ as: 'p' },
	{
		fontSize: '14px',
		lineHeight: '22px'
	}
);

const BodyBookTabular = createText(
	'BodyBook',
	{ as: 'p' },
	{
		fontSize: '14px',
		lineHeight: '22px',
		'font-feature-settings': '"tnum" on, "lnum" on'
	}
);

const BodyMedium = createText(
	'BodyMedium',
	{ as: 'p' },
	{
		fontSize: '14px',
		lineHeight: '22px',
		fontWeight: '600'
	}
);

const Subtitle = createText(
	'Subtitle',
	{ as: 'p' },
	{
		fontSize: '18px',
		lineHeight: '28px',
		fontWeight: '600',
		letterSpacing: '1px'
	}
);

const Title = createText(
	'Title',
	{ as: 'p' },
	{
		fontSize: '28px',
		lineHeight: '42px',
		fontWeight: '600',
		letterSpacing: '1.2px'
	}
);

export const Text = {
	Label,
	Caption,
	Action,
	BodyBook,
	BodyBookTabular,
	BodyMedium,
	Subtitle,
	Title
};

export const Box = createPrimitive(undefined, {});
export const Button = createPrimitive(
	{ role: 'button' },
	{
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
);
export const Flex = createPrimitive(undefined, { display: 'flex' });
