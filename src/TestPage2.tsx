import { h, JSX, FunctionComponent, Fragment } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { Text } from './Resume/tokens';
import { MusicPlayer } from './MusicPlayer';
import { Suspense, lazy } from 'preact/compat';
import { ActivityIndicator } from './ActivityIndicator';
import { ScreenSplat, Screen } from './Portfolio/Screen';
import { LetterTransition } from './Portfolio/LetterTransition';
import { Tabs } from './Tabs';

// 2020-02-18 TODO: Implement some kind of easily-configurable parallax effect
import { useRafState, useScroll, useIntersection } from 'react-use';
/*
POSSIBLE API (TODO):
{
	// parallax from 0 to 100%
	screenStartY: 0,
	screenEndY: '100%',
	[
		{
			screenDistanceStart: '90%', // distance from bottom of screen
			screenDistanceEnd: '10%', // distance from top of screen

			position: 'absolute',

			// from: { top: '100px' },
			// to: { bottom: '100px' },
			// distance: '500px'
		},
		{
			position: 'fixed'
		}
	]
}
*/

const Bar = ({ delay, dir, duration, height }) => {
	const position = 'absolute';
	const bottom = 0;
	const left = 0;
	const width = '100%';
	const backgroundColor = 'black';
	const transition = `all ${duration}ms cubic-bezier(0.075, 1.140, 0.425, 1.150)`;

	const [style, setStyle] = useState({
		position,
		bottom,
		left,
		height,
		width,
		backgroundColor,
		transition,

		opacity: 0,
		transform: `translate(${dir * 100}%, 0px)`
	});

	useEffect(() => {
		setTimeout(
			() =>
				setStyle({
					position,
					bottom,
					left,
					height,
					width,
					backgroundColor,
					transition,

					opacity: 1,
					transform: 'translate(0px, 0px)'
				}),
			delay
		);
	}, []);

	return <div style={style} />;
};

const INTERSECTION_THRESHOLDS = Array.from(Array(101)).map((_, i) => i * 0.01);

// function buildThresholdList() {
// 	let thresholds = [];
// 	let numSteps = 20;

// 	for (let i = 1.0; i <= numSteps; i++) {
// 		let ratio = i / numSteps;
// 		thresholds.push(ratio);
// 	}

// 	thresholds.push(0);
// 	return thresholds;
// }

// const useIntersectionObserver = ({ isActive, callback, options = { root: null } }) => {
// 	const [target, setTarget] = useState(null);

// 	useEffect(() => {
// 		if (!isActive || !target) {
// 			return;
// 		}

// 		const observer = new IntersectionObserver(
// 			(entries, observer) => {
// 				callback({ entries, observer });
// 			},
// 			{
// 				root: null,
// 				rootMargin: '0px',
// 				threshold: INTERSECTION_THRESHOLDS, //buildThresholdList(),
// 				...options
// 			}
// 		);

// 		observer.observe(target);

// 		return () => observer.disconnect(); //observer.unobserve(target);
// 	}, [isActive, target]);

// 	return { setTarget };
// };

const InnerMain = ({ children, delay, distance }) => {
	const [ref, setRef] = useState(null);

	//const rect: ClientRect = ref ? ref.getBoundingClientRect() : null;

	const { scale, translate } = useScrollBreakpoints({
		init: {
			translate: 0,
			scale: 1
		},
		breakpoints: [
			[
				0,
				window.innerHeight,
				ratio => ({
					scale: 1 + Math.min(ratio, 0.4)
				})
			],
			[
				0,
				window.innerHeight,
				ratio => ({
					translate: Math.min(ratio, 0.5) * 200
				}),
				true
			]
		]
	});

	const style = {
		transform: `translate(0px, ${translate}px) scale(${scale}, ${scale})`
	};

	return (
		<div ref={setRef} style={style}>
			{children}
		</div>
	);
};

