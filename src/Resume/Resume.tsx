import React from 'react';
import { Job } from './Job';
import { Text, Box, Ul, Li, Flex } from './primitives';
import { space } from './tokens';

const HeaderContact = ({ label, text }) => (
	<Flex alignItems="center" justifyContent="space-between">
		<Text.Label>{label}</Text.Label>
		<Text.BodyMedium textAlign="right">{text}</Text.BodyMedium>
	</Flex>
);

const Lang = ({ children }) => <Text.BodyMedium display="inline-block">{children}</Text.BodyMedium>;
const LangDivider = () => (
	<Text.BodyMedium display="inline-block" px={space._5}>
		{'\u25CF'}
	</Text.BodyMedium>
);

export const Resume = (props: React.ComponentProps<typeof Box>) => (
	<Box
		backgroundColor="white"
		boxShadow="4px 4px 2px rgba(0,0,0,0.3)"
		lineHeight="1" // Keep lineHeight: '1' until it's defaulted to globally
		p={space._8}
		{...props}
		css={{
			'@media print': {
				p: space._0
			}
		}}
	>
		{/* HEADER */}
		<Flex justifyContent="space-between" pb={space._7}>
			<Box>
				<Text.MegaTitle>Gregory Dalton</Text.MegaTitle>

				{/* SKILLS */}
				<Box pt={space._6} pl={space._5}>
					<Lang>TypeScript</Lang>
					<LangDivider />
					<Lang>JavaScript</Lang>
					<LangDivider />
					<Lang>Node</Lang>
					<LangDivider />
					<Lang>C#</Lang>
					<LangDivider />
					<Lang>C++</Lang>
				</Box>
			</Box>

			<Flex
				flex="1"
				pl={space._9}
				flexDirection="column"
				justifyContent="sapce-between"
				maxWidth="352px"
			>
				{/* CONTACT */}
				<Box>
					<HeaderContact label="Email" text="gregolai@gmail.com" />
					<HeaderContact label="Website" text="gregoryland.com" />
				</Box>
				{/* EDUCATION */}
				<Box>
					<Text.Subtitle>B.S. Computer Science</Text.Subtitle>
					<Text.Label>California State University, Long Beach</Text.Label>
					<Text.Label pb={space._4}>Class of 2009</Text.Label>
					<Ul listStyleType="'\276F'">
						<Li pl={space._4} listStyleType={null}>
							Programming team
						</Li>
						<Li pl={space._4} listStyleType={null}>
							Tau Beta Pi Engineering Honor Society
						</Li>
					</Ul>
				</Box>
			</Flex>
		</Flex>

		{/* BODY */}
		<Box px={space._5} pt={space._5}>
			<Job where="Squarespace" from="May 2017" to="January 2021" role="Software Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>
							Used TypeSript, JavaScript, NPM, React, and React-Native
						</Text.BodyBook>
						<Text.BodyBook>L3 Engineer - Design Platform team</Text.BodyBook>
						<Text.BodyBook>
							Focus on preventing breaking changes by encouraging unit tests with Jest and
							integration tests with Cypress/Puppeteer
						</Text.BodyBook>
						<Text.BodyBook>Style guide creation and documentation using Gatsby</Text.BodyBook>
						<Text.BodyBook>Multi-package NPM project with Lerna</Text.BodyBook>
						<Text.BodyBook>Cross-team collaboration and package management</Text.BodyBook>
						<Text.BodyBook>
							UX, including accessibility, intuitive controls, and focus on user experience
						</Text.BodyBook>
						<Text.BodyBook>Tech debt incorporated it into weekly tasks</Text.BodyBook>
						<Text.BodyBook>
							Test-driven development used for refactoring via codemods and code migration
							strategies
						</Text.BodyBook>
						<Text.BodyBook>Build tool configuration and automation</Text.BodyBook>
						<Text.BodyBook>
							Part of a collaborated effort to expand our deeply integrated desktop CMS to
							iOS/Android/mobile web. Used react-native and iOS/Android emulators.
						</Text.BodyBook>
						<Text.BodyBook>
							Tradeoffs beween simplicity and flexibility, composition patterns, exposing an
							intuitive API
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
			<Job where="Agorafy" from="December 2016" to="May 2017" role="Frontend Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>
							Used JavaScript, React+Redux, to collaborate with our backend engineers in
							creating a REST API for our project needs
						</Text.BodyBook>
						<Text.BodyBook>
							Led a small 3-person team using modern tech to build a CMS frontend for
							real-estate listings. Users could search and filter through a variety of real
							estate properties
						</Text.BodyBook>
						<Text.BodyBook>Company went bankrupt; stopped paying its employees</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Implementing new technologies at the time, such as React + Redux.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
			<Job where="YouVisit" from="January 2015" to="April 2016" role="Full-stack Engineer">
				<Ul>
					<Li>
						<Text.BodyBook>Used PHP, MySQL, HTML, CSS, and JavaScript/jQuery</Text.BodyBook>
						<Text.BodyBook>
							Solution-oriented projects with an emphasis on building it fast, versus properly
							incrementally refactoring
						</Text.BodyBook>
						<Text.BodyBook>
							Hybrid app development and testing for both mobile and desktop systems using
							JavaScript, PHP, MySQL, and Node. Used an MVC back-end with a REST API and minimal
							unit testing.
						</Text.BodyBook>
						<Text.BodyBook>
							Mobile JavaScript GPS API, data collection, and real-time visualization of app
							users to our clients. Batched Node requests that were periodically inserted into
							our database. Used the Google Maps API to view campus paths and tour hotspots.
						</Text.BodyBook>
						<Text.BodyBook>Developed and maintained CMS features for our clients</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Wrote a project tracking system in our CMS to track the stages of tour production.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Organized large-scale analytics of site visitor data into useful formats for our
							clients to download.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Worked on embedding tours into 3rd party websites using JavaScript with JSONP to
							load iframe settings.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Coordinated with design, sales, and marketing to implement A/B testing with a
							massive redesign and refactor for our visitor registration form, using jQuery,
							AJAX, PHP, and MySQL.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Daily standups, Jira, and git workflow for tasks, code reviews, QA, staging, and
							release.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
			<Job
				where="M & M Environmental"
				from="August 2014"
				to="December 2014"
				role="Full-stack Engineer (Entry-level)"
			>
				<Ul>
					<Li>
						<Text.BodyBook>Used PHP, MySQL, HTML, CSS, and JavaScript</Text.BodyBook>
						<Text.BodyBook>
							Built a calendar and scheduling application using PHP, MySQL/MSSQL, and JavaScript
							for managing technician availability.
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
							Created a Yelp review scraper that would email our recent Yelp reviews to our
							staff.
						</Text.BodyBook>
					</Li>
					<Li>
						<Text.BodyBook>
							Built an admin portal using JavaScript/Auth0 single-sign-on through Google. Used
							Wordpress for viewing work shift calendars, technician locations, and Yelp
							reviews.
						</Text.BodyBook>
					</Li>
				</Ul>
			</Job>
		</Box>
	</Box>
);
