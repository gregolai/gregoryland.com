import React from 'react';
import { Screen } from 'Portfolio/Screen';
import { ActivityIndicator } from '../Screen/ActivityIndicator';
import { Flex } from 'primitives';

export default () => {
	return (
		<Screen
			id="lorem"
			label="Lorem Ipsum"
			center
			css={{
				height: '900px',
				background: 'linear-gradient(180deg,transparent 0%, rgb(169, 203, 236) 50%, transparent 100%)'
			}}
		>
			<Flex>
				<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
				<ActivityIndicator />
			</Flex>
		</Screen>
	);
};
