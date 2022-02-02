import { Box } from 'pu2/style-lib';
import React from 'react';
import { Flex, P } from '../primitives';
import { Resume } from '../Resume/Resume';
import { Space } from '../theme';

export const PageCareer = () => (
	<Flex justifyContent="center" pt={Space._6}>
		<Resume />
	</Flex>
);
