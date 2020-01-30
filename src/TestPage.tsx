import { h } from 'preact';
import { useState } from 'preact/hooks';
import { lazy, Suspense } from 'preact/compat';
import cx from 'classnames';

import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import { Blog } from './Blog';

const css = require('./TestPage.scss');

enum EPage {
	Me = 'me',
	Resume = 'resume',
	Blog = 'blog'
}

const Page = ({ children, isActive, isExiting, size }) => {
	return (
		<div
			className={cx(
				css.page,
				size === 'full' && css.full,
				size === 'average' && css.average,
				size === 'small' && css.small
			)}
			style={{
				transition: 'all 500ms ease-in-out',

				opacity: isActive ? 1 : 0,
				transform: isActive
					? 'translate(0%, 0%) scale(1, 1)'
					: isExiting
					? 'translate(50%, 20%) scale(0.8, 0.8)'
					: 'translate(-50%, 20%) scale(0.8, 0.8)'
			}}
		>
			{children}
		</div>
	);
};

const Tab = ({ children, isActive, onClick }) => {
	return (
		<a className={cx(css.tab, isActive && css.active)} onClick={onClick} href="#">
			{children}
		</a>
	);
};

const Tabs = ({ onChange, options, value }) => {
	return (
		<div className={css.tabs}>
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

export default () => {
	const [page, setPage] = useState(EPage.Me);

	return (
		<div className={css.container}>
			<div className={css.header}>
				<img className={css.pic} src="static/img/gregory.jpg" />
				<div>
					<h1 style={{ margin: 0 }}>Gregory Dalton</h1>
					<h2 style={{ margin: 0 }}>Software Engineer</h2>
				</div>
				<div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
					<Tabs
						onChange={setPage}
						options={[
							{ label: 'Me', value: EPage.Me },
							{ label: 'Resume', value: EPage.Resume },
							{ label: 'Blog', value: EPage.Blog }
						]}
						value={page}
					/>
				</div>
			</div>
			<div className={css.body}>
				<Page isActive={page === EPage.Me} isExiting={false} size="full">
					<Portfolio />
				</Page>

				<Page isActive={page === EPage.Resume} isExiting={false} size="small">
					<Resume />
				</Page>

				<Page isActive={page === EPage.Blog} isExiting={false} size="average">
					<Blog />
				</Page>
			</div>
		</div>
	);
};
