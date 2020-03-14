import React from 'react';
import { ActivityIndicator } from '../Screen/ActivityIndicator';
import { Flex } from 'core/primitives';

export default () => {
	return (
		<Flex>
			<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
			<ActivityIndicator />
		</Flex>
	);
};
