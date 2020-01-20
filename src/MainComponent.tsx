import { h, Fragment } from 'preact';
const cat = (stringArr: string[]) => stringArr.join(' ');

const css = require('./MainComponent.scss');

// https://freebiesbug.com/psd-freebies/rounded-download-button-psd/
const Button = ({}) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '50%',
			boxShadow: '0px 0px 5px 1px inset rgba(0,0,0,0.1)',
			backgroundColor: 'rgb(204,209,215)',
			width: 80,
			height: 80
		}}
	>
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
				boxShadow: '0 0 4px 0px rgba(0,0,0,0.2)',
				backgroundImage: 'linear-gradient(0deg, rgb(155,158,167), rgb(242,248,246))',
				width: 66,
				height: 66
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '50%',
					width: 48,
					height: 48,
					backgroundImage: 'linear-gradient(0deg, rgb(231,234,239) 50%, rgb(207,209,214) 100%)'
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '50%',
						boxShadow: '0px 0px 8px 0px inset rgba(0,0,0,0.05)',
						backgroundImage: 'linear-gradient(0deg, rgb(210,213,220), rgb(207,209,214))',
						width: 46,
						height: 46
					}}
				>
					<div
						style={{
							width: 20,
							height: 20,
							borderRadius: '50%',
							boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.5)',
							backgroundColor: 'white'
						}}
					></div>
				</div>
			</div>
		</div>
	</div>
);

const Button2 = () => (
	<div
		style={{
			backgroundColor: ''
		}}
	>
		hello world
	</div>
);

const Skill = ({ lang, desc }) => (
	<div className={css.skill}>
		<span className={css.skillLang}>{lang}</span>
		<span className={css.skillLangDesc}>{desc}</span>
	</div>
);

const ResumeSection = ({ children }) => <section className={css.resumeSection}>{children}</section>;

ResumeSection.Title = ({ children }) => <h3 className={css.resumeSectionTitle}>{children}</h3>;

const Job = ({ where, role = null, dates, items }) => (
	<div>
		<div className={css.jobHeader}>
			<span className={css.jobHeaderWhere}>{where}</span>
			{role && <span className={css.jobHeaderRole}>{role}</span>}
		</div>
		<span className={css.jobDates}>{dates}</span>
		<ul>
			{items.map((item, i2) => (
				<li key={i2}>{item}</li>
			))}
		</ul>
	</div>
);

