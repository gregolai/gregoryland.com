import { useEffect } from 'preact/hooks';
import { useRafState } from 'react-use';

export const useDocumentScroll = (enable = true) => {
	const [top, setTop] = useRafState(document.scrollingElement.scrollTop);

	useEffect(() => {
		if (!enable) return () => {};

		const onScroll = e => {
			setTop(document.scrollingElement.scrollTop);
		};

		const options = {
			capture: false,
			passive: true
		};
		document.addEventListener('scroll', onScroll, options);

		return () => document.removeEventListener('scroll', onScroll, options);
	}, [enable]);

	return top;
};