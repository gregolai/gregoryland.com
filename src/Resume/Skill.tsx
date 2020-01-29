import { h } from 'preact';
import { Text } from './tokens';

const css = require('./Skill.scss');

export const Skill = ({ name, desc }) => (
	<div className={css.container}>
		<Text.Subtitle className={css.name}>{name}</Text.Subtitle>
		<Text.Caption className={css.desc}>{desc}</Text.Caption>
	</div>
);
