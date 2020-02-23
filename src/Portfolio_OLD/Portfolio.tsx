import { h, Fragment } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import { Header } from './Header';
import { Resume } from '../Resume';
import { App } from '../App';

const Projects = lazy(() =>
	import(
		/* webpackChunkName: "portfolio-projects" */
		'./Projects'
	)
);

export const Portfolio = () => {
	const { printResume } = App.useContext();
	return (
		<Fragment>
			{/* <Header /> */}
			{/* <div
				style={{
					display: 'flex',
					justifyContent: 'center',
					padding: '128px 0',

					background: 'linear-gradient(180deg, #BFBEB6 0%, #BFBEB6 20%, #D1D0CC 20%, #D1D0CC 100%)'
				}}
			>
				<div style={{ position: 'relative', width: '90%', maxWidth: 1100, minWidth: 800 }}>
					<button
						style={{ position: 'absolute', bottom: '100%', right: 0, marginBottom: 16 }}
						onClick={() => {
							printResume();
						}}
					>
						PRINT
					</button>
					<Resume />
				</div>
			</div> */}

			<main role="main">
				<Suspense fallback={null}>
					<Projects />
				</Suspense>
			</main>
		</Fragment>
	);
};
