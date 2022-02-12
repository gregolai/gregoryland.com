// @ts-nocheck
import React from 'react';
import { Box } from 'pu2/style-lib';
import { Flex } from '../primitives';
import { Palette, Space } from './resume-theme';
import {
	Skills,
	ResumeFrame,
	ResumeProfileImg,
	CareerSummary,
	WorkExperience,
	PrimaryRole,
	FirstName,
	LastName
} from './resume-elements';
import { ContactInfo, Education } from './sections';
import { Diamond } from './resume-primitives';

/*
	Copy of:
	https://www.etsy.com/listing/958270979/professional-resume-template-with-photo?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_c-paper_and_party_supplies-paper-stationery-design_and_templates-templates&utm_custom1=_k_Cj0KCQiA9OiPBhCOARIsAI0y71A_daDNEpZVXbnWQHzR_XX6Ys_EnEw5Dg0jWD9rbz_bJdHiTQCEQTgaAi23EALw_wcB_k_&utm_content=go_12573359918_120439649718_507799175895_pla-315907316571_c__958270979_122461060&utm_custom2=12573359918&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71A_daDNEpZVXbnWQHzR_XX6Ys_EnEw5Dg0jWD9rbz_bJdHiTQCEQTgaAi23EALw_wcB
*/

const ResumeBanner = () => (
	<Box position="relative" w="30px" bg={Palette.darkest}>
		<Box
			position="absolute"
			bottom="0"
			left="50%"
			transform="rotateZ(-90deg) translate(10px, 50%)"
			transformOrigin="bottom left"
			color="white"
			textTransform="uppercase"
		>
			Resume
		</Box>
	</Box>
);
const HeaderDesktop = () => (
	<Flex pb={Space._38px}>
		<ResumeBanner />
		<Box flex="1" pt={Space._30px}>
			<FirstName pl={Space._30px} pt={Space._30px} />
			<Box position="relative">
				<Diamond />
			</Box>
			<LastName pl={Space._30px} />
			<PrimaryRole pl={Space._30px} />
		</Box>
	</Flex>
);

const PageSplit = ({ left, right, ...rest }) => (
	<Flex {...rest}>
		<Box flex="1" pr={Space._30px}>
			{left}
		</Box>
		<Box w="260px">{right}</Box>
	</Flex>
);

export const ResumeDesktop = () => (
	<ResumeFrame px={Space._60px} pb={Space._60px}>
		<Box position="absolute" top="0" left="0" w="100%" bg="#DBD9DA" h={Space._30px} />
		<PageSplit left={<HeaderDesktop />} right={<ResumeProfileImg h="100%" />} />
		<PageSplit
			left={
				<Flex pt={Space._18px}>
					{/* <CareerSummary flex="1" /> */}
					<Skills flex="1" /*w="260px" float="right"  mb={Space._18px} ml={Space._30px}*/ />
					<Education flex="1" pl={Space._30px} />
				</Flex>
			}
			right={<ContactInfo />}
		/>
		<Box pt={Space._30px}>
			<WorkExperience />
		</Box>
	</ResumeFrame>
);
