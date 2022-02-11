import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import React from 'react';
import type { IconType } from 'react-icons';
import { MdFace, MdOutlineEmail } from 'react-icons/md';
import {
	Diamond,
	Icon,
	MediumHeading,
	NameHeading,
	Para,
	SmallHeading,
	SubHeading
} from './resume-primitives';
import { FontSize, Palette, Space } from './resume-theme';
import { Flex } from '../primitives';

const border = `2px solid ${Palette.darkest}`;

const HR = (props: BoxProps) => <Box bb={border} mt="-1px" {...props} />;

export const FirstName = ({ pl, pt }: Pick<BoxProps, 'pl' | 'pt'>) => (
	<NameHeading color={Palette.darker} pl={pl} pt={pt}>
		Gregory
	</NameHeading>
);
export const LastName = ({ pl }: Pick<BoxProps, 'pl'>) => (
	<NameHeading fontWeight="600" pl={pl} pt={Space._4px}>
		Dalton
	</NameHeading>
);

export const PrimaryRole = ({ pl }: Pick<BoxProps, 'pl'>) => (
	<MediumHeading pl={pl} pt={Space._18px} color={Palette.dark}>
		Software Engineer
	</MediumHeading>
);

interface ContactProps {
	IconComp: IconType;
	label: string;
	text: string;
}
const Contact = ({ IconComp, label, text }: ContactProps) => (
	<Flex
		py={Space._18px}
		alignItems="stretch"
		bb="2px solid white"
		css={{
			':first-of-type': { pt: '0px' },
			':last-of-type': { bb: 'none', pb: '0px' }
		}}
	>
		<Icon Comp={IconComp} w={Space._30px} h={Space._30px} color="white" />

		<Flex flex="1" pl={Space._18px} flexDirection="column" justifyContent="space-between">
			<SmallHeading color="white">{label}</SmallHeading>
			<Box color="white">{text}</Box>
		</Flex>
	</Flex>
);

interface ContactsProps extends Pick<BoxProps, 'px' | 'py'> {}
export const Contacts = ({ px, py }: ContactsProps) => (
	<Box bg={Palette.darkest} px={px} py={py}>
		<Contact IconComp={MdOutlineEmail} label="Email" text="gregolai@gmail.com" />
		<Contact IconComp={MdFace} label="Website" text="gregoryland.com" />
	</Box>
);

interface SkillProps {
	name: string;
	value: number;
}
export const Skill = ({ name, value }: SkillProps) => (
	<Box pt={Space._18px} css={{ ':first-of-type': { pt: '0px' } }}>
		<Box bg={Palette.lighter} overflow="hidden">
			<Box h={Space._12px} bg={Palette.light} w={`${value * 10}%`} />
		</Box>
		<Box textAlign="center" fontSize={FontSize._14px} pt={Space._4px}>
			{name}
		</Box>
	</Box>
);
const HideVerticalStubHack = (props: BoxProps) => (
	<Box {...props} position="absolute" bg={Palette.bg} w="4px" h="8px" />
);

export const Skills = (props: BoxProps) => (
	<Box position="relative" {...props}>
		<HideVerticalStubHack />
		<HideVerticalStubHack right="0px" />
		<Box bx={border} bb={border}>
			<Flex position="relative" alignItems="center">
				<Diamond />
				<MediumHeading pl={Space._30px}>Skills</MediumHeading>
				<Flex position="relative" ml={Space._30px} flex="1" alignItems="center">
					<Diamond />
					<HR w="100%" />
				</Flex>
			</Flex>
			<Box px={Space._30px} py={Space._18px}>
				<Skill name="Javascript" value={9} />
				<Skill name="Typescript" value={8} />
				<Skill name="React" value={8} />
				<Skill name="C#, C++, Backend" value={6} />
			</Box>
		</Box>
	</Box>
);

interface ResumeFrameProps extends BoxProps {
	children: React.ReactNode;
}
export const ResumeFrame = ({ children, ...rest }: ResumeFrameProps) => (
	<Box {...rest} position="relative" bg={Palette.bg} lineHeight="1" fontFamily="system-ui,sans-serif">
		{children}
	</Box>
);

