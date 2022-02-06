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
	_3 = '20px'
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
 * https://stackoverflow.com/questions/16443380/common-css-media-queries-break-points
 */
export const enum MediaQ {
	desktop = '@media only screen and (min-width: 768px)',
	phone = '@media only screen and (max-width: 767px)',
	phonePortrait = '@media only screen and (max-width: 767px) and (orientation: portrait)'
}