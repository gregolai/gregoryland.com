import React, { useState, useEffect } from 'react';
import { Box } from 'core/primitives';

interface LetterProps {
	delay: number;
	distance: number;
	duration: number;
	symbol: string;
}

const Letter: React.FC<LetterProps> = ({ delay, distance, duration, symbol }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, delay);
	}, []);

	return (
		<Box
			css={{
				display: 'inline-block',
				whiteSpace: 'pre',
				opacity: show ? '1' : '0'
			}}
			style={{
				transition: `all ${duration}ms ease-in-out`,
				transform: `translate(0px, ${show ? 0 : distance}px)`
			}}
		>
			{symbol}
		</Box>
	);
};

interface Props {
	children: string;
	dir: -1 | 1;
	duration: number;
}

export const LetterTransition: React.FC<Props> = ({ children, dir, duration }) => {
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		setTimeout(() => setTrigger(true), 600 + 800);
	}, []);

	if (trigger) {
		return children as any;
	}

	return children.split('').map((symbol, i) => {
		const delay = Math.random() * duration * 0.5;
		return (
			<Letter
				key={i}
				delay={delay}
				distance={dir * 120 + Math.random() * 10}
				duration={duration - delay}
				symbol={symbol}
			/>
		);
	});
};
