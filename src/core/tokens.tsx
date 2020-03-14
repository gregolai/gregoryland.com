// https://www.carbondesignsystem.com/guidelines/spacing/
export const enum layout {
	_0 = '0px',
	_1 = '16px',
	_2 = '24px',
	_3 = '32px',
	_4 = '48px',
	_5 = '64px',
	_6 = '96px',
	_7 = '160px'
}

// https://www.carbondesignsystem.com/guidelines/spacing/
// export const enum space {
// 	_0 = '0px',
// 	_1 = '2px',
// 	_2 = '4px',
// 	_3 = '8px',
// 	_4 = '12px',
// 	_5 = '16px',
// 	_6 = '24px',
// 	_7 = '32px',
// 	_8 = '40px',
// 	_9 = '48px'
// }

// A (4 + 2*i) = 4, 8, 16,
// B (12 + 2*i) = 12, 24, 48
// C (36 + 2*i) = 36, 72
export const enum space {
	_0 = '0px',
	_1 = '4px', // A
	_2 = '8px', // A
	_3 = '12px', // B
	_4 = '16px', // A
	_5 = '24px', // B
	_6 = '36px', // C
	_7 = '48px', // B
	_8 = '72px' // C
}
