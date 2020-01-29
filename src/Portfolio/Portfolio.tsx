import { h, Fragment } from 'preact';

import { Header } from './Header';
import { Projects } from './Projects';
import { Resume } from '../Resume';
import { Blog } from '../Blog';
import { useRootContext } from '../Root';

export const Portfolio = () => {
	const { printResume } = useRootContext();
	return (
		<Fragment>
			<Header />
			<Blog />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					padding: '128px 0',

					background: 'linear-gradient(180deg, #BFBEB6 0%, #BFBEB6 20%, #D1D0CC 20%, #D1D0CC 100%)'
				}}
			>
				{/* <Button />
			<Button2 /> */}

				{/* WRAPPER AROUND RESUME AREA */}
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
			</div>

			<main role="main">
				<Projects />
			</main>
		</Fragment>
	);
};
