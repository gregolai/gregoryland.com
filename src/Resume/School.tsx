import React from 'react';
import { Text } from './tokens';

export const School = ({ name, from, to, items }) => (
	<div>
		<Text.Subtitle>{name}</Text.Subtitle>
		<Text.Caption>
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
