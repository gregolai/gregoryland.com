import { h, FunctionComponent, ComponentChildren } from 'preact';
import { cx } from 'pu2';
import { Suspense, forwardRef, Ref, useRef, useEffect } from 'preact/compat';
import { ActivityIndicator } from './ActivityIndicator';
import { Portfolio } from '../Portfolio';
const css = require('./Screen.scss');

interface Props {
	id: string;
	children: ComponentChildren;
	className?: string;
	[key: string]: any;
}

export const Screen: FunctionComponent<Props> = props => {
	const ref = useRef(null);
	const { registerScreen } = Portfolio.useContext();

	useEffect(() => {
		if (ref.current)
			registerScreen({
				id: props.id,
				element: ref.current
			});
	}, [ref.current]);

	return (
		<div {...props} className={cx(css.container, props.className)} ref={ref}>
			<Suspense fallback={<ActivityIndicator />}>{props.children}</Suspense>
		</div>
	);
};
