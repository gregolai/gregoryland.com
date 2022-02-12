import { Box } from 'pu2/style-lib';
import React from 'react';
import { Flex } from '../primitives';
import { ResumeDesktop } from '../Resume/Resume.desktop';
import { ResumeMobile } from '../Resume/Resume.mobile';
import { Breakpoint, mediaGreaterThan, mediaLessThan, Space } from '../theme';
import { MediaHide } from '../MediaHide';

export const PageCareer = () => (
	<>
		{/* <Button>Print my resume</Button> */}
		<MediaHide
			q={mediaLessThan(Breakpoint.tablet)}
			render={(props) => (
				<Flex justifyContent="center" py={Space._6} {...props}>
					<Box
						//border="2px solid black"
						boxShadow="5px 5px 3px rgba(0,0,0,0.3)"
						maxWidth="980px"
					>
						<ResumeDesktop />
					</Box>
				</Flex>
			)}
		/>
		<MediaHide q={mediaGreaterThan(Breakpoint.tablet)} render={ResumeMobile} />
	</>
);