const useDocumentScroll = (enable = true) => {
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

const useScrollBreakpoints = ({ init, breakpoints }) => {
	const scrollTop = useDocumentScroll();

	const acc = { ...init };

	for (let i = 0, ii = breakpoints.length; i < ii; ++i) {
		const [from, to, get, bypassBounds] = breakpoints[i];

		if (bypassBounds || (scrollTop >= from && scrollTop < to)) {
			const ratio = (scrollTop - from) / (to - from);
			Object.assign(acc, get(ratio, scrollTop));
		}
	}

	return acc;
};

const MyCustom = () => {
	const { opacity, scale, translate } = useScrollBreakpoints({
		init: {
			opacity: 0,
			scale: 1,
			translate: 0
		},
		breakpoints: [
			[
				20,
				500,
				ratio => ({
					scale: 1 + ratio * 0.4
				})
			],
			[
				40,
				200,
				ratio => ({
					translate: ratio * 200
				})
			],
			[
				40,
				160,
				ratio => ({
					opacity: 1 - Math.abs(1 - ratio * 2)
				})
			]
		]
	});

	const style = {
		opacity,
		transform: `translate(${translate}px, 0px) scale(${scale}, ${scale})`
	};
	return <div style={style}>HELLO</div>;
};

const MyCustom2 = () => {
	const ref = useRef<HTMLDivElement>(null);
	const intersection = useIntersection(ref, {});
	const scrollY = useDocumentScroll(intersection?.isIntersecting);

	console.log({ scrollY, intersection });
	const style = {
		//transform: `translate(${translate}px, 0px) scale(${scale}, ${scale})`
	};
	return (
		<div ref={ref} style={style}>
			HELLO2
		</div>
	);
};

const ControlledTabs = () => {
	const [page, setPage] = useState('me');
	return (
		<Tabs
			onChange={setPage}
			options={[
				{ label: 'Me', value: 'me' },
				{ label: 'Resume', value: 'resume' },
				{ label: 'Blog', value: 'blog' }
			]}
			value={page}
		/>
	);
};

const screens = (() => {
	const _screens = [];
	return {
		addScreen: (id, children, style) => {
			// const render = () => {
			// 	return (;
			// };

			_screens.push(
				<Screen id={id} style={style}>
					<Suspense fallback={<ActivityIndicator />}>{children()}</Suspense>
				</Screen>
			);
		},

		renderScreens: () => {
			return <Fragment>{_screens}</Fragment>;
		}
	};
})();

screens.addScreen(
	'zero',
	() => (
		<div>
			<InnerMain delay={2200} distance={-100}>
				<div>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<Text.Title>
							<LetterTransition dir={-1} duration={1400}>
								Gregory Dalton
							</LetterTransition>
						</Text.Title>
						<Bar delay={1500} height={3} dir={1} duration={500} />
					</div>
				</div>
				<div>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<Text.Subtitle>
							<LetterTransition dir={+1} duration={1400}>
								Software Engineer
							</LetterTransition>
						</Text.Subtitle>
						<Bar delay={1800} height={2} dir={-1} duration={500} />
					</div>
				</div>
			</InnerMain>
			{/* <ControlledTabs /> */}
		</div>
	),
	{
		height: '100vh',
		background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(242, 246, 250) 10%, rgb(214, 229, 244) 90%)'
	}
);

screens.addScreen(
	'first',
	() => (
		<Fragment>
			<ScreenSplat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
			<ScreenSplat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />
			<div style={{ position: 'relative' }}>
				<MusicPlayer />
				<Text.Caption>
					Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
				</Text.Caption>
			</div>
		</Fragment>
	),
	{
		height: 800,
		background:
			'linear-gradient(transparent 0%, rgba(175, 204, 232, 0.5) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(181, 175, 233, 0.3) 0%, transparent 350px)'
	}
);
screens.addScreen(
	'second',
	() => (
		<div>
			<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
			<MyCustom2 />
		</div>
	),
	{
		height: 900,
		background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
	}
);

screens.addScreen(
	'third',
	() => (
		<div>
			<MusicPlayer />
			<Text.Caption>
				Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
			</Text.Caption>
		</div>
	),
	{
		height: 1200,
		background: 'green'
	}
);

export default () => {
	return (
		<Fragment>
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 2
				}}
			>
				<MyCustom />
			</div>
			{screens.renderScreens()}
		</Fragment>
	);
};
