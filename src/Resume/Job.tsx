import { h } from 'preact';
import { Text } from './tokens';

const css = require('./Job.scss');

export const Job = ({ where, role, from, to, items }) => (
	<div className={css.container}>
		<Text.Label className={css.header}>{role}</Text.Label>
		<div>
			<Text.Desc className={css.where}>{where}</Text.Desc>
			<Text.Desc className={css.dates}>
				{from} - {to}
			</Text.Desc>
		</div>
		<ul>
			{items.map((item, i2) => (
				<li key={i2}>
					<Text.Bullet>{item}</Text.Bullet>
				</li>
			))}
		</ul>
	</div>
);
