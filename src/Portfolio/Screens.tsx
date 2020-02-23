import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Screen, ScreenSplat } from './Screen';
import { LetterTransition } from './LetterTransition';
import { Text } from '../Resume/tokens';
import { Tabs } from './Tabs';
import { MusicPlayer } from '../MusicPlayer';
import { useScrollBreakpoints } from './useScrollBreakpoints';
import { Portfolio } from './Portfolio';

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

const InnerMain = ({ children, delay, distance }) => {
	const [ref, setRef] = useState(null);

	const { scale, translate } = useScrollBreakpoints({
		init: {
			translate: 0,
			scale: 1
		},
		breakpoints: [
			{
				from: 0,
				to: window.innerHeight,
				get: ratio => ({
					scale: 1 + Math.min(ratio, 0.4)
				})
			},
			{
				from: 0,
				to: window.innerHeight,
				get: ratio => ({
					translate: Math.min(ratio, 0.5) * 200
				}),
				bypassBounds: true
			}
			// {
			// 	from: window.innerHeight,
			// 	to: window.innerHeight * 4,
			// 	get: (ratio, scrollTop) => ({
			// 		translate: Math.min(ratio, 0.5) * 200 + scrollTop
			// 	}),
			// 	bypassBounds: true
			// }
		]
	});

	const style = {
		// zIndex: 999,
		transform: `translate(0px, ${translate}px) scale(${scale}, ${scale})`
	};

	return (
		<div ref={setRef} style={style}>
			{children}
		</div>
	);
};

const ControlledTabs = () => {
	const [page, setPage] = useState(null);
	const { navigateToScreen } = Portfolio.useContext();

	useEffect(() => {
		if (page) {
			navigateToScreen(page);
		}
	}, [page]);

	return (
		<Tabs
			onChange={setPage}
			options={[
				{ label: 'Me', value: 'first' },
				{ label: 'Resume', value: 'second' },
				{ label: 'Blog', value: 'third' }
			]}
			value={page}
		/>
	);
};

export const Screens = () => {
	return (
		<Fragment>
			<Screen
				id="first"
				style={{
					height: '100vh',
					background:
						'linear-gradient(rgb(255, 255, 255) 0%, rgb(242, 246, 250) 10%, rgb(214, 229, 244) 90%)'
				}}
			>
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
				<ControlledTabs />
			</Screen>
			<Screen
				id="second"
				style={{
					height: 800,
					background:
						'linear-gradient(transparent 0%, rgba(175, 204, 232, 0.5) 50%, transparent 100%), radial-gradient(circle at 50% 50%, rgba(181, 175, 233, 0.3) 0%, transparent 350px)'
				}}
			>
				<ScreenSplat color="rgba(255,255,255,0.3)" x="20%" y="20%" width={900} />
				<ScreenSplat color="rgba(255,255,255,0.3)" x="80%" y="80%" width={1400} />
				<div style={{ position: 'relative' }}>
					<MusicPlayer />
					<Text.Caption>
						Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
					</Text.Caption>
				</div>
			</Screen>
			<Screen
				id="third"
				style={{
					height: 900,
					background:
						'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
				}}
			>
				<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
			</Screen>
			<Screen
				id="fourth"
				style={{
					height: 1200,
					background: 'green'
				}}
			>
				<MusicPlayer />
				<Text.Caption>
					Designed by <a href="https://dribbble.com/AntonSKV">Anton Skvortsov</a>
				</Text.Caption>
			</Screen>
		</Fragment>
	);
};
