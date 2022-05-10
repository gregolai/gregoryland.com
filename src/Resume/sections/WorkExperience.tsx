import { Box } from 'pu2/style-lib';
import React from 'react';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Space } from '../resume-theme';
import { Flex } from '../../primitives';
import { HR, Para, SectionFrame, SmallHeading, SubHeading } from './_primitives';

interface JobProps {
	children: React.ReactNode;
	city: string;
	from: string;
	title: string;
	to: string;
	where: string;
}
const Job = ({ title, from, to, where, city, children }: JobProps) => (
	<Box breakInside="avoid" pt={Space._18px} css={{ ':first-of-type': { pt: '0px' } }}>
		<Box>
			<Flex justifyContent="space-between">
				<SmallHeading>{title}</SmallHeading>
				<SmallHeading>
					{from} - {to}
				</SmallHeading>
			</Flex>
			<SubHeading>
				{where} | {city}
			</SubHeading>
		</Box>
		{children}
	</Box>
);

interface JobSummaryProps {
	children: React.ReactNode;
}
const JobSummary = ({ children }: JobSummaryProps) => <Para pt={Space._8px}>{children}</Para>;

interface JobBulletProps {
	children: React.ReactNode;
}
const JobBullet = ({ children }: JobBulletProps) => (
	<Flex alignItems="center" pt={Space._8px} breakInside="avoid">
		<HR w={Space._18px} />
		<Para flex="1" pl={Space._18px}>
			{children}
		</Para>
	</Flex>
);

export const WorkExperience = (props: BoxProps) => (
	<SectionFrame {...props} title="Work Experience">
		<Job
			city="New York, NY"
			from="May 2017"
			to="January 2021"
			title="Software Engineer"
			where="Squarespace"
		>
			<JobSummary>
				I worked on Squarespace's Design Platform team to develop high quality, aesthetically
				pleasing, well tested and documented components used throughout Squarespace products. Exposing
				an intuitive and flexible API, along with good documentation, was critical to minimizing the
				friction others could have when using our library. I'm honored to have been part of such a
				talented team that gave me perspective on the challenges of large-scale software development.
			</JobSummary>
			<Box>
				<JobBullet>
					We built React and React-Native components using compositional patterns and a design
					system.
				</JobBullet>
				<JobBullet>
					Good documentation via a Gatsby site became increasingly important as more teams opted to
					use our components.
				</JobBullet>
				<JobBullet>
					Feature migration and refactoring using AST-based codemod scripts, which transformed code
					from one shape into another.
				</JobBullet>
				<JobBullet>
					Integration and unit testing using Cypress and Jest/Puppeteer. Similar to writing good
					documentation, the importance of these became apparent as our library evolved.
				</JobBullet>
				<JobBullet>
					Understanding tradeoffs that may not seem evident initially - e.g. simplicity vs
					flexibility, readability vs performance, using a 3rd party tool vs building one your own.
				</JobBullet>
				<JobBullet>
					Cross-team collaboration to evolve our CMS into a mobile-web friendly experience.
					Discussions were had around how to best manage NPM packages, user experience,
					accessibility, and intuitive design.
				</JobBullet>
				<JobBullet>I learned to write human-readable, meaningful pull requests.</JobBullet>
				<JobBullet>
					Understanding the importance of humility and recognizing the strengths and weaknesses of
					myself and others.
				</JobBullet>
			</Box>
		</Job>
		<Job city="New York, NY" from="December 2016" to="May 2017" title="Frontend Engineer" where="Agorafy">
			<JobSummary>
				I was the primary frontend developer at Agorafy. I worked with the backend team in creating a
				CMS for viewing and editing real-estate listings. The company dissolved and everyone left.
			</JobSummary>
			<Box>
				<JobBullet>
					I had learnt some React and Redux on my own prior to this and was eager to learn more. My
					first job with proper backend/frontend specialization roles. Daily standups kept us
					in-sync.
				</JobBullet>
				<JobBullet>
					I built a frontend that communicated with a GraphQL API in a Docker container.
				</JobBullet>
			</Box>
		</Job>
		<Job
			city="New York, NY"
			from="January 2015"
			to="April 2016"
			title="Full-stack Engineer"
			where="YouVisit"
		>
			<JobSummary>
				YouVisit was a company that built 3D virtual tours, mostly for college campuses. Most of my
				responsibilities were writing CMS features that our clients could access.
			</JobSummary>
			<Box>
				<JobBullet>
					There was a heavy emphasis on generating HTML, and sometimes Javascript/jQuery,
					dynamically using PHP and MySQL.
				</JobBullet>
				<JobBullet>We used BrowserStack to test desktop and mobile functionality.</JobBullet>
				<JobBullet>
					I organized and aggregated large-scale metrics of visitor data into useful formats for our
					clients to download.
				</JobBullet>
				<JobBullet>
					I built a tool using Google Maps and the Geolocation API to aggregate mobile device
					locations into visitor paths and hotspots. The location data streamed from a websocket to
					a NodeJS server that would periodically batch-insert data into our MySQL database.
				</JobBullet>
				<JobBullet>
					I built a small library for A/B testing. Our future product decisions would depend on the
					quality of the data gathered using it.
				</JobBullet>
				<JobBullet>
					I worked on functionality that allowed tours to be embedded into 3rd party websites using
					iframes with JSONP.
				</JobBullet>
			</Box>
		</Job>
		<Job
			city="New York, NY"
			from="August 2014"
			to="December 2014"
			title="Junior Web Developer"
			where="M&M Environmental"
		>
			<JobSummary>
				This was my first programming job. I was the sole developer on tools for improving internal
				business operations. I furthered my knowledge of PHP, MySQL, and Javascript.
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
					I built a beautiful Yelp review scraper for M&M Environmental that would collect recent
					reviews so we could attempt to remedy and maintain a high customer satisfaction.
				</JobBullet>
				<JobBullet>
					I built a Wordpress portal for viewing schedule calendars, technician locations, and Yelp
					reviews, as mentioned above.
				</JobBullet>
				<JobBullet>
					I set up a CRON task that would periodically email our staff about technician schedules
					and recent Yelp reviews.
				</JobBullet>
			</Box>
		</Job>
	</SectionFrame>
);
