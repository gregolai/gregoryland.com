import { h } from 'preact';
import { Text } from './tokens';

const css = require('./Skill.scss');

export const Skill = ({ name, desc }) => (
	<div className={css.container}>
		<Text.Label className={css.name}>{name}</Text.Label>
		<Text.Desc className={css.desc}>{desc}</Text.Desc>
	</div>
);
