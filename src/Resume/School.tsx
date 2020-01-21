import { h } from 'preact';
import { Text } from './tokens';

export const School = ({ name, from, to, items }) => (
	<div>
		<Text.Label>{name}</Text.Label>
		<Text.Desc>
			{from} - {to}
		</Text.Desc>
		<ul>
			{items.map((item, index) => (
				<Text.Bullet key={index}>{item}</Text.Bullet>
			))}
		</ul>
	</div>
);
