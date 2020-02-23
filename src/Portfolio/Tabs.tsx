import { h } from 'preact';
import { cx } from 'pu2';

const css = require('./Tabs.scss');

const Tab = ({ children, isActive, onClick }) => (
	<a className={cx(css.tab, isActive && css.tabActive)} onClick={onClick} href="#">
		{children}
	</a>
);

export const Tabs = ({ onChange, options, value }) => {
	return (
		<div className={css.container}>
			{options.map(option => (
				<Tab
					key={option.value}
					isActive={option.value === value}
					onClick={() => onChange(option.value)}
				>
					{option.label}
				</Tab>
			))}
		</div>
	);
};
