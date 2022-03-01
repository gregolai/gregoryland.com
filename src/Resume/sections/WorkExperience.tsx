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
				components that were used throughout the Squarespace platform by various other teams.
				Delivering a solid API, style guide, compositional patterns, and documentation was very
				imporant. I learnt teamwork, humbleness, good coding practices, reasons for design decisions,
				and how to write meaningful pull requests. I've been blessed to have such a knowledgable and
				passionate team lead.
			</JobSummary>
			<Box>
				<JobBullet>
					Reasoning about various trade-offs and implementation details that come with exposing an
					API to consumers. Simplicity vs flexibility; Readability vs perforamnce; Building our own
					vs using a 3rd party library.
				</JobBullet>
				<JobBullet>
					We used Jest for our unit tests. Cypress and Puppeteer for our integration tests.
				</JobBullet>
				<JobBullet>
					Collaborated with teams using our components to understand their needs. This involved
					managing NPM packages, user experience, accessibility, and intuitive design.
				</JobBullet>
				<JobBullet>
					I wrote codemods using an abstract-syntax-tree library and test-driven techniques to help
					consumers migrate API features.
				</JobBullet>
				<JobBullet>
					I was part of a multi-team effort to expand our CMS to a mobile-browser experience.
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
				responsibilities revolved around our CMS, where our clients could sign in and customize their
				tours.
			</JobSummary>
			<Box>
				<JobBullet>
					Required considerations to be made for both desktop and mobile platforms. We used
					BrowserStack to test on different devices.
				</JobBullet>
				<JobBullet>I wrote code using PHP, MySQL, jQuery, and a little NodeJS.</JobBullet>
				<JobBullet>
					I organized and aggregated large-scale metrics of visitor data into useful formats for our
					clients to download.
				</JobBullet>
				<JobBullet>
					I built a client tool using the JS Geolocation API to aggregate mobile device locations
					into walk paths and tour hotspots. For this, I used websockets and wrote a NodeJS backend
					for batching inserts into our SQL database. The Google Maps API was used on the frontend.
				</JobBullet>
				<JobBullet>
					I built a custom library for A/B testing. Our future product decisions would depend on the
					quality of the data gathered using it.
				</JobBullet>
				<JobBullet>I designed some CMS features that would be available to our clients.</JobBullet>
				<JobBullet>
					I worked on embedding tours into 3rd party websites with JSONP and iframes.
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
					I built a Wordpress portal for viewing schedule calendars, technician locations, and Yelp
					reviews, as mentioned above.
				</JobBullet>
				<JobBullet>
					I set up a CRON task that would email our staff about technician schedules and recent Yelp
					reviews.
				</JobBullet>
			</Box>
		</Job>
	</SectionFrame>
);
