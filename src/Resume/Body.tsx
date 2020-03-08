import React from 'react';
import { School } from './School';
import { Text, Flex, Box } from './tokens';

const Section = ({ children, title }) => (
	<Box
		debug-tag="Body.Section"
		css={{
			':not(:last-child)': {
				paddingBottom: '32px'
			}
		}}
	>
		<Text.Title css={{ borderBottom: '2px solid black' }}>{title}</Text.Title>
		<Box css={{ paddingTop: '16px' }}>{children}</Box>
	</Box>
);

export const Body = ({ renderEducation, renderSkills, renderProfile, renderCareer }) => (
	<Flex debug-tag="Body">
		<Box
			css={{
				width: '236px',
				paddingRight: '16px',
				marginRight: '16px'
			}}
		>
			<Section title="EDUCATION">{renderEducation()}</Section>
			<Section title="SKILLS">{renderSkills()}</Section>
		</Box>
		<Box css={{ flex: 1 }}>
			<Section title="PROFILE">{renderProfile()}</Section>
			<Section title="CAREER">{renderCareer()}</Section>
		</Box>
	</Flex>
);

Body.School = School;
