import { h } from 'preact';
import { cx } from 'pu2';

const css = require('./tokens.scss');

const Label = props => <div {...props} className={cx(css.label, props.className)} />;
const Caption = props => <div {...props} className={cx(css.caption, props.className)} />;
const Button = props => <div {...props} className={cx(css.button, props.className)} />;
const BodyBook = props => <div {...props} className={cx(css.bodyBook, props.className)} />;
const BodyBookTabular = props => <div {...props} className={cx(css.bodyBookTabular, props.className)} />;
const BodyMedium = props => <div {...props} className={cx(css.bodyMedium, props.className)} />;
const Subtitle = props => <div {...props} className={cx(css.subtitle, props.className)} />;
const Title = props => <div {...props} className={cx(css.title, props.className)} />;

// const Bullet = props => (
// 	<li {...props} className={cx(css.bullet, props.className)}>
// 		{/* <div
// 			style={{
// 				background: 'black',
// 				width: 4,
// 				height: 4,
// 				display: 'inline-block',
// 				marginRight: 8
// 			}}
// 		/> */}
// 		{props.children}
// 	</li>
// );

export const Text = {
	Label,
	Caption,
	Button,
	BodyBook,
	BodyBookTabular,
	BodyMedium,
	Subtitle,
	Title
};
