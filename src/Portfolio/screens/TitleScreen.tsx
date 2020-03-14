import React, { useState, useEffect } from 'react';
import { Screen } from '../Screen';
import useScrollBreakpoints from 'Portfolio/useScrollBreakpoints';
import { LetterTransition } from 'Portfolio/LetterTransition';
import { Box, Text } from 'core/primitives';
import { space } from 'core/tokens';

const Bar = ({ delay, dir, duration, height }) => {
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		setTimeout(() => setFlag(true), delay);
	}, []);

	return (
		<Box
			css={{
				position: 'absolute',
				bottom: '0px',
				left: '0px',
				width: '100%',
				height: `${height}px`,
				backgroundColor: 'black',
				transition: `all ${duration}ms cubic-bezier(0.075, 1.140, 0.425, 1.150)`,
				opacity: flag ? '1' : '0',
				transform: `translate(${flag ? 0 : dir * 100}%, 0px)`
			}}
		/>
	);
};

const InnerMain = ({ children }) => {
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
		<Box ref={setRef} style={style}>
			{children}
		</Box>
	);
};

export default () => {
	return (
		<Screen
			id="title"
			link={{
				label: 'Home',
				pathname: '/'
			}}
			center
			css={{
				height: '100vh',
				background:
					'linear-gradient(rgb(255, 255, 255) 0%, rgb(242, 246, 250) 10%, rgb(214, 229, 244) 90%)'
			}}
		>
			<InnerMain>
				<Box>
					<Box css={{ position: 'relative', display: 'inline-block' }}>
						<Text.Title as="div">
							<LetterTransition dir={-1} duration={1400}>
								Gregory Dalton
							</LetterTransition>
						</Text.Title>
						<Bar delay={1500} height={3} dir={1} duration={500} />
					</Box>
				</Box>
				<Box>
					<Box css={{ position: 'relative', display: 'inline-block' }}>
						<Text.Subtitle as="div">
							<LetterTransition dir={+1} duration={1400}>
								Software Engineer
							</LetterTransition>
						</Text.Subtitle>
						<Bar delay={1800} height={2} dir={-1} duration={500} />
					</Box>
				</Box>
				<Box>
					<Text.BodyBook css={{ pt: space._6 }}>
						Hey, I'm Greg, a software developer in NYC. This site showcases my career experience
						and passion for software development. I built this site to reflect my joy of creation;
						forging a beautiful website without depending too much on external libraries.
					</Text.BodyBook>
					<Text.BodyBook css={{ pt: space._5 }}>
						For instance, I wrote my own styled component system to support this website, without
						the cruft that comes with using external libraries. I have always been a supporter of
						the "build your own" camp, as it's a great way to learn! I have also learned,
						throughout my professional career, that there's also great value in using trusted,
						well-tested, open source libraries.
					</Text.BodyBook>
				</Box>
			</InnerMain>
		</Screen>
	);
};
