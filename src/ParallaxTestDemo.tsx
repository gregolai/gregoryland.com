import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import useDocumentScroll from './Portfolio/useDocumentScroll';

import useWindowInnerDimensions from './Portfolio/useWindowInnerDimensions';

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
			style={{
				...TARGET_STYLE,
				left: TARGET_STYLE.height,
				opacity: 0.5
			}}
		>
			ORIGINAL TARGET
		</div>
	);
};

const ParallaxTarget = ({ cacheTargetHeight, getTargetHeight, parallaxFactor }) => {
	const scrollY = useDocumentScroll();
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

	const style = { ...TARGET_STYLE };
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
	const scrollY = useDocumentScroll();

	return (
		<div ref={setPageElement} style={{ position: 'relative', height: 4000 }}>
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
