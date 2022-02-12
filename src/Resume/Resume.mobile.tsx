import React from 'react';
import { Box } from 'pu2/style-lib';
import { Space } from './resume-theme';
import {
	CareerSummary,
	FirstName,
	LastName,
	PrimaryRole,
	ResumeFrame,
	ResumeProfileImg,
	Skills,
	WorkExperience
} from './resume-elements';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { ContactInfo, Education } from './sections';

export const ResumeMobile = (props: BoxProps) => (
	<ResumeFrame p={Space._18px} {...props}>
		<ResumeProfileImg h="200px" />
		<Box mt={Space._38px}>
			<FirstName />
			<LastName />
			<PrimaryRole />
		</Box>
		<ContactInfo mt={Space._38px} />
		<CareerSummary mt={Space._38px} />
		<Education mt={Space._38px} />
		<Skills mt={Space._38px} />
		<WorkExperience mt={Space._38px} />
	</ResumeFrame>
);
