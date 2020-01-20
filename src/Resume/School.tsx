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
				<li key={index}>
					<Text.Bullet>{item}</Text.Bullet>
				</li>
			))}
		</ul>
	</div>
);
