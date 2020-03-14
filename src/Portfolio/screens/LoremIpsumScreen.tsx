import React, { Fragment } from 'react';
import { ActivityIndicator } from '../Screen/ActivityIndicator';
import { Flex } from 'core/primitives';
import { ScreenSplat } from '../Screen';
export default () => {
	return (
		<Fragment>
			<Flex css={{ zIndex: '1' }}>
				<div style={{ height: 200, overflow: 'hidden' }}>lorem ipsum</div>
				<ActivityIndicator />
			</Flex>
			<ScreenSplat x="60%" y="30%" color="rgba(255,255,255,0.4)" width="1200px" />
			<ScreenSplat x="10%" y="100%" color="rgba(255,0,255,0.2)" width="2100px" />
			<ScreenSplat x="90%" y="100%" color="rgba(255,137,60,0.2)" width="2100px" />
		</Fragment>
	);
};
