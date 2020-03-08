import React, { useState, useEffect } from 'react';
import { Screen } from '../Screen';
import useScrollBreakpoints from 'Portfolio/useScrollBreakpoints';
import { LetterTransition } from 'Portfolio/LetterTransition';
import { Text } from '../../Resume/tokens';

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

	return <div style={style as any} />;
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

export default () => {
	return (
		<Screen
			id="first"
			label="Title"
			center
			css={{
				height: '100vh',
				background:
					'linear-gradient(rgb(255, 255, 255) 0%, rgb(242, 246, 250) 10%, rgb(214, 229, 244) 90%)'
			}}
		>
			<InnerMain delay={2200} distance={-100}>
				<div>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<Text.Title as="div">
							<LetterTransition dir={-1} duration={1400}>
								Gregory Dalton
							</LetterTransition>
						</Text.Title>
						<Bar delay={1500} height={3} dir={1} duration={500} />
					</div>
				</div>
				<div>
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<Text.Subtitle as="div">
							<LetterTransition dir={+1} duration={1400}>
								Software Engineer
							</LetterTransition>
						</Text.Subtitle>
						<Bar delay={1800} height={2} dir={-1} duration={500} />
					</div>
				</div>
			</InnerMain>
		</Screen>
	);
};
