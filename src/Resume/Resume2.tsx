// @ts-nocheck
import React from 'react';
import { Box, useStyle } from 'pu2/style-lib';
import { Flex, Img, P, Text } from '../primitives';
import { FontSize2, LetterSpacing2, Space, Space2 } from './resume-theme';
import { MdOutlineEmail } from 'react-icons/md';
import { MdFace } from 'react-icons/md';
/*
	Copy of:
	https://www.etsy.com/listing/958270979/professional-resume-template-with-photo?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_c-paper_and_party_supplies-paper-stationery-design_and_templates-templates&utm_custom1=_k_Cj0KCQiA9OiPBhCOARIsAI0y71A_daDNEpZVXbnWQHzR_XX6Ys_EnEw5Dg0jWD9rbz_bJdHiTQCEQTgaAi23EALw_wcB_k_&utm_content=go_12573359918_120439649718_507799175895_pla-315907316571_c__958270979_122461060&utm_custom2=12573359918&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71A_daDNEpZVXbnWQHzR_XX6Ys_EnEw5Dg0jWD9rbz_bJdHiTQCEQTgaAi23EALw_wcB
*/

const ResumeP = (props) => <P fontSize="14px" lineHeight="18px" {...props} />;

const NameText = (props) => (
	<Box
		fontSize={FontSize2._39px}
		letterSpacing={LetterSpacing2._6px}
		textTransform="uppercase"
		{...props}
	/>
);

const HR = (props) => <Box bb="2px solid black" mt="-1px" {...props} />;
const HRSmall = (props) => <HR w="40px" />;

const Diamond = (props) => (
	<Box
		position="absolute"
		left="-1px"
		width="8px"
		height="8px"
		bg="black"
		transform="translateX(-50%) rotateZ(45deg)"
		{...props}
	/>
);

const TextHeading = (props) => (
	<Box
		fontSize={FontSize2._18px}
		fontWeight="600"
		letterSpacing={LetterSpacing2._6px}
		textTransform="uppercase"
		{...props}
	/>
);

const LeftSection = ({ title, children }) => (
	<Box>
		<TextHeading pb={Space2._18px}>{title}</TextHeading>
		<HRSmall />
		<Box pt={Space2._18px}>{children}</Box>
	</Box>
);

const RightSection = ({ title, children }) => (
	<Box>
		<Flex position="relative" alignItems="center">
			<Diamond position="absolute" left="-1px" />

			<TextHeading pl={Space2._30px} flex="1">
				{title}
			</TextHeading>
			<HRSmall />
		</Flex>
		<Box pl={Space2._30px} pt={Space2._30px} pb={Space2._30px}>
			{children}
		</Box>
	</Box>
);

const Contact = ({ Icon, label, text }) => {
	// Icon is 2px inset, but we want exact pixels so add -2px margin
	const iconClassName = useStyle({ color: 'white', width: Space2._38px, height: Space2._38px, m: '-2px' });
	return (
		<Flex
			py={Space2._18px}
			alignItems="stretch"
			bb="2px solid white"
			css={{
				':first-of-type': { pt: '0px' },
				':last-of-type': { bb: 'none', pb: '0px' }
			}}
		>
			<Icon className={iconClassName} />

			<Flex flex="1" pl={Space2._18px} flexDirection="column" justifyContent="space-between">
				<Box color="white" fontWeight="600" textTransform="uppercase">
					{label}
				</Box>
				<Box color="white">{text}</Box>
			</Flex>
		</Flex>
	);
};

const ResumeBanner = (props) => (
	<Box position="relative" w="30px" bg="black" {...props}>
		<Text
			position="absolute"
			bottom="0"
			left="50%"
			transform="rotateZ(-90deg) translate(10px, 50%)"
			transformOrigin="bottom left"
			color="white"
			textTransform="uppercase"
		>
			Resume
		</Text>
	</Box>
);

const Job = ({ children }) => <Box>{children}</Box>;

