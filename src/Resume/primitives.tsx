import { createText, createPrimitive, Text as _CoreText } from 'core/primitives';
import { space } from './tokens';
export { Box, Button, Flex } from 'core/primitives';

export const Text = {
	..._CoreText,

	MegaTitle: createText(
		'MegaTitle',
		{ as: 'h1' },
		{
			fontSize: '120px',
			lineHeight: '120px',
			fontWeight: '500',
			/*
font-family: 'Playfair Display', serif;
font-family: 'Odibee Sans', cursive;
font-family: 'Cormorant Garamond', serif;
font-family: 'Nanum Myeongjo', serif;
font-family: 'Old Standard TT', serif;
font-family: 'Markazi Text', serif;
*/

			fontFamily: '"Playfair Display", serif'
			//fontFamily: '"Playfair Display", serif'
		}
	),
	Section: createText(
		'Section',
		{ as: 'h2' },
		{
			fontSize: '26px',
			lineHeight: '26px',
			letterSpacing: '0.5px',
			textTransform: 'uppercase'
		}
	)
};

export const Ul = createPrimitive(
	{
		as: 'ul',
		role: 'list'
	},
	{
		m: space._0,
		p: space._0
	}
);

export const Li = createPrimitive(
	{
		as: 'li',
		role: 'listitem'
	},
	{
		listStyleType: 'none'
	}
);
