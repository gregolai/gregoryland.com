import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import cx from 'classnames';

const css = require('./LetterTransition.scss');

interface LetterProps {
	delay: number;
	distance: number;
	duration: number;
	symbol: string;
}

interface LetterState {
	className: string;
	style: { [key: string]: string | number };
}

const Letter: FunctionComponent<LetterProps> = ({ delay, distance, duration, symbol }) => {
	const transition = `all ${duration}ms ease-in-out`;

	const [{ className, style }, setState] = useState<LetterState>({
		className: css.letter,
		style: {
			transition,
			transform: `translate(0px, ${distance}px)`
		}
	});

	useEffect(() => {
		setTimeout(() => {
			setState({
				className: cx(css.letter, css.letterShow),
				style: { transition }
			});
		}, delay);
	}, []);

	return (
		<div className={className} style={style}>
			{symbol}
		</div>
	);
};

interface Props {
	children: string;
	dir: -1 | 1;
	duration: number;
}

export const LetterTransition: FunctionComponent<Props> = ({ children, dir, duration }) => {
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
