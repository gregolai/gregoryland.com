import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import { FontSize, Space } from '../theme';
import { createComponent } from './_createComponent';

/**
 * Considerations:
 * as,
 * color,
 * fontFamily,
 * fontSize,
 * fontWeight,
 * lineHeight
 */

const textRendering = {
	textRendering: 'optimizeLegibility',
	webkitFontSmoothing: 'subpixel-antialiased',
	mozOsxFontSmoothing: 'grayscale'
};

export const H1 = createComponent({
	as: 'h1',
	fontFamily: 'Chakra Petch',
	fontSize: FontSize._5,
	lineHeight: '1.1em',
	...textRendering
});

export const H3 = createComponent({
	as: 'h3',
	fontFamily: 'Chakra Petch',
	fontSize: FontSize._4,
	fontWeight: '500',
	lineHeight: '1.1em',
	...textRendering
});

export const Li = createComponent({
	as: 'li',
	fontSize: FontSize._2,
	lineHeight: '1.4em',
	my: Space._4,
	...textRendering
});

export const Para = createComponent({
	as: 'p',
	fontSize: FontSize._2,
	lineHeight: '1.4em',
	my: Space._4,
	textIndent: Space._8,
	...textRendering
});

export const Span = createComponent({
	as: 'span',
	color: 'inherit',
	fontSize: FontSize._2,
	lineHeight: '1em',
	...textRendering
});

export const Ul = createComponent({
	as: 'ul',
	pl: Space._8
});
