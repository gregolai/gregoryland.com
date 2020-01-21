import { h } from 'preact';
import { Text } from './tokens';

const css = require('./Job.scss');

export const Job = ({ where, role, from, to, items }) => (
	<div className={css.container}>
		<Text.Label className={css.role}>{role}</Text.Label>
		<Text.Desc className={css.where}>{where}</Text.Desc>
		<Text.Desc className={css.dates}>
			{from} - {to}
		</Text.Desc>
		<ul>
			{items.map((item, index) => (
				<Text.Bullet key={index}>{item}</Text.Bullet>
			))}
		</ul>
	</div>
);
