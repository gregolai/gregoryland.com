import React from 'react';
import { Links } from './Links';

import css from './BigGrid.module.css';

const Cell = ({ children = undefined, className = '' }) => (
	<div className={`${css.cell} ${className}`}>{children}</div>
);

export const BigGrid = () => {
	return (
		<div className={css.container}>
			<Cell className={css.header}>
				<h1>Gregory Dalton</h1>
			</Cell>
			<Cell className={css.bigimg} />
			<Cell className={css.intro}>
				<h2>Bananas!</h2>
				<p>Hey, I'm Greg. This is my portfolio. Please have a look and print my resume.</p>
			</Cell>
			<Links className={`${css.cell} ${css.links}`} />
		</div>
	);
};
