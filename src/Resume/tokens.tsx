import React, { forwardRef } from 'react';
import { StyledPrimitive } from 'pu2';

const BASE_TEXT_STYLE = {
	textRendering: 'optimizeLegibility',
	webkitFontSmoothing: 'antialiased',
	mozOsxFontSmoothing: 'grayscale',
	color: '#313131',
	margin: 0
};

const createPrimitive = (name, baseProps, css) => {
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

const createText = (name, baseProps, css) => {
	if (__DEV__) {
		baseProps['debug-tag'] = name;
	}

	return createPrimitive(`Text.${name}`, baseProps, {
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

// const Bullet = props => (
// 	<li {...props} className={cx(css.bullet, props.className)}>
// 		{/* <div
// 			style={{
// 				background: 'black',
// 				width: 4,
// 				height: 4,
// 				display: 'inline-block',
// 				marginRight: 8
// 			}}
// 		/> */}
// 		{props.children}
// 	</li>
// );

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

export const Box = createPrimitive(undefined, undefined, {});
export const Button = createPrimitive(
	undefined,
	{ role: 'button' },
	{
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
);
export const Flex = createPrimitive(undefined, undefined, { display: 'flex' });
