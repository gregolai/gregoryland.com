import React, { useState, useEffect } from 'react';

import { Box } from '../core/primitives';
import { PageRouter } from '../Router/NewRouter3';
import { Nav } from './Nav';
import { useDocumentScrollY } from '../utils/DocumentScrollProvider';
import { useWindowInnerDimensions } from '../utils/WindowInnerDimensionsProvider';
import { routes } from './routes';

const TRANSITION_DURATION = 300;

const enum TransitionState {
	NONE,
	ENTERING,
	EXITING
}

export const Portfolio = () => {
	const screenEls = React.useRef<HTMLElement[]>(new Array(routes.length));

	const [transition, setTransition] = useState({
		state: TransitionState.NONE,
		screenEl: undefined
	});

	const [currentWindowScreen, setCurrentWindowScreen] = useState<HTMLElement>(null);

	{
		const scrollY = useDocumentScrollY();
		const [windowWidth, windowHeight] = useWindowInnerDimensions();

		useEffect(() => {
			const atY = scrollY + windowHeight * 0.5;

			for (let i = 0; i < screenEls.current.length; ++i) {
				const screenEl = screenEls.current[i];
				if (!screenEl || currentWindowScreen === screenEl) {
					continue;
				}

				const { offsetHeight, offsetTop } = screenEl;
				if (atY >= offsetTop && atY < offsetTop + offsetHeight) {
					setCurrentWindowScreen(screenEl);
					break;
				}
			}
		}, [scrollY, windowHeight]);
	}

	useEffect(() => {
		const { state, screenEl } = transition;

		let timeoutId;
		if (state === TransitionState.ENTERING) {
			timeoutId = setTimeout(() => {
				document.scrollingElement.scrollTo(0, screenEl.offsetTop);

				setTransition({
					state: TransitionState.EXITING,
					screenEl
				});
			}, TRANSITION_DURATION);
		} else if (state === TransitionState.EXITING) {
			timeoutId = setTimeout(() => {
				setTransition({
					state: TransitionState.NONE,
					screenEl: undefined
				});
			}, TRANSITION_DURATION);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [transition]);

	return (
		<PageRouter
			onTransition={(location, action) => {
				if (transition.state !== TransitionState.NONE) return;

				const nextScreen = routes.find((s) => s.path === location.pathname);
				if (!nextScreen) return;

				setTransition({
					state: TransitionState.ENTERING,
					screenEl: document.getElementById(nextScreen.id)
				});
			}}
		>
			<Box
				opacity={transition.state === 1 ? '0' : '1'}
				overflow="hidden"
				transition={`opacity ${TRANSITION_DURATION}ms ease-in-out`}
			>
				{routes.map((s, i) => (
					<Box key={s.id} id={s.id} ref={(el) => (screenEls.current[i] = el)}>
						<s.Component />
					</Box>
				))}
			</Box>
			<Nav currentScreen={currentWindowScreen} />
		</PageRouter>
	);
};
