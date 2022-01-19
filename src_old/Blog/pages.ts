import { Page } from './Blog';

export const pages: Page[] = [
	{
		md: () =>
			import(
				/* webpackChunkName: "page-test" */
				'./pages/Test.md'
			),
		thumb: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Simulation_Theory_%28album%29.jpg/220px-Simulation_Theory_%28album%29.jpg',
		title: 'TEST'
	},
	{
		md: () =>
			import(
				/* webpackChunkName: "page1" */
				'./pages/page1.md'
			),

		thumb: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Simulation_Theory_%28album%29.jpg/220px-Simulation_Theory_%28album%29.jpg',
		title: 'PAGE 1!!!'
	},
	{
		md: () =>
			import(
				/* webpackChunkName: "page2" */
				'./pages/page2.md'
			),
		thumb: 'https://m.media-amazon.com/images/I/61XHZQKOGKL._SS500_.jpg',
		title: 'PAGE 2!!!'
	}
];
