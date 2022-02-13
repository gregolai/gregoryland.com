import { Breakpoint, mediaLessThan, Space } from '../theme';
import { createComponent } from './_createComponent';

export const Frame = createComponent({
	px: Space._9,
	py: Space._6,
	bg: '#F7F2E9',
	css: {
		[mediaLessThan(Breakpoint.tablet)]: {
			px: Space._5,
			py: Space._5
		}
	}
});
