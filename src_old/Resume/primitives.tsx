import { createTextComponent, createComponent, Text as _CoreText } from '../core/primitives';
import { space } from './tokens';
export { Box, Button, Flex } from '../core/primitives';

export const Text = {
	..._CoreText,

	JobHeader: (() => {
		const baseProps = {
			as: 'p',
			fontSize: '20px',
			lineHeight: '28px',
			fontWeight: '600',
			margin: '0px'
		};
		if (__DEV__) {
			baseProps['debug-tag'] = 'Text.JobHeader';
		}
		return createComponent(baseProps);
	})(),

	BulletItem: (() => {
		const baseProps = {
			as: 'p',
			fontSize: '16px',
			lineHeight: '22px',
			fontWeight: '400'
		};
		if (__DEV__) {
			baseProps['debug-tag'] = 'Text.BulletItem';
		}
		return createTextComponent(baseProps);
	})(),

	MegaTitle: (() => {
		const baseProps = {
			as: 'h1',
			fontSize: '80px',
			lineHeight: '1',
			fontWeight: '500',
			fontFamily: '"Playfair Display", serif'
		};
		if (__DEV__) {
			baseProps['debug-tag'] = 'Text.MegaTitle';
		}
		return createTextComponent(baseProps);
	})(),

	Section: (() => {
		const baseProps = {
			as: 'h2',
			fontSize: '26px',
			lineHeight: '26px',
			letterSpacing: '0.5px',
			textTransform: 'uppercase'
		};
		if (__DEV__) {
			baseProps['debug-tag'] = 'Text.Section';
		}
	})()
};

export const Ul = (() => {
	const baseProps = {
		as: 'ul',
		role: 'list',
		m: space._0,
		p: space._0
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Ul';
	}
	return createComponent(baseProps);
})();

export const Li = (() => {
	const baseProps = {
		as: 'li',
		role: 'listitem',
		listStyleType: 'none'
	};
	if (__DEV__) {
		baseProps['debug-tag'] = 'Li';
	}
	return createComponent(baseProps);
})();
