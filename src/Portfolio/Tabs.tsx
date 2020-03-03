import React from 'react';
import { cx } from 'pu2';

const css = require('./Tabs.scss');

const Tab = ({ children, value, isActive, onClick }) => (
	<a
		className={cx(css.tab, isActive && css.tabActive)}
		onClick={e => {
			e.preventDefault();
			onClick(e);
		}}
		href={`#${value}`}
	>
		{children}
	</a>
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
