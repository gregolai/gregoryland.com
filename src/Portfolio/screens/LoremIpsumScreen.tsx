import { h } from 'preact';
import { Screen } from 'Portfolio/Screen';

export default () => {
	return (
		<Screen
			id="third"
			label="Lorem Ipsum"
			style={{
				height: 900,
				background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
		</Screen>
	);
};
