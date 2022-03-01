import React from 'react';
import { Box } from 'pu2/style-lib';
import { Flex } from '../primitives';
import { Space } from './resume-theme';
import { ContactInfo, Education, NameAndRole, Skills, WorkExperience } from './sections';
import { ResumeFrame } from './ResumeFrame';
import { MediumHeading, NameHeading } from './sections/_primitives';

export const ResumePrint = () => (
	<ResumeFrame>
		<Flex alignItems="stretch">
			<Box flex="1">
				<NameHeading display="inline-block">Gregory</NameHeading>
				<NameHeading display="inline-block" fontWeight="600" pl={Space._18px}>
					Dalton
				</NameHeading>
				<MediumHeading pt={Space._18px}>Software Engineer</MediumHeading>
			</Box>
			<ContactInfo px="0px" py="0px" />
		</Flex>
		<Flex pt={Space._30px}>
			<Skills flex="1" />
			<Education flex="1" pl={Space._30px} />
		</Flex>
		<WorkExperience pt={Space._30px} />
	</ResumeFrame>
);
