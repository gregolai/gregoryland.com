import { Box } from 'pu2/style-lib';
import React from 'react';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Space } from '../resume-theme';
import { Flex } from '../../primitives';
import { HR, Para, SectionFrame, SmallHeading, SubHeading } from './_primitives';

interface JobProps {
	children: React.ReactNode;
}
const Job = ({ children }: JobProps) => (
	<Box pt={Space._18px} css={{ ':first-of-type': { pt: '0px' } }}>
		{children}
	</Box>
);

interface JobHeadProps {
	title: string;
	from: string;
	to: string;
	where: string;
	city: string;
}
const JobHead = ({ title, from, to, where, city }: JobHeadProps) => (
	<>
		<Flex justifyContent="space-between">
			<SmallHeading>{title}</SmallHeading>
			<SmallHeading>
				{from} - {to}
			</SmallHeading>
		</Flex>
		<SubHeading>
			{where} | {city}
		</SubHeading>
	</>
);

interface JobSummaryProps {
	children: React.ReactNode;
}
const JobSummary = ({ children }: JobSummaryProps) => <Para pt={Space._8px}>{children}</Para>;

interface JobBulletProps {
	children: React.ReactNode;
}
const JobBullet = ({ children }: JobBulletProps) => (
	<Flex alignItems="center" pt={Space._8px}>
		<HR w={Space._18px} />
		<Para flex="1" pl={Space._18px}>
			{children}
		</Para>
	</Flex>
);

export const WorkExperience = (props: BoxProps) => (
	<SectionFrame {...props} title="Work Experience">
		<Job>
			<JobHead
				city="New York, NY"
				from="May 2017"
				to="January 2021"
				title="Software Engineer"
				where="Squarespace"
			/>
			<JobSummary>
				I worked on the Squarespace Design Platform team. I wrote many React and React-Native
				components that were used throughout the Squarespace platform by various other teams. Exposing
				a solid API, style guide, compositional patterns, and documentation was very imporant.
			</JobSummary>
			<Box>
				<JobBullet>
					Discovering and reasoning about various long term and short term trade-offs when
					developing components. Simplicity versus flexibility. Readability vs performance. Third
					party code vs in-house code. Etc.
				</JobBullet>
				<JobBullet>Unit testing with Jest. Integration testing with Cypress and Puppeteer.</JobBullet>
				<JobBullet>
					Collaborated across teams to understand bigger picture scope. This involved managing NPM
					packages, user experience, accessibility, and intuitive design.
				</JobBullet>
				<JobBullet>
					Feature migration and refactoring using code mods and test-driven techniques.
				</JobBullet>
				<JobBullet>
					The importance of a well-designed API, teamwork, and writing good pull requests.
				</JobBullet>
				<JobBullet>
					Part of a multi-team effort to integrate our CMS into a mobile browser experience for
					customers.
				</JobBullet>
				<JobBullet>
					Learned to be humble about what I don't know, questioning why we do things a certain way
					and learning from others' experience.
				</JobBullet>
			</Box>
		</Job>
		<Job>
			<JobHead
				city="New York, NY"
				from="December 2016"
				to="May 2017"
				title="Frontend Engineer"
				where="Agorafy"
			/>
			<JobSummary>
				I was responsible for working with Agorafy's backend team in creating a CMS for viewing and
				editing real-estate listings. Everyone left after the company went bankrupt.
			</JobSummary>
			<Box>
				<JobBullet>Daily stand-ups with the backend team in synchronizing our REST API.</JobBullet>
				<JobBullet>
					This was my first job building a website using React and React Redux, before React had a
					decent Context API.
				</JobBullet>
			</Box>
		</Job>
		<Job>
			<JobHead
				city="New York, NY"
				from="January 2015"
				to="April 2016"
				title="Full-stack Engineer"
				where="YouVisit"
			/>
			<JobSummary>
				YouVisit was a company that built 3D virtual tours, mostly for college campuses. Most of my
				responsibilities revolved around our CMS, where our clients could customize their tours.
			</JobSummary>
			<Box>
				<JobBullet>PHP/MySQL/HTML/CSS/JS/jQuery/Node</JobBullet>

				<JobBullet>
					Wrote a client tool using the JS geolocation API to collect location data and hotspots for
					college campuses. Websockets worked with a Node backend to batch database inserts into our
					SQL database. A client could log into the CMS and view users' paths on Google Maps.
				</JobBullet>
				<JobBullet>
					Organized and aggregated large-scale metrics of site visitor data into useful formats for
					our clients to download.
				</JobBullet>
				<JobBullet>
					Hybrid app development and testing for both mobile and desktop. Used a custom-built MVC
					backend with a REST API and minimal unit testing.
				</JobBullet>
				<JobBullet>
					Built a custom A/B testing library and project tracking system in our CMS to track the
					stages of tour production.
				</JobBullet>
				<JobBullet>
					Worked on embedding tours into 3rd party websites using JavaScript with JSONP to load
					iframe settings.
				</JobBullet>
			</Box>
		</Job>
		<Job>
			<JobHead
				city="New York, NY"
				from="August 2014"
				to="December 2014"
				title="Junior Web Developer"
				where="M&M Environmental"
			/>
			<JobSummary>
				This was my first actual programming job, where I worked as a sole developer for a pest
				control company on things relating to improving internal business operations. I developed
				using PHP, MySQL, and Javascript.
			</JobSummary>
			<Box>
				<JobBullet>
					I built a calendar and scheduling application for managing technician availability.
				</JobBullet>
				<JobBullet>
					I built a vehicle GPS viewer using the Google Maps API that would monitor our technicians'
					proximity to their scheduled appointments.
				</JobBullet>
				<JobBullet>
					I built a beautiful Yelp review scraper (for our own business) that would collect recent
					reviews so we could attempt to remedy any dissatisfied customers.
				</JobBullet>
				<JobBullet>
					Built a Wordpress portal for viewing schedule calendars, technician locations, and Yelp
					reviews, as mentioned above.
				</JobBullet>
				<JobBullet>
					Set up a CRON task that would email our staff about technician schedules and recent Yelp
					reviews.
				</JobBullet>
			</Box>
		</Job>
	</SectionFrame>
);
