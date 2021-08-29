import React from 'react';
import { Job } from './Job';
import { Text, Box, Ul, Li, Flex } from './primitives';
import { space } from './tokens';
import { Squarespace, MMEnvironmental } from '../logos';

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

const List = ({ children }) => <Ul listStyleType="'\2022'">{children}</Ul>;
const ListItem = ({ children }) => (
	<Li
		pl={space._4}
		listStyleType={null}
		css={{
			':not(:last-of-type)': { pb: space._2 }
		}}
	>
		<Text.BulletItem>{children}</Text.BulletItem>
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
		<Flex justifyContent="space-between">
			<Box>
				<Text.MegaTitle>Gregory Dalton</Text.MegaTitle>

				{/* SKILLS */}
				<Box pt={space._4} pl={space._4}>
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

			<Flex flex="1" flexDirection="column" justifyContent="sapce-between" maxWidth="352px">
				{/* CONTACT */}
				<Box pb={space._2}>
					<HeaderContact label="Email" text="gregolai@gmail.com" />
					<HeaderContact label="Website" text="gregoryland.com" />
				</Box>
				{/* EDUCATION */}
				<Box borderTop="2px solid black" pt={space._2}>
					<Text.Subtitle>B.S. Computer Science</Text.Subtitle>
					<Text.Label>California State University, Long Beach</Text.Label>
					<Text.Label pb={space._4}>Class of 2009</Text.Label>
					<Text.Label>- Programming team</Text.Label>
					<Text.Label>- Tau Beta Pi Engineering Honor Society</Text.Label>
				</Box>
			</Flex>
		</Flex>

		{/* BODY */}
		<Box pt={space._5}>
			<Job
				where="Squarespace"
				from="May 2017"
				to="January 2021"
				role="Software Engineer"
				topBorder={false}
			>
				<List>
					<ListItem>
						A proud L3 Engineer of the new Design Platform team. I was one of the 4 initial
						members of the team, which grew to about 15 engineers and designers as the years
						progressed. We designed and engineered React and React-Natiev components that were
						visually and behaviorally consistent with each other. A Squarespace style guide and
						theming system evolved over time.
					</ListItem>
					<ListItem>
						Involved in the development of a Squarespace-wide style guide, compositional patterns,
						a solid API, and high-quality internal documentation using Gatsby.
					</ListItem>
					<ListItem>
						Learned to resist premature optimization in favor or readability. Occasionally
						gathered performance metrics that supported future optimizations.
					</ListItem>
					<ListItem>
						Focus on code integrity by encouraging unit tests with Jest and integration tests with
						Cypress/Puppeteer.
					</ListItem>
					<ListItem>
						Cross-team collaboration, NPM package management, UX, accessibility, and intuitive
						design.
					</ListItem>
					<ListItem>Tech debt incorporated it into weekly tasks.</ListItem>
					<ListItem>
						Test-driven development used for refactoring via codemods and code migration
						strategies.
					</ListItem>
					<ListItem>
						Part of a multi-team effort to expand our deeply integrated desktop CMS to
						iOS/Android/mobile web for our customers. Used react-native and iOS/Android emulators.
					</ListItem>
					<ListItem>Context-dependent tradeoffs beween simplicity and flexibility.</ListItem>
					<ListItem>
						Learned humbleness, importance of a well-thought API, using open-source code where
						appropriate, development cycle completion, feature migration, test quality and code
						coverage, teamwork, and writing manageable pull requests.
					</ListItem>
				</List>
			</Job>
			<Job where="Agorafy" from="December 2016" to="May 2017" role="Frontend Engineer">
				<List>
					<ListItem>
						Collaborated with our backend engineers to create a REST API for our real-estate
						listing project.
					</ListItem>
					<ListItem>
						Led a 3-person team using JS/React+Redux to build a CMS frontend. Users could search
						and filter through a variety of real estate properties.
					</ListItem>
					<ListItem>
						Agorafy went bankrupt and stopped paying its employees, so we had to leave.
					</ListItem>
				</List>
			</Job>
			<Job where="YouVisit" from="January 2015" to="April 2016" role="Full-stack Engineer">
				<List>
					<ListItem>
						Emphasis on developing features fast using PHP/MySQL/HTML/CSS/JS/jQuery/Node.
					</ListItem>
					<ListItem>
						Used the JS geolocation API to collect location data that helped our clients visualize
						popular campus paths and hotspots. Used websockets and Node to batch database inserts.
						The Google Maps API was used within our CMS to view hotspots and individual paths.
					</ListItem>
					<ListItem>
						Organized and aggregated large-scale metrics of site visitor data into useful formats
						for our clients to download.
					</ListItem>
					<ListItem>
						Hybrid app development and testing for both mobile and desktop. Used a custom-built
						MVC backend with a REST API and minimal unit testing.
					</ListItem>
					<ListItem>
						Built a custom A/B testing library and project tracking system in our CMS to track the
						stages of tour production.
					</ListItem>
					<ListItem>
						Worked on embedding tours into 3rd party websites using JavaScript with JSONP to load
						iframe settings.
					</ListItem>
				</List>
			</Job>
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
