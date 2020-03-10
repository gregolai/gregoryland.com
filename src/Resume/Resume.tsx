import React, { Fragment } from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Job } from './Job';
import { Skill } from './Skill';
import { School } from './School';
import { Text, Box } from './primitives';
import { cx } from 'pu2';

const cat = (stringArr: string[]) => stringArr.join(' ');

export default props => (
	<Box
		{...props}
		css={{
			// Keep lineHeight: '1' until it's defaulted to globally
			lineHeight: '1',

			background: 'white',
			padding: '32px',
			boxShadow: '4px 4px 2px rgba(0,0,0,0.3)',
			...props.css
		}}
	>
		<Header
			name="GREGORY DALTON"
			role="SOFTWARE ENGINEER"
			email="gregolai@gmail.com"
			phone="(714) 651-2126"
		/>
		<Body
			renderEducation={() => (
				<School
					name="California State University, Long Beach"
					from="August 2004"
					to="May 2009"
					items={[
						'<b><i>Bachelor of Science in Computer Science</i></b>',
						'Joined the Programming Team and competed in two regional competitions',
						'Member of Tau Beta Pi Engineering Honor Society, Theta Chapter',
						'Transferred from San Jose State University (2004 - 2006)'
					]}
				/>
			)}
			renderSkills={() => (
				<Fragment>
					<Skill name="JavaScript" desc="The language I write every day." />
					<Skill name="TypeScript" desc="Using since 2012." />
					<Skill name="C#" desc="A Pick up new things here and there, as a hobby." />
					<Skill name="C++" desc="First programming language." />
				</Fragment>
			)}
			renderProfile={() => (
				<Text.BodyBook>Improving my skills and learning new things daily</Text.BodyBook>
			)}
			renderCareer={() => (
				<Fragment>
					<Job
						where="Squarespace"
						from="May 2017"
						to="Present"
						role="Software Engineer"
						items={[
							cat([
								"I'm a software developer on Squarespace's Design Platform team.",
								'I work with designers on a daily basis to implement UI specs for React components that are used across teams.',
								'Much of this work has enlightened me to the challenges of building a shared component library versus building a front-facing application.',
								'Having a consistent and thought-out API is crucial for any shared library.',
								'Unlike refactoring a front-facing application, refactoring a library without introducing breaking changes is often non-trivial if the consumer API requires a change.',
								'On top of that, there are trade-offs with how much flexibility to expose to the consumer versus the likelihood of breaking changes.'
							]),
							'The designs are implemented across desktop, mobile-web, iOS, and Android platforms. Our components make heavy use of React and React-Native.',
							'We use Jest, Enzyme, Puppeteer, and Cypress for unit and integration testing.'
						]}
					/>
					<Job
						where="Agorafy"
						from="December 2016"
						to="May 2017"
						role="Front-End Web Developer"
						items={[
							cat([
								'I worked as a frontend engineer to build a CMS for creating and editing real estate listings.',
								'I collaborated daily with backend engineers to ensure the REST API endpoints we hit were consistent had correct.',
								'Got my hands dirty with new technologies at the time - React and Redux.'
							]),
							'Collaborated with designers to implement UI/UX mockups.',
							'Daily standups helped frontend, backend, and management stay in-sync'
						]}
					/>
					<Job
						where="YouVisit"
						from="January 2015"
						to="April 2016"
						role="Full-Stack Developer"
						items={[
							'Hybrid app development and testing for both mobile and desktop systems using JavaScript, PHP, MySQL, and Node. Used an MVC back-end with a RESTful API and some unit testing.',
							'Developed a project tracking system in our CMS to track the stages of tour production.',
							'Implemented mobile geolocation tracking, batching requests from Node to our database, and using Google Maps API to view campus paths and hotspots.',
							'Organized large-scale analytics of site visitor data into useful for our clients to download.',
							'Worked on embedding tours into 3rd party websites using JavaScript with JSONP to load iframe settings.',
							'Coordinated with design, sales, and marketing to implement A/B testing with a massive redesign and refactor for our visitor registration form, using jQuery, AJAX, PHP, and MySQL.',
							'Daily standups, Jira, and git workflow for tasks, code reviews, QA, staging, and release.'
						]}
					/>
					<Job
						where="M & M Environmental"
						from="August 2014"
						to="December 2014"
						role="Junior Web Developer"
						items={[
							'Built a calendar and scheduling application using PHP, MySQL/MSSQL, and JavaScript for managing technician availability.',
							'Implemented a Vehicle GPS viewer using Google Maps API with JavaScript for monitoring technician proximity to their scheduled appointments.',
							'Created a Yelp review scraper that would email our recent Yelp reviews to our staff.',
							'Built an admin portal using JavaScript/Auth0 single-sign-on through Google. Used Wordpress for viewing work shift calendars, technician locations, and Yelp reviews.'
						]}
					/>
				</Fragment>
			)}
		/>
	</Box>
);
