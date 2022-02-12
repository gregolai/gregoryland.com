// @ts-nocheck
import React from 'react';
import { Box } from 'pu2/style-lib';
import { Flex } from '../primitives';
import { Space } from './resume-theme';
import { ContactInfo, Education, NameAndRole, ProfileImage, Skills, WorkExperience } from './sections';
import { ResumeFrame } from './ResumeFrame';

/*
	Copy of:
	https://www.etsy.com/listing/958270979/professional-resume-template-with-photo?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_c-paper_and_party_supplies-paper-stationery-design_and_templates-templates&utm_custom1=_k_Cj0KCQiA9OiPBhCOARIsAI0y71A_daDNEpZVXbnWQHzR_XX6Ys_EnEw5Dg0jWD9rbz_bJdHiTQCEQTgaAi23EALw_wcB_k_&utm_content=go_12573359918_120439649718_507799175895_pla-315907316571_c__958270979_122461060&utm_custom2=12573359918&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71A_daDNEpZVXbnWQHzR_XX6Ys_EnEw5Dg0jWD9rbz_bJdHiTQCEQTgaAi23EALw_wcB
*/

const Left = ({ children }) => (
	<Box flex="1" pr={Space._30px}>
		{children}
	</Box>
);
const Right = ({ children }) => <Box w="260px">{children}</Box>;

export const ResumeDesktop = () => (
	<ResumeFrame px={Space._60px} pb={Space._60px}>
		<Flex alignItems="stretch">
			<Left>
				<NameAndRole showResumeBanner pt={Space._30px} pl={Space._30px} pb={Space._38px} />
			</Left>
			<Right>
				<ProfileImage h="100%" />
			</Right>
		</Flex>
		<Flex>
			<Left>
				<Flex pt={Space._18px}>
					<Skills flex="1" />
					<Education flex="1" pl={Space._30px} />
				</Flex>
			</Left>
			<Right>
				<ContactInfo />
			</Right>
		</Flex>
		<WorkExperience pt={Space._30px} />
	</ResumeFrame>
);
