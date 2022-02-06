import React from 'react';
import { Box } from 'pu2/style-lib';
import { Flex, Li, P, Text, Ul } from '../primitives';
import { LineHeight, Space } from '../theme';

const HeaderContact = ({ label, text }: { label: string; text: string }) => (
	<Flex alignItems="center" justifyContent="space-between">
		<Text>{label}</Text>
		<Text textAlign="right">{text}</Text>
	</Flex>
);

const Job = ({
	children,
	city,
	where,
	role,
	from,
	to
}: {
	children: React.ReactNode;
	city: string;
	where: string;
	role: string;
	from: string;
	to: string;
}) => (
	<Box borderTop="3px solid black">
		<Flex justifyContent="space-between" py={Space._5} px={Space._7}>
			<Box>
				<Text display="block" textTransform="uppercase" fontWeight="600">
					{role}
				</Text>
				<Flex pt={Space._3} justifyContent="space-between">
					<Text>{where}</Text>
					<Text pl={Space._7} whiteSpace="nowrap">
						{city}
					</Text>
				</Flex>
			</Box>

			<Text textAlign="right" textTransform="uppercase" fontWeight="600">
				{from} - {to}
			</Text>
		</Flex>
		<Box pb={Space._6} px={Space._5}>
			{children}
		</Box>
	</Box>
);

const LiP = ({ children }: { children: React.ReactNode }) => (
	<Li lineHeight={LineHeight._3} pb={Space._2}>
		<P>{children}</P>
	</Li>
);

export const Resume = () => (
	<Box
		backgroundColor="white"
		lineHeight="1" // Keep lineHeight: '1' until it's defaulted to globally
		p={Space._8}
		css={{
			'@media print': {
				p: Space._0
			}
		}}
	>
		<Flex justifyContent="space-between">
			<Box>
				<Text>Gregory Dalton</Text>

				{/* SKILLS */}
				<Ul>
					<Li>
						<Text>Typescript</Text>
					</Li>
					<Li>
						<Text>Javascript</Text>
					</Li>
					<Li>
						<Text>Node</Text>
					</Li>
					<Li>
						<Text>C#</Text>
					</Li>
				</Ul>
			</Box>

			<Box flex="1" pl={Space._9}>
				{/* CONTACT */}
				<Box pb={Space._2}>
					<HeaderContact label="email" text="gregolai@gmail.com" />
					<HeaderContact label="website" text="gregoryland.com" />
				</Box>
				{/* EDUCATION */}
				<Box borderTop="2px solid black" pt={Space._2}>
					<Text display="block">B.S. Computer Science</Text>
					<Text display="block">California State University, Long Beach</Text>
					<Text display="block" pb={Space._4}>
						Class of 2009
					</Text>
					<Text display="block">- Programming team</Text>
					<Text display="block">- Tau Beta Pi Engineering Honor Society</Text>
				</Box>
			</Box>
		</Flex>
		{/* BODY */}
		<Box pt={Space._6}>
			<Job
				city="New York, NY"
				where="Squarespace"
				from="May 2017"
				to="January 2021"
				role="Software Engineer"
			>
				<Ul>
					<LiP>
						As one of the starting members of the Squarespace Design Platform team, I developed
						consistent and reusable React and React-Native components.
					</LiP>
					<LiP>
						Developed Squarespace style guides, compositional patterns, APIs, and high-quality
						documentation using Gatsby.
					</LiP>

					<LiP>
						Discovering and reasoning about various long term and short term trade-offs when
						developing components. Simplicity versus flexibility. Readability vs performance.
						Third party code vs in-house code. Etc.
					</LiP>
					<LiP>Unit testing with Jest. Integration testing with Cypress and Puppeteer.</LiP>
					<LiP>
						Collaborated across teams to understand bigger picture scope. This involved managing
						NPM packages, user experience, accessibility, and intuitive design.
					</LiP>
					<LiP>Feature migration and refactoring using code mods and test-driven techniques.</LiP>
					<LiP>
						The importance of a well-designed API, teamwork, and writing good pull requests.
					</LiP>
					<LiP>
						Part of a multi-team effort to integrate our CMS into a mobile browser experience for
						customers.
					</LiP>
					<LiP>
						Learned to be humble about what I don't know, questioning why we do things a certain
						way and learning from others' experience.
					</LiP>
					<LiP>Wrote a custom Table, DateTime picker, etc.</LiP>
				</Ul>
			</Job>
			<Job
				city="New York, NY"
				where="Agorafy"
				from="December 2016"
				to="May 2017"
				role="Frontend Engineer"
			>
				<Ul>
					<LiP>
						Collaborated with our backend engineers to create a REST API for our real-estate
						listing project.
					</LiP>
					<LiP>
						Led a 3-person team using JS/React+Redux to build a CMS frontend. Users could search
						and filter through a variety of real estate properties.
					</LiP>
				</Ul>
			</Job>
			<Job
				city="New York, NY"
				where="YouVisit"
				from="Jan 2015"
				to="Apr 2016"
				role="Full-stack Engineer"
			>
				<Ul>
					<LiP>PHP/MySQL/HTML/CSS/JS/jQuery/Node</LiP>
					<LiP>
						Wrote a client tool using the JS geolocation API to collect location data and hotspots
						for college campuses. Websockets worked with a Node backend to batch database inserts
						into our SQL database. A client could log into the CMS and view users' paths on Google
						Maps.
					</LiP>
					<LiP>
						Organized and aggregated large-scale metrics of site visitor data into useful formats
						for our clients to download.
					</LiP>
					<LiP>
						Hybrid app development and testing for both mobile and desktop. Used a custom-built
						MVC backend with a REST API and minimal unit testing.
					</LiP>
					<LiP>
						Built a custom A/B testing library and project tracking system in our CMS to track the
						stages of tour production.
					</LiP>
					<LiP>
						Worked on embedding tours into 3rd party websites using JavaScript with JSONP to load
						iframe settings.
					</LiP>
				</Ul>
			</Job>
			<Job
				city="New York, NY"
				where="M & M Environmental"
				from="August 2014"
				to="December 2014"
				role="Entry-level Full-stack Engineer"
			>
				<Ul>
					<LiP>
						Built a cool-looking calendar and scheduling application using PHP/MySQL/JS for
						managing technician availability.
					</LiP>
					<LiP>
						Built a Vehicle GPS viewer using the Google Maps API for monitoring technician
						proximity to their scheduled appointments.
					</LiP>
					<LiP>Built a Yelp review scraper and fancy frontend.</LiP>
					<LiP>
						Built an admin portal using Auth0 Google single-sign-on. Used Wordpress for viewing
						work shift calendars, technician locations, and Yelp reviews.
					</LiP>
					<LiP>
						Set up CRON tasks that would send aggregated morning emails to our staff about recent
						Yelp reviews and shift calendars.
					</LiP>
				</Ul>
			</Job>
		</Box>
	</Box>
);
