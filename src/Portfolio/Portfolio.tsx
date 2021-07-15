import React, { createContext, useContext, useState, useEffect } from 'react';

import { Box } from '../core/primitives';
import { PageRouter } from '../Router/NewRouter';
import { Nav } from './Nav';
import { useDocumentScrollY } from '../utils/DocumentScrollProvider';
import { useWindowInnerDimensions } from '../utils/WindowInnerDimensionsProvider';
import { screens2 } from './screens2';

interface LinkProps {
	pathname: string;
	label: string;
}

const TRANSITION_DURATION = 300;

export const Portfolio = () => {
	const screenRefs = screens2.map((_) => React.createRef<HTMLDivElement>());

	const [transition, setTransition] = useState({
		state: 0,
		screenEl: undefined
	});

	const [currentWindowScreen, setCurrentWindowScreen] = useState<HTMLDivElement>(null);

	{
		const scrollY = useDocumentScrollY();
		const [windowWidth, windowHeight] = useWindowInnerDimensions();

		useEffect(() => {
			const atY = scrollY + windowHeight * 0.5;

			for (let i = 0; i < screenRefs.length; ++i) {
				const screenEl = screenRefs[i].current;
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

	console.log({ currentWindowScreen: currentWindowScreen?.id });

	useEffect(() => {
		const { state, screenEl } = transition;

		let timeoutId;
		if (state === 1) {
			timeoutId = setTimeout(() => {
				document.scrollingElement.scrollTo(0, screenEl.offsetTop);

				setTransition({
					state: 2,
					screenEl
				});
			}, TRANSITION_DURATION);
		} else if (state === 2) {
			timeoutId = setTimeout(() => {
				setTransition({
					state: 0,
					screenEl: undefined
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

				const nextScreen = screens2.find((s) => s.pathname === location.pathname);
				if (!nextScreen) return;

				const screenEl = document.getElementById(nextScreen.id);

				setTransition({
					state: 1,
					screenEl
				});
			}}
		>
			<Box
				opacity={transition.state === 1 ? '0' : '1'}
				overflow="hidden"
				transition={`opacity ${TRANSITION_DURATION}ms ease-in-out`}
			>
				{screens2.map((s, i) => (
					<Box key={s.id} id={s.id} ref={screenRefs[i]}>
						{s.screen}
					</Box>
				))}
			</Box>
			<Nav currentScreen={currentWindowScreen} />
		</PageRouter>
	);
};
