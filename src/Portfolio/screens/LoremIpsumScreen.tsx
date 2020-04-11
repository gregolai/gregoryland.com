import React, { Fragment } from 'react';
import { ActivityIndicator } from '../Screen/ActivityIndicator';
import { Flex } from 'core/primitives';
import { ScreenSplat } from '../Screen';
export default () => {
	return (
		<Flex css={{ zIndex: '1' }}>
			<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
			<ActivityIndicator />
		</Flex>
	);
};
