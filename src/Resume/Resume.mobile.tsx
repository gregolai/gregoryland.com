import React from 'react';
import { Box } from 'pu2/style-lib';
import { Space } from './resume-theme';
import {
	CareerSummary,
	Education,
	FirstName,
	LastName,
	PrimaryRole,
	ResumeFrame,
	ResumeProfileImg,
	Skills,
	WorkExperience
} from './resume-elements';
import type { BoxProps } from 'pu2/style-lib/browser/Box';

export const ResumeMobile = (props: BoxProps) => (
	<ResumeFrame p={Space._18px} {...props}>
		<ResumeProfileImg h="200px" />
		<Box pt={Space._38px}>
			<FirstName />
			<LastName />
			<PrimaryRole />
		</Box>
		<CareerSummary pt={Space._38px} />
		<Education pt={Space._38px} />
		<Skills pt={Space._38px} />
		<WorkExperience pt={Space._38px} />
	</ResumeFrame>
);
