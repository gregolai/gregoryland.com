import { useState, useEffect } from 'preact/hooks';

export default () => {
	const [state, setState] = useState<[number, number]>([window.innerWidth, window.innerHeight]);
	useEffect(() => {
		const onResize = () => setState([window.innerWidth, window.innerHeight]);
		// Orientation changes don't immediately update window.innerHeight, but they fire a
		// resize event afterwards which does
		// https://stackoverflow.com/a/49383279
		const onAfterOrientationChange = () => {
			window.removeEventListener('resize', onAfterOrientationChange);
			onResize();
		};
		const onOrientationChange = () => window.addEventListener('resize', onAfterOrientationChange);
		window.addEventListener('resize', onResize);
		window.addEventListener('orientationchange', onOrientationChange);
		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('resize', onAfterOrientationChange);
			window.removeEventListener('orientationchange', onOrientationChange);
		};
	}, []);
	return state;
};
