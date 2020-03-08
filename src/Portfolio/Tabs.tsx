import React from 'react';
import Router from '../Router';
import { cx } from 'pu2';

const { Link } = Router;

const css = require('./Tabs.scss');

const Tab = ({ children, value, isActive, onClick }) => (
	<Link className={cx(css.tab, isActive && css.tabActive)} onClick={onClick} to={`/${value}`}>
		{children}
	</Link>
);

export const Tabs = ({ onChange, options, value, ...props }) => {
	return (
		<div {...props} className={cx(css.container, props.className)}>
			{options.map(option => (
				<Tab
					key={option.value}
					value={option.value}
					isActive={option.value === value}
					onClick={() => onChange(option.value)}
				>
					{option.label}
				</Tab>
			))}
		</div>
	);
};