export default () => (
	<Fragment>
		<header className={css.header}>
			<div className={css.headerLeft}>
				<img className={css.headerPic} src="static/img/gregory.jpg" />

				{/* <div className="links">
                                    <a id="pf-header-resume-download" href="resume/Gregory Dalton - Resume.pdf">Resumé</a>
                                    <a id="pf-header-resume-linkedin" href="https://www.linkedin.com/in/gregolai/">LinkedIn</a>
                                </div> */}
			</div>

			<div className={css.headerRight}>
				<p className={css.headerName}>Gregory Dalton</p>
				<p className={css.headerRole}>Software Engineer</p>
				{/* <p className="email">gregolai@gmail.com</p> */}
			</div>

			{/* <img id="pf-header-accessory-img" src="static/img/Sprite-0001.png" /> */}
		</header>

		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				padding: '128px 0',

				background: 'linear-gradient(180deg, #BFBEB6 0%, #BFBEB6 20%, #D1D0CC 20%, #D1D0CC 100%)'
			}}
		>
			{/* <Button />
			<Button2 /> */}

			{/* WRAPPER AROUND RESUME AREA */}
			<div style={{ position: 'relative', width: '80%', maxWidth: 1100 }}>
				<button style={{ position: 'absolute', bottom: '100%', right: 0, marginBottom: 16 }}>
					PRINT
				</button>
				<div
					style={{
						background: '#F4F2F0',

						padding: 32,
						boxShadow: '4px 4px 2px rgba(0,0,0,0.3)'
					}}
				>
					{/* HEADER */}
					<div
						style={{
							display: 'flex',
							paddingBottom: 16,
							marginBottom: 16,
							borderBottom: '1px solid #BFBEB6'
						}}
					>
						<div style={{ flex: 1 }}>
							<h1>GREGORY DALTON</h1>
							<h3>SOFTWARE ENGINEER</h3>
						</div>
						<div>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<img src="static/img/envelope.svg" style={{ height: 24, width: 24 }} />
								<div style={{ paddingLeft: 16 }}>(714) 651-2126</div>
							</div>

							<div style={{ display: 'flex', alignItems: 'center', paddingTop: 8 }}>
								<img
									src="static/img/phone-smartphone-apple-iphone-device-mobile-icon.svg"
									style={{ height: 24, width: 24 }}
								/>
								<div style={{ paddingLeft: 16 }}>gregolai@gmail.com</div>
							</div>
						</div>
					</div>
					<div style={{ display: 'flex' }}>
						{/* EDUCATION + SKILLS */}
						<div
							style={{
								width: 184,
								paddingRight: 16,
								marginRight: 16,
								borderRight: '1px solid #BFBEB6'
							}}
						>
							<div style={{ paddingBottom: 32 }}>
								<h3>EDUCATION</h3>
								<div style={{ paddingTop: 16 }}>
									<p>California State University, Long Beach</p>
									<p>August 2004 - May 2009</p>
								</div>
							</div>
							<div>
								<h3>SKILLS</h3>
								<div style={{ paddingTop: 16 }}>
									<p>Skill 1</p>
									<p>Skill 2</p>
									<p>Skill 3</p>
								</div>
							</div>
						</div>

						{/* MAIN BODY */}
						<div style={{ flex: 1 }}>
							<div style={{ paddingBottom: 32 }}>
								<h3>PROFILE</h3>
								<div style={{ paddingTop: 16 }}>
									Lorem idiv style={{ paddingTop: 16 }}sum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
									magna aliqua. Faucibus nisl tincidunt eget nullam. Elit ullamcorper
									dignissim cras tincidunt lobortis feugiat vivamus. Vitae ultricies leo
									integer malesuada nunc vel. Ut tortor pretium viverra suspendisse potenti
									nullam ac tortor vitae. Faucibus scelerisque eleifend donec pretium
									vulputate sapien nec. Elementum sagittis vitae et leo duis ut diam quam.
								</div>
							</div>
							<div>
								<h3>EXPERIENCE</h3>
								<div style={{ paddingTop: 16 }}>
									Donec pretium vulputate sapien nec sagittis. Nec sagittis aliquam
									malesuada bibendum arcu vitae elementum curabitur. Sollicitudin tempor id
									eu nisl nunc mi ipsum faucibus. Praesent elementum facilisis leo vel
									fringilla. Eget gravida cum sociis natoque penatibus. Lacus sed viverra
									tellus in hac habitasse platea dictumst. Augue ut lectus arcu bibendum at
									varius vel pharetra. Nulla posuere sollicitudin aliquam ultrices sagittis
									orci a scelerisque purus. Egestas tellus rutrum tellus pellentesque eu
									tincidunt. Augue eget arcu dictum varius duis at consectetur. Dolor purus
									non enim praesent elementum facilisis leo vel. Sit amet mattis vulputate
									enim nulla aliquet porttitor lacus. Turpis egestas maecenas pharetra
									convallis posuere morbi leo urna. Mattis molestie a iaculis at. Pharetra
									et ultrices neque ornare aenean euismod elementum nisi. Quis commodo odio
									aenean sed adipiscing diam. Eu mi bibendum neque egestas. Ridiculus mus
									mauris vitae ultricies leo integer malesuada nunc vel. Facilisis gravida
									neque convallis a cras semper auctor neque. Sit amet nisl suscipit
									adipiscing bibendum est ultricies. Mattis vulputate enim nulla aliquet
									porttitor. Ut tellus elementum sagittis vitae. Nulla malesuada
									pellentesque elit eget gravida cum. Et tortor at risus viverra. Quam
									quisque id diam vel quam elementum. Dapibus ultrices in iaculis nunc sed
									augue lacus viverra vitae. Tellus molestie nunc non blandit massa enim
									nec. Lacus vestibulum sed arcu non. Urna nec tincidunt praesent semper
									feugiat nibh. Condimentum id venenatis a condimentum vitae sapien. Egestas
									egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
									Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.
									Nunc sed blandit libero volutpat sed cras ornare arcu dui. Amet aliquam id
									diam maecenas ultricies. Rhoncus aenean vel elit scelerisque mauris
									pellentesque pulvinar pellentesque. Eget velit aliquet sagittis id
									consectetur. Risus nullam eget felis eget nunc. Sit amet tellus cras
									adipiscing enim eu. Pellentesque elit ullamcorper dignissim cras tincidunt
									lobortis feugiat vivamus. Nec dui nunc mattis enim ut tellus elementum. Et
									malesuada fames ac turpis. Erat velit scelerisque in dictum non
									consectetur. Feugiat in ante metus dictum at tempor commodo ullamcorper.
									Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in.
									Nulla at volutpat diam ut venenatis tellus. Eu lobortis elementum nibh
									tellus molestie nunc. Amet mauris commodo quis imperdiet massa tincidunt
									nunc pulvinar. Morbi leo urna molestie at elementum eu facilisis sed odio.
									Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ac odio
									tempor orci dapibus ultrices. Quam nulla porttitor massa id neque aliquam
									vestibulum morbi blandit. Arcu non odio euismod lacinia at quis risus.
									Elementum tempus egestas sed sed risus pretium quam vulputate. A erat nam
									at lectus urna duis convallis. Pharetra pharetra massa massa ultricies mi
									quis hendrerit dolor magna. Purus in massa tempor nec. Elit ut aliquam
									purus sit amet luctus. Molestie at elementum eu facilisis sed odio morbi
									quis. Egestas erat imperdiet sed euismod nisi. Ac tincidunt vitae semper
									quis lectus. Adipiscing enim eu turpis egestas pretium aenean pharetra
									magna. Vel orci porta non pulvinar. Id aliquet risus feugiat in ante.
									Lobortis scelerisque fermentum dui faucibus. Vestibulum lorem sed risus
									ultricies tristique nulla. At risus viverra adipiscing at in tellus
									integer. Enim eu turpis egestas pretium. Nunc eget lorem dolor sed viverra
									ipsum nunc aliquet. Pellentesque habitant morbi tristique senectus et
									netus. Neque aliquam vestibulum morbi blandit. Sed felis eget velit
									aliquet sagittis. Neque convallis a cras semper auctor neque vitae tempus.
									Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<main role="main">
			<div className={css.resume}>
				<ResumeSection>
					<ResumeSection.Title>About Me</ResumeSection.Title>
					<div>
						<div>Improving my skills and learning new things daily</div>
					</div>
				</ResumeSection>

				<ResumeSection>
					<ResumeSection.Title>Skills</ResumeSection.Title>
					<div>
						<Skill lang="JavaScript" desc="The language I write every day." />
						<Skill lang="TypeScript" desc="Using since 2012." />
						<Skill lang="C#" desc="A Pick up new things here and there, as a hobby." />
						<Skill lang="C++" desc="First programming language." />
					</div>
				</ResumeSection>

				<ResumeSection>
					<ResumeSection.Title>Career</ResumeSection.Title>
					<div>
						{[
							{
								where: 'Squarespace',
								dates: 'May 2017 - Present',
								role: 'Software Engineer',
								url: 'https://www.squarespace.com',
								items: [
									cat([
										"I'm a software developer on Squarespace's Design Platform team.",
										'I work with designers on a daily basis to implement UI specs for React components that are used across teams.',
										'Much of this work has enlightened me to the challenges of building a shared component library versus building a front-facing application.',
										'Having a consistent and thought-out API is crucial for any shared library.',
										'Unlike refactoring a front-facing application, refactoring a library without introducing breaking changes is often non-trivial if the consumer API requires a change.',
										'On top of that, there are trade-offs with how much flexibility to expose to the consumer versus the likelihood of breaking changes.'
									]),
									'The designs are implemented across desktop, mobile-web, iOS, and Android platforms. Our components make heavy use of React and React-Native.',
									'We use Jest, Enzyme, Puppeteer, and Cypress for unit and integration testing.'
								]
							},
							{
								where: 'Agorafy',
								dates: 'December 2016 - May 2017',
								role: 'Front-End Web Developer',
								url: 'https://www.agorafy.com',
								items: [
									cat([
										'I worked as a frontend engineer to build a CMS for creating and editing real estate listings.',
										'I collaborated daily with backend engineers to ensure the REST API endpoints we hit were consistent had correct.',
										'Got my hands dirty with new technologies at the time - React and Redux.'
									]),
									'Collaborated with designers to implement UI/UX mockups.',
									'Daily standups helped frontend, backend, and management stay in-sync'
								]
							},
							{
								where: 'YouVisit',
								dates: 'January 2015 - April 2016',
								role: 'Full-Stack Web Developer',
								url: 'https://www.youvisit.com',
								items: [
									'Hybrid app development and testing for both mobile and desktop systems using JavaScript, PHP, MySQL, and Node. Used an MVC back-end with a RESTful API and some unit testing.',
									'Developed a project tracking system in our CMS to track the stages of tour production.',
									'Implemented mobile geolocation tracking, batching requests from Node to our database, and using Google Maps API to view campus paths and hotspots.',
									'Organized large-scale analytics of site visitor data into useful for our clients to download.',
									'Worked on embedding tours into 3rd party websites using JavaScript with JSONP to load iframe settings.',
									'Coordinated with design, sales, and marketing to implement A/B testing with a massive redesign and refactor for our visitor registration form, using jQuery, AJAX, PHP, and MySQL.',
									'Daily standups, Jira, and git workflow for tasks, code reviews, QA, staging, and release.'
								]
							},
							{
								where: 'M & M Environmental',
								dates: 'August 2014 - December 2014',
								role: 'Junior Web Developer',
								items: [
									'Built a calendar and scheduling application using PHP, MySQL/MSSQL, and JavaScript for managing technician availability.',
									'Implemented a Vehicle GPS viewer using Google Maps API with JavaScript for monitoring technician proximity to their scheduled appointments.',
									'Created a Yelp review scraper that would email our recent Yelp reviews to our staff.',
									'Built an admin portal using JavaScript/Auth0 single-sign-on through Google. Used Wordpress for viewing work shift calendars, technician locations, and Yelp reviews.'
								]
							}
						].map((job, i) => (
							<Job key={i} {...job} />
						))}
					</div>
				</ResumeSection>

				<ResumeSection>
					<ResumeSection.Title>Education</ResumeSection.Title>
					<div>
						{[
							{
								where: 'California State University, Long Beach',
								dates: 'August 2004 - May 2009',
								items: [
									'<b><i>Bachelor of Science in Computer Science</i></b>',
									'Joined the Programming Team and competed in two regional competitions',
									'Member of Tau Beta Pi Engineering Honor Society, Theta Chapter',
									'Transferred from San Jose State University (2004 - 2006)'
								]
							}
						].map((edu, i) => (
							<Job key={i} {...edu} />
						))}
					</div>
				</ResumeSection>
			</div>

			{/* PROJECTS */}
			<div>
				{[
					{
						name: 'SNEK',
						dates: 'May 2017',
						play: {
							title: 'Play',
							url: 'snek/'
						},
						download: {
							title: 'Source Code',
							url: 'snek/snek.zip'
						},
						images: [
							{
								title: 'SNEK',
								url: 'img/snek1.png',
								thumb: 'img/thumbs/snek1.jpg'
							}
						],
						items: ['100% Vanilla HTML/JS/CSS']
					},
					{
						name: 'HTML5 Video Player Coding Exercise',
						dates: 'September 2016',
						play: {
							title: 'Run',
							url: 'vimeo-player/'
						},
						download: {
							title: 'Source Code',
							url: 'vimeo-player/vimeo-player-src.zip'
						},
						images: [
							{
								title: 'User Interface',
								url: 'img/html5-player1.png',
								thumb: 'img/thumbs/html5-player1.jpg'
							},
							{
								title: 'Fullscreen',
								url: 'img/html5-player2.png',
								thumb: 'img/thumbs/html5-player2.jpg'
							}
						],
						items: [
							'A coding exercise I worked on for Vimeo to demonstrate how an HTML5 video player could be designed and developed.',
							'Self-designed interface with playhead scrubbing, video buffer, fullscreen capabilities, and switching to next/previous video.',
							'Uses vanilla javascript with no 3rd party libraries.',
							'Not mobile-friendly at the moment, but I could fix that by rendering the video to a canvas and creating a custom UI.'
						]
					},
					{
						name: 'StarField (JavaScript)',
						dates: 'April 2016',
						play: {
							title: 'Run',
							url: 'starfield-js/'
						},
						download: {
							title: 'Source Code',
							url: 'starfield-js/starfield-js.zip'
						},
						images: [
							{
								title: 'Pretty colors',
								url: 'img/starfield-js-1.png',
								thumb: 'img/thumbs/starfield-js-1.jpg'
							}
						],
						items: [
							'I wanted to port the Star Field project from ActionScript over to JavaScript canvas, so I did.',
							'If using Chrome, the sliders will sometimes cause the page to freeze. Use Firefox if you encounter this issue.'
						]
					},
					{
						name: 'War Game',
						dates: 'April 2012 - 2014',
						note: 'A browser-based RTS',
						play: {
							title: 'Play',
							url: 'warnew/'
						},
						images: [
							{
								title:
									'Similar to "Warcraft 3" - five units are selected, but 3 peasants are grouped as active (as shown by the yellow icon border)',
								url: 'img/war1.png',
								thumb: 'img/thumbs/war1.jpg'
							},
							{
								title: 'Units moving, Debug mode - Quad tree, grid coords, unit IDs',
								url: 'img/war2.png',
								thumb: 'img/thumbs/war2.jpg'
							}
						],
						items: [
							'An attempt at an HTML5 web port of Warcraft 2',
							'Contains multiplayer support using websockets, web workers, and the lock-step algorithm for keeping players in-sync.',
							'I have refactored the codebase for awhile and decided to put this project on hold.'
						]
					},
					{
						name: 'Masking Demo',
						dates: 'December 2012',
						note: '2D or WebGL? Why not both!',
						play: {
							title: 'Run',
							url: 'masking/'
						},
						download: {
							title: 'Source Code',
							url: 'masking/masking.zip'
						},
						images: [
							{
								title: 'Two 2D inputs; One WebGL output',
								url: 'img/masking.png',
								thumb: 'img/thumbs/masking.jpg'
							}
						],
						items: [
							'Demonstrates using two 2D canvas elements and a shader to do masking using WebGL.',
							'This could be used for fast 2D shadows or for other interesting purposes.'
						]
					},
					{
						name: 'CmdTool',
						dates: 'March 2012 - July 2012',
						note: 'A GUI helper for the command-line',
						play: {
							title: 'View',
							url: 'cmdtool/'
						},
						images: [
							{
								title: 'Command listing',
								url: 'img/cmdtool1.png',
								thumb: 'img/thumbs/cmdtool1.jpg'
							},
							{
								title: 'Editor',
								url: 'img/cmdtool2.png',
								thumb: 'img/thumbs/cmdtool2.jpg'
							},
							{
								title: 'Command page',
								url: 'img/cmdtool3.png',
								thumb: 'img/thumbs/cmdtool3.jpg'
							},
							{
								title: 'You can pop it out for multiple instances!',
								url: 'img/cmdtool4.png',
								thumb: 'img/thumbs/cmdtool4.jpg'
							},
							{
								title: 'Editor command version selector',
								url: 'img/cmdtool5.png',
								thumb: 'img/thumbs/cmdtool5.jpg'
							},
							{
								title: 'Select desired version on command page',
								url: 'img/cmdtool6.png',
								thumb: 'img/thumbs/cmdtool6.jpg'
							}
						],
						items: [
							'An idea my friend and I had for creating a GUI for UNIX/Windows-based command-line parameters.',
							'It would function like wikipedia, where users would visually create and edit the GUIs to generate command-line parameters.',
							'The tool was quite ambitious for a web project, but fun to work on.',
							'We got relatively far in our progress and created a basic versioning system for the edited GUIs.'
						]
					},
					{
						name: 'StarField (ActionScript)',
						dates: 'February 2012',
						play: {
							title: 'Run',
							url: 'starfield-as/bin-debug/Starfield.swf'
						},
						download: {
							title: 'Source Code (FlashBuilder ActionScript)',
							url: 'starfield-as/starfield-as.zip'
						},
						images: [
							{
								title: 'Star Field',
								url: 'img/starfield-as-1.png',
								thumb: 'img/thumbs/starfield-as-1.jpg'
							}
						],
						items: [
							'A project I wrote in ActionScript that mimics the old Windows starfield screensaver.',
							'It continues to create stars until the FPS reaches the target FPS and efficiently buffers them for reuse.',
							'If the target FPS is greater than the real FPS, the application will start removing stars until an equilibrium is formed.',
							'Decrease / Increase target FPS: E / R',
							'Decrease / Increase acceleration: D / F',
							'Decrease / Increase star growth time: C / V',
							'Toggle GUI: X'
						]
					},
					{
						name: 'IcoSphere',
						dates: 'March 2010',
						note: 'Planet level-of-detail (LOD)',
						download: {
							title: 'Source Code (C++)',
							url: 'icosphere/Icosphere.zip'
						},
						images: [
							{
								title: 'Lowest level-of-detail',
								url: 'img/ico-lod0-1.png',
								thumb: 'img/thumbs/ico-lod0-1.jpg'
							},
							{
								title: 'Highest level-of-detail',
								url: 'img/ico-lod5-1.png',
								thumb: 'img/thumbs/ico-lod5-1.jpg'
							}
						],
						items: [
							'I wanted to make a 3D planet-to-planet RTS game, so I tested the use of a sub-divided <a href="https://upload.wikimedia.org/wikipedia/commons/9/9c/Icosahedron-golden-rectangles.svg">icosahedron</a> for the planets.',
							'I could decrease the level-of-detail as planets got further and increase it as planets got nearer.',
							'This worked out alright, until I realized that texture-mapping and pathfinding would be incredibly difficult.',
							'I think extruding a cube would have been a better choice for a coordinate system and I realized the scope of the project was ridiculous. I had fun with the math, though.',
							'A / Z - Increase / Decrease Level-of-Detail (LOD).'
						]
					},
					{
						name: 'Klepto Kitty',
						dates: 'February 2010',
						note: 'A C++/OpenGL game I started with my friend.',
						download: {
							title: 'Source Code (C++)',
							url: 'catgame/CatGame.zip'
						},
						images: [
							{
								title: 'Screenshot #1',
								url: 'img/catgame1.png',
								thumb: 'img/thumbs/catgame1.jpg'
							},
							{
								title: 'Screenshot #2',
								url: 'img/catgame2.png',
								thumb: 'img/thumbs/catgame2.jpg'
							}
						],
						items: [
							'I worked on this game with my friend, <a href="http://gmiller.net">Greg Miller</a>, in an attempt to combine our talents (programming and design).',
							'I wanted to write a game completely in C++/OpenGL without using any 3rd party libraries and we gave ourselves a 3-day weekend to do it.',
							'Our game was inspired by a news story about <a href="https://www.youtube.com/watch?v=xhRW4WmfrDA">Dusty the Kleptomaniac Kitty</a>, a burglar cat in San Mateo, California.',
							'The ideas is that you play as a cat that walks around the neighborhood solving quests and <strike>stealing</strike> collecting stuff from people.'
						]
					}
				].map((proj, i) => (
					<div key={i}>{proj.name}</div>
				))}
			</div>
		</main>
	</Fragment>
);
