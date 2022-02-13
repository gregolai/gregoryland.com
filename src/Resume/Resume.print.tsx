import React from 'react';
import { Box } from 'pu2/style-lib';
import { Flex } from '../primitives';
import { Space } from './resume-theme';
import { ContactInfoPrint, Education, NameAndRole, ProfileImage, Skills, WorkExperience } from './sections';
import { ResumeFrame } from './ResumeFrame';

export const ResumePrint = () => (
	<ResumeFrame pb={Space._60px} bg="lightblue">
		<Flex alignItems="flex-start" justifyContent="space-between">
			<Box pb={Space._38px}>
				<NameAndRole />
			</Box>
			<Box flex="1" pl={Space._30px}>
				<Flex pb={Space._38px} justifyContent="space-between">
					<ContactInfoPrint.Email flex="1" />
					<ContactInfoPrint.Website flex="1" pl={Space._30px} />
				</Flex>
				<Flex>
					<Education flex="1" />
					<Skills flex="1" pl={Space._30px} />
				</Flex>
			</Box>
		</Flex>
		<WorkExperience />
	</ResumeFrame>
);
