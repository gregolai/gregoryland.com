import { createText, createPrimitive, Text as _CoreText } from 'core/primitives';
import { space } from './tokens';
export { Box, Button, Flex } from 'core/primitives';

export const Text = {
	..._CoreText,
	Section: createText(
		'Section',
		{ as: 'h2' },
		{
			fontSize: '18px',
			lineHeight: '20px',
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
		listStyleType: 'none',
		pb: space._6,
		':last-of-type': {
			pb: 0
		}
	}
);
