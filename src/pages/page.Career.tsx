import { Box } from 'pu2/style-lib';
import React from 'react';
import { Button, Flex, Img, P } from '../primitives';
import { Resume } from '../Resume/Resume2';
import { Space } from '../theme';
import gregorySrc from '../img/gregory.jpg';

export const PageCareer = () => (
	<>
		<Button>Print my resume</Button>
		{/* <Img src={gregorySrc} /> */}
		<Flex justifyContent="center" pt={Space._6}>
			<Box
				//border="2px solid black"
				boxShadow="5px 5px 3px rgba(0,0,0,0.3)"
				maxWidth="1000px"
			>
				<Resume />
			</Box>
		</Flex>
	</>
);