const JobHead = ({ title, from, to, where, city }) => (
	<Box>
		<Text display="block" textTransform="uppercase" fontWeight="600" letterSpacing="1px" pb={Space._4}>
			{title}
		</Text>
		<Text display="block" color="#8A8A8A" fontSize="14px" pb={Space._4}>
			{from} - {to} | {where} | {city}
		</Text>
	</Box>
);
const JobSummary = ({ children }) => (
	<Box>
		<ResumeP>{children}</ResumeP>
	</Box>
);
const JobBullet = ({ children }) => (
	<Flex alignItems="center" pt={Space._4}>
		<HR w="20px" />
		<ResumeP flex="1" pl={Space._6}>
			{children}
		</ResumeP>
	</Flex>
);

const Skill = ({ name, value }) => (
	<Box>
		<Box borderRadius="10px" bg="darkgray" overflow="hidden">
			<Box h="20px" bg="lightgray" w={`${value * 10}%`} />
		</Box>
		<Box textAlign="center">{name}</Box>
	</Box>
);

const PageSplit = ({ left, right, ...rest }) => (
	<Flex {...rest}>
		<Box flex="1" pr={Space2._38px}>
			{left}
		</Box>
		<Box w="260px">{right}</Box>
	</Flex>
);

export const Resume = () => (
	<Box position="relative" bg="#FAFAFA" px={Space2._60px} pb={Space2._60px} lineHeight="1">
		<Box position="absolute" top="0" left="0" w="100%" bg="#DAD8D9" h={Space._7} />
		<PageSplit
			left={
				<Flex alignItems="stretch" pb={Space2._38px}>
					<ResumeBanner />
					<Box flex="1" pl={Space2._30px} pt={Space._7}>
						<NameText color="#6F6F6F" pt={Space2._38px}>
							Gregory
						</NameText>
						<Box position="relative">
							<Diamond position="absolute" left={-1 * parseInt(Space._7, 10) + 'px'} />
						</Box>
						<NameText pt={Space2._10px} fontWeight="600" pb={Space2._18px}>
							Dalton
						</NameText>
						<HRSmall />
						<Box
							pt={Space2._18px}
							color="gray"
							fontSize={FontSize2._18px}
							fontWeight="600"
							letterSpacing={LetterSpacing2._6px}
							textTransform="uppercase"
						>
							Software Engineer
						</Box>
					</Box>
				</Flex>
			}
			right={
				<Box
					pt={Space._7}
					w="100%"
					h="100%"
					bg="url('https://images.unsplash.com/photo-1644123550420-ee28152ab925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2781&q=80')"
					backgroundSize="cover"
					backgroundPosition="50% 50%"
				/>
			}
		/>
		<PageSplit
			left={<LeftSection title="Career Summary">summary</LeftSection>}
			right={
				<Box>
					<Box bg="black" p={Space2._30px}>
						<Contact Icon={MdOutlineEmail} label="Email" text="gregolai@gmail.com" />
						<Contact Icon={MdFace} label="Website" text="gregoryland.com" />
					</Box>
				</Box>
			}
		/>
		<PageSplit
			pt={Space2._30px}
			left={
				<LeftSection title="Work Experience">
					<Job>
						<JobHead
							city="New York, NY"
							from="May 2017"
							to="Jan 2021"
							title="Software Engineer"
							where="Squarespace"
						/>
						<JobSummary>
							Design Platform team. I wrote many React and React-Native components that were
							used throughout Squarespace on many different teams.
						</JobSummary>
						<Box>
							<JobBullet>
								Developed Squarespace style guides, compositional patterns, APIs, and
								high-quality documentation using Gatsby.
							</JobBullet>
							<JobBullet>
								Discovering and reasoning about various long term and short term trade-offs
								when developing components. Simplicity versus flexibility. Readability vs
								performance. Third party code vs in-house code. Etc.
							</JobBullet>
							<JobBullet>
								Unit testing with Jest. Integration testing with Cypress and Puppeteer.
							</JobBullet>
							<JobBullet>
								Collaborated across teams to understand bigger picture scope. This involved
								managing NPM packages, user experience, accessibility, and intuitive design.
							</JobBullet>
							<JobBullet>
								Feature migration and refactoring using code mods and test-driven techniques.
							</JobBullet>
							<JobBullet>
								The importance of a well-designed API, teamwork, and writing good pull
								requests.
							</JobBullet>
							<JobBullet>
								Part of a multi-team effort to integrate our CMS into a mobile browser
								experience for customers.
							</JobBullet>
							<JobBullet>
								Learned to be humble about what I don't know, questioning why we do things a
								certain way and learning from others' experience.
							</JobBullet>
						</Box>
					</Job>
					<Job>
						<JobHead
							city="New York, NY"
							from="Dec 2016"
							to="May 2017"
							title="Frontend Engineer"
							where="Agorafy"
						/>
						<JobSummary>
							This is a job summary. This is a job summary. This is a job summary. This is a job
							summary. This is a job summary. This is a job summary. This is a job summary. This
							is a job summary. This is a job summary.
						</JobSummary>
						<Box>
							<JobBullet>
								Collaborated with our backend engineers to create a REST API for our
								real-estate listing project.
							</JobBullet>
							<JobBullet>
								Led a 3-person team using JS/React+Redux to build a CMS frontend. Users could
								search and filter through a variety of real estate properties.
							</JobBullet>
						</Box>
					</Job>
					<Job>
						<JobHead
							city="New York, NY"
							from="Jan 2015"
							to="Apr 2016"
							title="Full-stack Engineer"
							where="YouVisit"
						/>
						<JobSummary>
							This is a job summary. This is a job summary. This is a job summary. This is a job
							summary. This is a job summary. This is a job summary. This is a job summary. This
							is a job summary. This is a job summary.
						</JobSummary>
						<Box>
							<JobBullet>PHP/MySQL/HTML/CSS/JS/jQuery/Node</JobBullet>

							<JobBullet>
								Wrote a client tool using the JS geolocation API to collect location data and
								hotspots for college campuses. Websockets worked with a Node backend to batch
								database inserts into our SQL database. A client could log into the CMS and
								view users' paths on Google Maps.
							</JobBullet>
							<JobBullet>
								Organized and aggregated large-scale metrics of site visitor data into useful
								formats for our clients to download.
							</JobBullet>
							<JobBullet>
								Hybrid app development and testing for both mobile and desktop. Used a
								custom-built MVC backend with a REST API and minimal unit testing.
							</JobBullet>
							<JobBullet>
								Built a custom A/B testing library and project tracking system in our CMS to
								track the stages of tour production.
							</JobBullet>
							<JobBullet>
								Worked on embedding tours into 3rd party websites using JavaScript with JSONP
								to load iframe settings.
							</JobBullet>
						</Box>
					</Job>
					<Job>
						<JobHead
							city="New York, NY"
							from="Aug 2014"
							to="Dec 2014"
							title="Entry-level Engineer"
							where="M&M Environmental"
						/>
						<JobSummary>
							This is a job summary. This is a job summary. This is a job summary. This is a job
							summary. This is a job summary. This is a job summary. This is a job summary. This
							is a job summary. This is a job summary.
						</JobSummary>
						<Box>
							<JobBullet>
								Built a cool-looking calendar and scheduling application using PHP/MySQL/JS
								for managing technician availability.
							</JobBullet>
							<JobBullet>
								Built a Vehicle GPS viewer using the Google Maps API for monitoring technician
								proximity to their scheduled appointments.
							</JobBullet>
							<JobBullet>Built a Yelp review scraper and fancy frontend.</JobBullet>
							<JobBullet>
								Built an admin portal using Auth0 Google single-sign-on. Used Wordpress for
								viewing work shift calendars, technician locations, and Yelp reviews.
							</JobBullet>
							<JobBullet>
								Set up CRON tasks that would send aggregated morning emails to our staff about
								recent Yelp reviews and shift calendars.
							</JobBullet>
						</Box>
					</Job>
				</LeftSection>
			}
			right={
				<Box bl="2px solid black" h="100%">
					<RightSection title="Education">
						<Box fontSize={FontSize2._14px} fontWeight="600" textTransform="uppercase">
							Bachelor of Science, Computer Science
						</Box>
						<Box fontSize={FontSize2._12px} pt={Space2._10px}>
							2004 - 2009
						</Box>
						<Box fontSize={FontSize2._12px}>California State University, Long Beach</Box>
					</RightSection>
					<RightSection title="Skills">
						<Skill name="Javascript" value={9} />
						<Skill name="React" value={8} />
						<Skill name="C#" value={6} />
					</RightSection>
				</Box>
			}
		/>
	</Box>
);