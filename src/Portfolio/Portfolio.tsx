import React, { createContext, useContext, useState, useEffect } from 'react';

import Screens from './Screens';
import useScrollBreakpoints from './useScrollBreakpoints';
import { Box } from 'core/primitives';
import { PageRouter } from '../Router/NewRouter';
import { space } from 'core/tokens';
import Nav from './Nav';
import useDocumentScroll from './useDocumentScroll';
import useWindowInnerDimensions from './useWindowInnerDimensions';

interface LinkProps {
	pathname: string;
	label: string;
}

interface ScreenProps {
	el: HTMLElement;
	id: string;
	link: LinkProps;
}

const Context = createContext({
	registerScreen: (opts: ScreenProps) => {}
});

const MyCustom = () => {
	const { opacity, scale, translate } = useScrollBreakpoints({
		init: {
			opacity: 0,
			scale: 1,
			translate: 0
		},
		breakpoints: [
			{
				from: 20,
				to: 500,
				get: ratio => ({
					scale: 1 + ratio * 0.4
				})
			},
			{
				from: 40,
				to: 200,
				get: ratio => ({
					translate: ratio * 200
				})
			},
			{
				from: 40,
				to: 160,
				get: ratio => ({
					opacity: 1 - Math.abs(1 - ratio * 2)
				})
			}
		]
	});

	const style = {
		opacity,
		transform: `translate(${translate}px, ${translate}px) scale(${scale}, ${scale})`
	};
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 2
			}}
		>
			<div style={style}>HELLO</div>
		</div>
	);
};

const TRANSITION_DURATION = 300;

const Portfolio = () => {
	const [screens, setScreens] = useState<ScreenProps[]>([]);

	const [currentScreen, setCurrentScreen] = useState(null);

	const [transition, setTransition] = useState({
		state: 0,
		screen: undefined
	});

	const [currentWindowScreen, setCurrentWindowScreen] = useState<ScreenProps>(null);
	{
		const { scrollY } = useDocumentScroll(true);
		const [windowWidth, windowHeight] = useWindowInnerDimensions();

		useEffect(() => {
			const atY = scrollY + windowHeight * 0.35;

			for (let i = 0; i < screens.length; ++i) {
				const screen = screens[i];
				if (currentWindowScreen === screen) {
					continue;
				}

				const { offsetHeight, offsetTop } = screen.el;
				if (atY >= offsetTop && atY < offsetTop + offsetHeight) {
					setCurrentWindowScreen(screen);
					break;
				}
			}
		}, [scrollY, windowHeight, screens]);
	}

	console.log({ currentWindowScreen: currentWindowScreen?.id });

	useEffect(() => {
		const { state, screen } = transition;

		let timeoutId;
		if (state === 1) {
			timeoutId = setTimeout(() => {
				document.scrollingElement.scrollTo(0, screen.el.offsetTop);

				setTransition({
					state: 2,
					screen
				});
			}, TRANSITION_DURATION);
		} else if (state === 2) {
			timeoutId = setTimeout(() => {
				setTransition({
					state: 0,
					screen: undefined
				});
			}, TRANSITION_DURATION);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [transition.state]);

	return (
		<PageRouter
			onTransition={(location, action) => {
				if (transition.state !== 0) return;

				const nextScreen = screens.find(s => s.link.pathname === location.pathname);
				if (!nextScreen) return;

				setTransition({
					state: 1,
					screen: nextScreen
				});
				setCurrentScreen(nextScreen);
			}}
		>
			<Context.Provider
				value={{
					registerScreen: (screen: ScreenProps) => {
						setScreens(state => [...state, screen]);
					}
				}}
			>
				<Box
					css={{
						overflow: 'hidden',
						transitionTimingFunction: 'ease-in-out',
						transitionProperty: 'opacity',
						transitionDuration: `${TRANSITION_DURATION}ms`,

						opacity: transition.state === 1 ? '0' : '1'
					}}
				>
					{/* <MyCustom /> */}
					<Screens />
				</Box>

				<Box
					css={{
						position: 'fixed',
						left: '0px',
						top: '0px',
						height: '100%',
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					<Box
						css={{
							flex: '1',
							background: 'linear-gradient(transparent, white)'
						}}
					/>
					<Nav screens={screens} currentScreen={currentWindowScreen} />
					<Box
						css={{
							flex: '1',
							background: 'linear-gradient(white, transparent)'
						}}
					/>
				</Box>
			</Context.Provider>
		</PageRouter>
	);
};
Portfolio.useContext = () => useContext(Context);
export default Portfolio;
