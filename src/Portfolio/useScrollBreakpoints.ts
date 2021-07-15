import { useDocumentScrollY } from '../utils/DocumentScrollProvider';

export default ({ init, breakpoints }) => {
	const scrollY = useDocumentScrollY();

	const acc = { ...init };

	for (let i = 0, ii = breakpoints.length; i < ii; ++i) {
		const { from, to, get, bypassBounds } = breakpoints[i];

		if (bypassBounds || (scrollY >= from && scrollY < to)) {
			const ratio = (scrollY - from) / (to - from);
			Object.assign(acc, get(ratio, scrollY));
		}
	}

	return acc;
};
