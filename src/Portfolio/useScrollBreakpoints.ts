import useDocumentScroll from './useDocumentScroll';

export default ({ init, breakpoints }) => {
	const scrollTop = useDocumentScroll();

	const acc = { ...init };

	for (let i = 0, ii = breakpoints.length; i < ii; ++i) {
		const { from, to, get, bypassBounds } = breakpoints[i];

		if (bypassBounds || (scrollTop >= from && scrollTop < to)) {
			const ratio = (scrollTop - from) / (to - from);
			Object.assign(acc, get(ratio, scrollTop));
		}
	}

	return acc;
};
