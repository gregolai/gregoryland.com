import { useEffect } from 'react';
import { useRafState } from 'react-use';

export default (enable = true) => {
	const [top, setTop] = useRafState(document.scrollingElement.scrollTop);

	useEffect(() => {
		if (enable) {
			const onScroll = e => {
				setTop(document.scrollingElement.scrollTop);
			};

			const options = {
				capture: false,
				passive: true
			};
			document.addEventListener('scroll', onScroll, options);

			return () => document.removeEventListener('scroll', onScroll, options);
		}
	}, [enable]);

	return top;
};
