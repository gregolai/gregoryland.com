import React, { forwardRef } from 'react';
import { Box } from 'pu2';
import { space } from './tokens';

type BoxProps = React.ComponentPropsWithRef<typeof Box>;

export const createComponent = (baseProps: BoxProps) => {
	return forwardRef<HTMLElement, BoxProps>(
		(props: BoxProps, ref) =>
			// @ts-ignore
			(baseProps['role'] === 'button' && console.log(baseProps, props)) || (
				<Box {...baseProps} {...props} ref={ref} />
			)
	) as React.FunctionComponent<BoxProps>;
};

export const createTextComponent = (() => {
	return (baseProps: BoxProps) =>
		createComponent({
			textRendering: 'optimizeLegibility',
			webkitFontSmoothing: 'antialiased',
			mozOsxFontSmoothing: 'grayscale',
			color: '#313131',
			m: space._0,
			...baseProps
		});
})();

const Label = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '9.75px',
		lineHeight: '11px',
		letterSpacing: '0.75px',
		textTransform: 'uppercase'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.Label';
	}
	return createTextComponent(baseProps);
})();

const Caption = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '12px',
		lineHeight: '16px'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.Caption';
	}
	return createComponent(baseProps);
})();

const Action = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '12.5px',
		lineHeight: '22px',
		letterSpacing: '0.5px',
		textTransform: 'uppercase'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.Action';
	}
	return createComponent(baseProps);
})();

const BodyBook = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '14px',
		lineHeight: '22px'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.BodyBook';
	}
	return createComponent(baseProps);
})();

const BodyBookTabular = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '14px',
		lineHeight: '22px',
		'font-feature-settings': '"tnum" on, "lnum" on'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.BodyBookTabular';
	}
	return createComponent(baseProps);
})();

const BodyMedium = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '14px',
		lineHeight: '22px',
		fontWeight: '600'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.BodyMedium';
	}
	return createComponent(baseProps);
})();

const Subtitle = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '18px',
		lineHeight: '28px',
		fontWeight: '600',
		letterSpacing: '1px'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.Subtitle';
	}
	return createComponent(baseProps);
})();

const Title = (() => {
	const baseProps = {
		as: 'p',
		fontSize: '28px',
		lineHeight: '42px',
		fontWeight: '600',
		letterSpacing: '1px'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.Title';
	}
	return createComponent(baseProps);
})();

const MegaTitle = (() => {
	const baseProps = {
		as: 'h1',
		fontSize: '78px',
		lineHeight: '90px',
		fontWeight: '600',
		letterSpacing: '1px'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Text.MegaTitle';
	}
	return createComponent(baseProps);
})();

export const Text = {
	Label,
	Caption,
	Action,
	BodyBook,
	BodyBookTabular,
	BodyMedium,
	Subtitle,
	Title,
	MegaTitle
};

export const Button = (() => {
	const baseProps = {
		role: 'button',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Button';
	}
	return createComponent(baseProps);
})();

export const Flex = (() => {
	const baseProps = {
		display: 'flex'
	};
	if (__DEV__) {
		baseProps['data-text-tag'] = 'Flex';
	}
	return createComponent(baseProps);
})();

export { Box };
