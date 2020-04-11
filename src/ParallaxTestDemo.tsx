import React, { Fragment, createContext, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import useDocumentScroll from './Portfolio/useDocumentScroll';

import useWindowInnerDimensions from './Portfolio/useWindowInnerDimensions';

interface ParallaxProviderProps {
	children: React.ReactChild;
	container: HTMLElement;
}
const ParallaxContext = createContext(null);
const ParallaxProvider2 = ({ children, container }: ParallaxProviderProps) => {
	const elements = useRef<HTMLElement[]>([]);
	const [winWidth, winHeight] = useWindowInnerDimensions();

	const register = (element: HTMLElement) => {
		elements.current.push(element);
	};
	const unregister = (element: HTMLElement) => {
		elements.current.splice(elements.current.indexOf(element), 1);
	};
	const getTop = () => {};

	return (
		<ParallaxContext.Provider value={{ register, unregister, getTop }}>
			{children}
		</ParallaxContext.Provider>
	);
};

const TARGET_STYLE = {
	position: 'absolute',
	top: 2000,
	height: 200,
	width: 200,
	background: 'black',
	color: 'white'
};

const ParallaxOriginalTarget = () => {
	return (
		<div
			style={
				{
					...TARGET_STYLE,
					left: TARGET_STYLE.height,
					opacity: 0.5
				} as any
			}
		>
			ORIGINAL TARGET
		</div>
	);
};

const ParallaxTarget = ({ cacheTargetHeight, getTargetHeight, parallaxFactor }) => {
	const { scrollY } = useDocumentScroll();
	const [element, setElement] = useState<HTMLElement>(null);
	const [y0, setY0] = useState(null);
	const [cachedH, setCachedH] = useState(null);
	const [windowWidth, windowHeight] = useWindowInnerDimensions();

	useEffect(() => {
		if (element) {
			// Get Ay0
			setY0(element.offsetTop);
			if (cacheTargetHeight) {
				setCachedH(getTargetHeight(element));
			}
		}
	}, [element]);

	const style: any = { ...TARGET_STYLE };
	if (y0 !== null) {
		// Can calculate parallax now
		const h = cachedH === null ? getTargetHeight(element) : cachedH;
		const halfH = h / 2;
		const halfWindowH = windowHeight / 2;

		const y0Center = y0 + halfH;

		const yCenter = y0Center + parallaxFactor * (scrollY + halfWindowH - y0Center);

		style.top = yCenter - halfH;
	}

	const rect = element ? element.getBoundingClientRect() : null;

	return (
		<Fragment>
			<div
				style={{
					position: 'fixed',
					top: 16,
					right: 16,
					zIndex: 100
				}}
			>
				{rect && (
					<Fragment>
						<div>TOP: {rect.top}</div>
						<div>BOTTOM: {window.innerHeight - rect.bottom}</div>
					</Fragment>
				)}
			</div>
			<div ref={setElement} style={style}>
				TARGET
			</div>
			<ParallaxOriginalTarget />
		</Fragment>
	);
};

const parallaxFactor = 0.9;
const getTargetHeight = el =>
	el.clientHeight; /* (() => {
	let h = -1; // cache h
	return element => (h === -1 ? (h = element.clientHeight) : h);
})();*/

const ParallaxTestDemo = () => {
	// TODO:
	// - Prevent flickering without needing to call useDocumentScroll() at a higher level
	// - Allow for a parent element to calculate offsetTop from (instead of using page top)

	const [pageElement, setPageElement] = useState(null);

	// function loop() {
	// 	console.log(
	// 		'A',
	// 		document.readyState,
	// 		document.scrollingElement.clientHeight,
	// 		document.scrollingElement.scrollTop
	// 	);
	// 	if (document.scrollingElement.scrollTop === 0) {
	// 		requestAnimationFrame(loop);
	// 	}
	// }
	// loop();

	// FOR SOME REASON, CALLING useDocumentScroll HERE PREVENTS FLICKERING
	const { scrollY } = useDocumentScroll();

	return (
		<div ref={setPageElement} style={{ background: '#ccc', position: 'relative', height: 4000 }}>
			{/* <div style={{ position: 'fixed', top: 16, left: 16, zIndex: 100 }}>SCROLL Y: {scrollY}</div> */}
			{pageElement && (
				<ParallaxTarget
					cacheTargetHeight={true}
					getTargetHeight={getTargetHeight}
					parallaxFactor={parallaxFactor}
				/>
			)}
		</div>
	);
};

export default ParallaxTestDemo;
