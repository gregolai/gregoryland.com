// A (2 + 2*i) = 2, 4, 8,
// B (6 + 2*i) = 6, 12, 24
// C (18 + 2*i) = 18, 36, 54
export const enum Space {
	_0 = '0px',
	_1 = '2px', // A
	_2 = '4px', // A
	_3 = '6px', // B
	_4 = '8px', // A
	_5 = '12px', // B
	_6 = '18px', // C
	_7 = '24px', // B
	_8 = '36px', // C
	_9 = '54px' // C
}

export const enum FontSize {
	_0 = '11px',
	_1 = '13px',
	_2 = '16px',
	_3 = '20px',
	_4 = '24px',
	_5 = '32px'
}

export const enum LineHeight {
	_0 = '12px',
	_1 = '15px',
	_2 = '19px',
	_3 = '24px',
	_4 = '30px'
}

/**
 * Names from: https://chir.ag/projects/name-that-color/
 */
export const enum Palette {
	black = '#000000',
	linkwater = '#D9E4F5',
	mineshaft = '#323232'
}

/**
 * https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/
 */
export const enum MediaQ {
	phone = '@media only screen and (max-width: 480px)',
	tablet = '@media only screen and (max-width: 768px)',
	smallScreen = '@media only screen and (max-width: 1024px)'
}

export const enum Breakpoint {
	phone = 480,
	tablet = 768,
	smallScreen = 1024
}

export const mediaLessThan = (bp: Breakpoint) => `@media only screen and (max-width:${bp}px)`;
export const mediaGreaterThan = (bp: Breakpoint) => `@media only screen and (min-width:${bp + 1}px)`;
