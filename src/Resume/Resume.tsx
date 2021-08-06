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

const List = ({ children }) => <Ul>{children}</Ul>;
const ListItem = ({ children }) => (
	<Li>
		<Text.BodyBook>{children}</Text.BodyBook>
	</Li>
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
				<List>
					<ListItem>Used TypeSript, JavaScript, NPM, React, and React-Native</ListItem>
					<ListItem>L3 Engineer - Design Platform team</ListItem>
					<ListItem>
						Focus on preventing breaking changes by encouraging unit tests with Jest and
						integration tests with Cypress/Puppeteer
					</ListItem>
					<ListItem>Style guide creation and documentation using Gatsby</ListItem>
					<ListItem>Multi-package NPM project with Lerna</ListItem>
					<ListItem>Cross-team collaboration and package management</ListItem>
					<ListItem>
						UX, including accessibility, intuitive controls, and focus on user experience
					</ListItem>
					<ListItem>Tech debt incorporated it into weekly tasks</ListItem>
					<ListItem>
						Test-driven development used for refactoring via codemods and code migration
						strategies
					</ListItem>
					<ListItem>Build tool configuration and automation</ListItem>
					<ListItem>
						Part of a multi-team effort to expand our deeply integrated desktop CMS to
						iOS/Android/mobile web for our customers. Used react-native and iOS/Android emulators.
					</ListItem>
					<ListItem>
						Managed tradeoffs beween simplicity and flexibility, composition patterns, exposing an
						intuitive API
					</ListItem>
					<ListItem>
						Learned humbleness, importance of a well-thought API, using open-source code where
						appropriate, development cycle completion, feature migration, test quality and code
						coverage, teamwork, and writing manageable pull requests
					</ListItem>
				</List>
			</Job>
			<Job where="Agorafy" from="December 2016" to="May 2017" role="Frontend Engineer">
				<List>
					<ListItem>
						Collaborated with our backend engineers to create a REST API for our real-estate
						listing project
					</ListItem>
					<ListItem>
						Led a 3-person team using JS/React+Redux to build a CMS frontend. Users could search
						and filter through a variety of real estate properties
					</ListItem>
					<ListItem>
						Agorafy went bankrupt and stopped paying its employees, so we had to leave
					</ListItem>
				</List>
			</Job>
			<Job where="YouVisit" from="January 2015" to="April 2016" role="Full-stack Engineer">
				<List>
					<ListItem>
						Solution-oriented projects using PHP/MySQL/HTML/CSS/JS/jQuery/Node with an emphasis on
						building features fast
					</ListItem>
					<ListItem>
						Hybrid app development and testing for both mobile and desktop. Used a custom-built
						MVC backend with a REST API and minimal unit testing.
					</ListItem>
					<ListItem>Developed and maintained various CMS features for our clients</ListItem>
					<ListItem>
						Built a project tracking system in our CMS to track the stages of tour production.
					</ListItem>
					<ListItem>Built a custom A/B testing library</ListItem>
					<ListItem>
						Used the JS geolocation API to aggregate location data that helped our clients
						visualize popular paths and hotspots on their campuses. Used Node to batch/buffer
						requests that were periodically inserted into our MySQL database. The Google Maps API
						was used within our CMS to view hotspots and individual paths.
					</ListItem>
					<ListItem>
						Organized large-scale analytics of site visitor data into useful formats for our
						clients to download.
					</ListItem>
					<ListItem>
						Worked on embedding tours into 3rd party websites using JavaScript with JSONP to load
						iframe settings.
					</ListItem>
				</List>
			</Job>
			{/* DONE! */}
			<Job
				where="M & M Environmental"
				from="August 2014"
				to="December 2014"
				role="Full-stack Engineer (Entry-level)"
			>
				<List>
					<ListItem>
						Built a cool-looking calendar and scheduling application using PHP/MySQL/JS for
						managing technician availability.
					</ListItem>
					<ListItem>
						Built a Vehicle GPS viewer using the Google Maps API for monitoring technician
						proximity to their scheduled appointments.
					</ListItem>
					<ListItem>Built a Yelp review scraper and fancy frontend.</ListItem>
					<ListItem>
						Built an admin portal using Auth0 Google single-sign-on. Used Wordpress for viewing
						work shift calendars, technician locations, and Yelp reviews.
					</ListItem>
					<ListItem>
						Set up CRON tasks that would send aggregated morning emails to our staff about recent
						Yelp reviews and shift calendars.
					</ListItem>
				</List>
			</Job>
		</Box>
	</Box>
);
