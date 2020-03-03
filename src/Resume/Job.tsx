import React from 'react';
import { Text } from './tokens';

const css = require('./Job.scss');

export const Job = ({ where, role, from, to, items }) => (
	<div className={css.container}>
		<Text.Subtitle className={css.role}>{role}</Text.Subtitle>
		<Text.BodyMedium className={css.where}>{where}</Text.BodyMedium>
		<Text.Caption className={css.dates}>
			{from} - {to}
		</Text.Caption>
		<ul>
			{items.map((item, index) => (
				<li key={index}>
					<Text.BodyBookTabular key={index}>{item}</Text.BodyBookTabular>
				</li>
			))}
		</ul>
	</div>
);
