import { h } from 'preact';

export const FullscreenFixture = ({ children }) => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			{children}
		</div>
	);
};