export const ResumeProfileImg = ({ h }: Pick<BoxProps, 'h'>) => (
	<Box
		pt={Space._30px}
		h={h}
		bg="url('https://images.unsplash.com/photo-1644123550420-ee28152ab925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2781&q=80')"
		backgroundSize="cover"
		backgroundPosition="50% 50%"
	/>
);

const LeftSection = ({ title, children, ...rest }: any) => (
	<Box {...rest}>
		<MediumHeading>{title}</MediumHeading>
		<Box pt={Space._18px}>{children}</Box>
	</Box>
);
export const CareerSummary = (props: BoxProps) => (
	<LeftSection {...props} title="Career Summary">
		<Para>
			This is my career summary. It's meant to summarize my career. What have I learnt? What are my
			goals? Why do I do what I do? It should be very short.
		</Para>
	</LeftSection>
);

export const Education = (props: BoxProps) => (
	<LeftSection {...props} title="Education">
		<SmallHeading>2009</SmallHeading>
		<SmallHeading>Bachelor of Science</SmallHeading>
		<SmallHeading>Computer Science</SmallHeading>
		<SubHeading>California State University, Long Beach</SubHeading>
	</LeftSection>
);

const Job = ({ children }: any) => (
	<Box pt={Space._18px} css={{ ':first-of-type': { pt: '0px' } }}>
		{children}
	</Box>
);

const JobHead = ({ title, from, to, where, city }: any) => (
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

const JobSummary = ({ children }: any) => <Para pt={Space._8px}>{children}</Para>;

const JobBullet = ({ children }: any) => (
	<Flex alignItems="center" pt={Space._8px}>
		<HR w={Space._18px} />
		<Para flex="1" pl={Space._18px}>
			{children}
		</Para>
	</Flex>
);

export const WorkExperience = (props: BoxProps) => (
	<LeftSection {...props} title="Work Experience">
		<Job>
			<JobHead
				city="New York, NY"
				from="May 2017"
				to="January 2021"
				title="Software Engineer"
				where="Squarespace"
			/>
			<JobSummary>
				Design Platform team. I wrote many React and React-Native components that were used throughout
				Squarespace on many different teams.
			</JobSummary>
			<Box>
				<JobBullet>
					Developed Squarespace style guides, compositional patterns, APIs, and high-quality
					documentation using Gatsby.
				</JobBullet>
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
				This is a job summary. This is a job summary. This is a job summary. This is a job summary.
				This is a job summary. This is a job summary. This is a job summary. This is a job summary.
				This is a job summary.
			</JobSummary>
			<Box>
				<JobBullet>
					Collaborated with our backend engineers to create a REST API for our real-estate listing
					project.
				</JobBullet>
				<JobBullet>
					Led a 3-person team using JS/React+Redux to build a CMS frontend. Users could search and
					filter through a variety of real estate properties.
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
				This is a job summary. This is a job summary. This is a job summary. This is a job summary.
				This is a job summary. This is a job summary. This is a job summary. This is a job summary.
				This is a job summary.
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
				title="Entry-level Engineer"
				where="M&M Environmental"
			/>
			<JobSummary>
				This is a job summary. This is a job summary. This is a job summary. This is a job summary.
				This is a job summary. This is a job summary. This is a job summary. This is a job summary.
				This is a job summary.
			</JobSummary>
			<Box>
				<JobBullet>
					Built a cool-looking calendar and scheduling application using PHP/MySQL/JS for managing
					technician availability.
				</JobBullet>
				<JobBullet>
					Built a Vehicle GPS viewer using the Google Maps API for monitoring technician proximity
					to their scheduled appointments.
				</JobBullet>
				<JobBullet>Built a Yelp review scraper and fancy frontend.</JobBullet>
				<JobBullet>
					Built an admin portal using Auth0 Google single-sign-on. Used Wordpress for viewing work
					shift calendars, technician locations, and Yelp reviews.
				</JobBullet>
				<JobBullet>
					Set up CRON tasks that would send aggregated morning emails to our staff about recent Yelp
					reviews and shift calendars.
				</JobBullet>
			</Box>
		</Job>
	</LeftSection>
);
