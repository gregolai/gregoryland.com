import React from 'react';
import { Space } from './resume-theme';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { ContactInfo, Education, NameAndRole, ProfileImage, Skills, WorkExperience } from './sections';
import { ResumeFrame } from './ResumeFrame';

export const ResumeMobile = (props: BoxProps) => (
	<ResumeFrame p={Space._18px} {...props}>
		<ProfileImage h="200px" />
		<NameAndRole mt={Space._38px} />
		<ContactInfo mt={Space._38px} />
		<Education mt={Space._38px} />
		<Skills mt={Space._38px} />
		<WorkExperience mt={Space._38px} />
	</ResumeFrame>
);
