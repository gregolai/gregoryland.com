import { h } from 'preact';
import cx from 'classnames';

const css = require('./tokens.scss');

const makeTextStyle = (className: string) => props => (
	<div {...props} className={cx(className, props.className)} />
);

const Title = makeTextStyle(css.title);
const Label = makeTextStyle(css.label);
const Body = makeTextStyle(css.body);
const Desc = makeTextStyle(css.desc);
const Bullet = makeTextStyle(css.bullet);

export const Text = {
	Title,
	Label,
	Body,
	Desc,
	Bullet
};
