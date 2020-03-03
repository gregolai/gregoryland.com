import React from 'react';
import { useState, Suspense, lazy } from 'react';
import { pages } from './pages';

export interface Page {
	md: () => Promise<typeof import('*.md')>;
	mdOptions?: object;
	title: string;
	thumb: string;
}

const PageRenderer = lazy(
	() =>
		import(
			/* webpackChunkName: "blog-page-renderer" */
			'./PageRenderer'
		) as any
) as any;

export const Blog = () => {
	const [currentPage, setCurrentPage] = useState<Page>(null);

	return (
		<div>
			{pages.map(page => {
				return (
					<div
						key={page.title}
						onClick={() => setCurrentPage(page)}
						style={{ position: 'relative', display: 'inline-block' }}
					>
						<div style={{ position: 'absolute', bottom: 10, right: 10, color: 'white' }}>
							{page.title}
						</div>
						<img style={{ width: 128, height: 128 }} src={page.thumb} />
					</div>
				);
			})}
			{currentPage && (
				<Suspense fallback={<div>LOADING</div>}>
					<PageRenderer page={currentPage} />
				</Suspense>
			)}
		</div>
	);
};
