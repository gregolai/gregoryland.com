import React from 'react';
import { School } from './School';
import { Text, Flex, Box } from './primitives';

const Section = ({ children, title }) => (
	<Box
		css={{
			':not(:last-child)': {
				pb: '32px'
			}
		}}
	>
		<Text.Title css={{ borderBottom: '2px solid black' }}>{title}</Text.Title>
		<Box css={{ pt: '16px' }}>{children}</Box>
	</Box>
);

export const Body = ({ renderEducation, renderSkills, renderProfile, renderCareer }) => (
	<Flex>
		<Box
			css={{
				width: '236px',
				pr: '16px',
				mr: '16px'
			}}
		>
			<Section title="EDUCATION">{renderEducation()}</Section>
			<Section title="SKILLS">{renderSkills()}</Section>
		</Box>
		<Box css={{ flex: '1' }}>
			<Section title="PROFILE">{renderProfile()}</Section>
			<Section title="CAREER">{renderCareer()}</Section>
		</Box>
	</Flex>
);

Body.School = School;
