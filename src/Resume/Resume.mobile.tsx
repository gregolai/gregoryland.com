import React from 'react';
import { Space } from './resume-theme';
import { ResumeFrame } from './resume-elements';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import {
	CareerSummary,
	ContactInfo,
	Education,
	NameAndRole,
	ProfileImage,
	Skills,
	WorkExperience
} from './sections';

export const ResumeMobile = (props: BoxProps) => (
	<ResumeFrame p={Space._18px} {...props}>
		<ProfileImage h="200px" />
		<NameAndRole mt={Space._38px} />
		<ContactInfo mt={Space._38px} />
		<CareerSummary mt={Space._38px} />
		<Education mt={Space._38px} />
		<Skills mt={Space._38px} />
		<WorkExperience mt={Space._38px} />
	</ResumeFrame>
);
