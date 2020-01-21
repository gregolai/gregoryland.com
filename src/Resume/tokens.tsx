import { h } from 'preact';
import cx from 'classnames';

const css = require('./tokens.scss');

const Title = props => <div {...props} className={cx(css.title, props.className)} />;
const Label = props => <div {...props} className={cx(css.label, props.className)} />;
const Body = props => <div {...props} className={cx(css.body, props.className)} />;
const Desc = props => <div {...props} className={cx(css.desc, props.className)} />;
const Bullet = props => (
	<li {...props} className={cx(css.bullet, props.className)}>
		{/* <div
			style={{
				background: 'black',
				width: 4,
				height: 4,
				display: 'inline-block',
				marginRight: 8
			}}
		/> */}
		{props.children}
	</li>
);

export const Text = {
	Title,
	Label,
	Body,
	Desc,
	Bullet
};
