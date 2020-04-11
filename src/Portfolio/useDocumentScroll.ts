import { useEffect } from 'react';
import { useRafState } from 'react-use';

export default (enable = true) => {
	const [scrollY, setScrollY] = useRafState(document.scrollingElement.scrollTop);

	console.log({
		scrollY,
		ratioY: scrollY / document.scrollingElement.scrollHeight
	});

	useEffect(() => {
		if (enable) {
			const onScroll = e => {
				setScrollY(document.scrollingElement.scrollTop);
			};

			const options = {
				capture: false,
				passive: true
			};
			document.addEventListener('scroll', onScroll, options);

			return () => document.removeEventListener('scroll', onScroll, options);
		}
	}, [enable]);

	return { scrollY, ratioY: scrollY / document.scrollingElement.scrollHeight };
};
