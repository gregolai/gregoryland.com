import React, { Fragment } from 'react';
import { HeaderContact } from './HeaderContact';
import { BodySection } from './BodySection';
import { Job } from './Job';
import { Skill } from './Skill';
import { Text, Box, Ul, Li, Flex } from './primitives';
import { space } from './tokens';

export default props => (
	<Box
		{...props}
		css={{
			// Keep lineHeight: '1' until it's defaulted to globally
			lineHeight: '1',

			background: 'white',
			p: space._6,
			boxShadow: '4px 4px 2px rgba(0,0,0,0.3)',
			...props.css
		}}
	>
		{/* HEADER */}
		<Flex css={{ pb: space._5 }}>
			<Box css={{ flex: '1' }}>
				<Text.Title>Gregory Dalton</Text.Title>
				<Text.Subtitle>Software Engineer</Text.Subtitle>
			</Box>
			<Box>
				<HeaderContact label="Phone" text="(714) 651-2126" />
				<HeaderContact label="Email" text="gregolai@gmail.com" />
			</Box>
		</Flex>
		{/* BODY */}
		<Flex>
			{/* BODY LEFT COLUMN */}
			<Box
				css={{
					width: '236px',
					pr: space._5,
					mr: space._5
				}}
			>
				<BodySection title="EDUCATION">
					<Box>
						<Text.Subtitle>B.S. Computer Science</Text.Subtitle>
						<Text.Label>California State University, Long Beach</Text.Label>
						<Text.Label css={{ pb: space._4 }}>Class of 2009</Text.Label>
						<Ul>
							<Li>
								<Text.BodyBook>
									Participated in the programming team and two regional competitions.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Tau Beta Pi Engineering Honor Society member, Theta Chapter.
								</Text.BodyBook>
							</Li>
						</Ul>
					</Box>
				</BodySection>
				<BodySection title="SKILLS">
					<Skill name="JavaScript" desc="The language I write every day." />
					<Skill name="TypeScript" desc="Using since 2012." />
					<Skill name="C#" desc="A Pick up new things here and there, as a hobby." />
					<Skill name="C++" desc="First programming language." />
				</BodySection>
			</Box>
			{/* BODY RIGHT COLUMN */}
			<Box css={{ flex: '1' }}>
				<BodySection title="PROFILE">
					<Text.BodyBook>Improving my skills and learning new things daily</Text.BodyBook>
				</BodySection>
				<BodySection title="CAREER">
					<Job where="Squarespace" from="May 2017" to="Present" role="Software Engineer">
						<Text.Subtitle>Design Platform Team</Text.Subtitle>
						<Ul>
							<Li>
								<Text.BodyBook>Level 3 Engineer</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Configured build tools, NPM package management systems, and code migration
									strategies.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Part of a team effort to move a deeply integrated, consumer-facing DESKTOP
									CMS to be a responsive and mobile-friendly experience.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Some React-Native experience, targeting iOS and Android devices.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Unit and integration tests using Jest, Enzyme, Puppeteer/Cypress. Some
									test-driven development used for refactoring and codemods.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Consideration on exposiing a clean API, composition patterns, and
									tradeoffs between simplicity and flexibility.
								</Text.BodyBook>
							</Li>
						</Ul>
					</Job>
					<Job where="Agorafy" from="December 2016" to="May 2017" role="Front-End Web Developer">
						<Ul>
							<Li>
								<Text.BodyBook>
									Engineered a CMS frontend from scratch, allowing users to search and
									filter through a wide variety of real estate properties
								</Text.BodyBook>
								<Text.BodyBook>
									Communication with our backend developers to sync the needs of our backend
									REST API with the needs of our frontend.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Implementing new technologies at the time, such as React + Redux.
								</Text.BodyBook>
							</Li>
						</Ul>
					</Job>
					<Job where="YouVisit" from="January 2015" to="April 2016" role="Full-Stack Developer">
						<Ul>
							<Li>
								<Text.BodyBook>
									Hybrid app development and testing for both mobile and desktop systems
									using JavaScript, PHP, MySQL, and Node. Used an MVC back-end with a
									RESTful API and some unit testing.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Developed a project tracking system in our CMS to track the stages of tour
									production.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Implemented mobile geolocation tracking, batching requests from Node to
									our database, and using Google Maps API to view campus paths and hotspots.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Organized large-scale analytics of site visitor data into useful for our
									clients to download.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Worked on embedding tours into 3rd party websites using JavaScript with
									JSONP to load iframe settings.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Coordinated with design, sales, and marketing to implement A/B testing
									with a massive redesign and refactor for our visitor registration form,
									using jQuery, AJAX, PHP, and MySQL.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Daily standups, Jira, and git workflow for tasks, code reviews, QA,
									staging, and release.
								</Text.BodyBook>
							</Li>
						</Ul>
					</Job>
					<Job
						where="M & M Environmental"
						from="August 2014"
						to="December 2014"
						role="Junior Web Developer"
					>
						<Ul>
							<Li>
								<Text.BodyBook>
									Built a calendar and scheduling application using PHP, MySQL/MSSQL, and
									JavaScript for managing technician availability.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Implemented a Vehicle GPS viewer using Google Maps API with JavaScript for
									monitoring technician proximity to their scheduled appointments.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Created a Yelp review scraper that would email our recent Yelp reviews to
									our staff.
								</Text.BodyBook>
							</Li>
							<Li>
								<Text.BodyBook>
									Built an admin portal using JavaScript/Auth0 single-sign-on through
									Google. Used Wordpress for viewing work shift calendars, technician
									locations, and Yelp reviews.
								</Text.BodyBook>
							</Li>
						</Ul>
					</Job>
				</BodySection>
			</Box>
		</Flex>
	</Box>
);
