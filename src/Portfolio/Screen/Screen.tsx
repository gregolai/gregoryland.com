import { h, FunctionComponent } from 'preact';
import { cx } from 'pu2';
import { forwardRef, Ref } from 'preact/compat';

const css = require('./Screen.scss');

interface Props {
	id: string;
	[key: string]: any;
}

export const Screen: FunctionComponent<Props> = forwardRef((props, ref: Ref<HTMLDivElement>) => (
	<div {...props} className={cx(css.container, props.className)} ref={ref}>
		{props.children}
	</div>
));
