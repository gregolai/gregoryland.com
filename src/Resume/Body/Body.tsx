import React from 'react';
import { School } from '../School';
import { Text } from '../tokens';
const css = require('./Body.scss');

const Section = ({ children, title }) => (
	<div className={css.section}>
		<Text.Title className={css.sectionTitle}>{title}</Text.Title>
		<div className={css.sectionChildren}>{children}</div>
	</div>
);

export const Body = ({ renderEducation, renderSkills, renderProfile, renderCareer }) => (
	<div className={css.container}>
		<div className={css.left}>
			<Section title="EDUCATION">{renderEducation()}</Section>
			<Section title="SKILLS">{renderSkills()}</Section>
		</div>
		<div className={css.right}>
			<Section title="PROFILE">{renderProfile()}</Section>
			<Section title="CAREER">{renderCareer()}</Section>
		</div>
	</div>
);

Body.School = School;
