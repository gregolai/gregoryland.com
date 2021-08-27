import React, { Fragment, useState } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Flex, Box, Text, Button } from '../../core/primitives';
import { space } from '../../core/tokens';

const PlayInline = ({ height, src, title }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<Box>
			{isOpen && <Button onClick={() => setOpen(false)}>Close</Button>}
			<Flex alignItems="center" backgroundColor="rgba(0,0,0,0.2)" justifyContent="center">
				{!isOpen && (
					<Button
						onClick={() => setOpen(true)}
						backgroundColor="rgba(255,255,255,0.4)"
						my={space._7}
						px={space._4}
						py={space._3}
						css={{
							':hover': {
								backgroundColor: 'rgba(255,255,255,0.6)'
							}
						}}
					>
						{title}
					</Button>
				)}
				{isOpen && (
					<iframe
						// @ts-ignore
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
						style={{ width: '100%', height }}
						src={src}
					/>
				)}
			</Flex>
		</Box>
	);
};

export const ProjectsScreen = () => {
	return (
		<>
			{[
				{
					name: 'SNEK',
					dates: 'May 2017',
					download: {
						title: 'Source Code',
						url: 'snek/snek.zip'
					},
					images: [
						{
							title: 'SNEK',
							url: 'projects/snek1.png'
						}
					],
					items: [
						`A little project I made a coding exercise for my application at Squarespace, prior to them changing the assignment.
It was written entirely in HTML/CSS/JS with no external libraries and I had about 3 hours to complete it. I'm proud
that I was able to whip this up in that timeframe, as I've had experience with game development and using the HTML
canvas element.`
					],
					playInline: {
						title: 'Play SNEK',
						src: `https://gregoryland.com/projects/snek/`,
						height: '800px'
					}
				},
				{
					name: 'HTML5 Video Player Coding Exercise',
					dates: 'September 2016',
					download: {
						title: 'Source Code',
						url: 'vimeo-player/vimeo-player-src.zip'
					},
					images: [
						{
							title: 'A slick UI',
							url: 'projects/html5-player1.png'
						},
						{
							title: 'Fullscreen with playhead and buffer',
							url: 'projects/html5-player2.png'
						}
					],
					items: [
						`I applied as a software developer for Vimeo in 2016. I was tasked with creating a custom video player as part of
the application process. Ultimately, they didn't end up hiring me, but I'm nonetheless grateful for the opportunity. This project doesn't use any external libraries and features
playhead scrubbing (dragging the playhead), video buffering, fullscreen capabilities, and switching to the previous and next video. I designed the interface. It's not mobile-friendly, but it could be with a few tweaks.`
					],
					playInline: {
						title: 'Play Vimeo Coding Project',
						src: 'https://gregoryland.com/projects/vimeo-player/public/',
						height: '800px'
					}
				},
				{
					name: 'StarField (JavaScript)',
					dates: 'April 2016',
					download: {
						title: 'Source Code',
						url: 'starfield-js/starfield-js.zip'
					},
					images: [
						{
							title: 'Pretty colors',
							url: 'projects/starfield-js-1.png'
						}
					],
					items: [
						`The classic Windows StarField screensaver in javascript. I ported it from a 2012 ActionScript project I
wrote (FYI ActionScript runs much faster). Instead of creating/destroying Star instances, it recycles the
dead stars into new ones using a Star pool.`
					],
					playInline: {
						title: 'Play Starfield',
						src: 'https://gregoryland.com/projects/starfield-js/',
						height: '700px'
					}
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
							title: 'Yes, me-lord! Five units are selected, but three peasants are in the active group.',
							url: 'projects/war1.png'
						},
						{
							title: 'Units moving, Debug mode - Quad tree, grid coords, unit IDs',
							url: 'projects/war2.png'
						}
					],
					items: [
						`I have a huge nostalgia for Warcraft 2 and 3, so I had an ambition of bringing it to the web. It ended up as mostly
a learning exercise of scope creep, asset management, logic flow, as well as using websockets to integrate a working
(but ridiculously laggy) peer-to-peer lock-step synchronized multiplayer experience, with much inspiration from
[this article](https://www.gamasutra.com/view/feature/131503/1500_archers_on_a_288_network_.php). WebRTC was new
and would have been much better to keep the game in-sync, but it was complicated and over-my-head at the time. This
game I wrote is very incomplete and has several of bugs...you are warned! :P
`
					],
					playInline: {
						title: 'Play War Game',
						src: 'https://gregoryland.com/projects/warnew/',
						height: '90vh'
					}
				},
				{
					name: 'Masking Demo',
					dates: 'December 2012',
					note: '2D or WebGL? Why not both!',
					download: {
						title: 'Source Code',
						url: 'masking/masking.zip'
					},
					images: [
						{
							title: 'Two 2D inputs; One WebGL output',
							url: 'projects/masking.png'
						}
					],
					items: [
						`I used a few HTML canvas elements and a shader to demonstrate masking using WebGL. The first is the unlit layer,
the second is the shadow mask, and the third is a composite by multiplying each.`
					],
					playInline: {
						title: 'Play Masking Demo',
						src: 'https://gregoryland.com/projects/masking/',
						height: '660px'
					}
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
							title: 'Command listing (fake ads)',
							url: 'projects/cmdtool1.png'
						},
						{
							title: 'Editor',
							url: 'projects/cmdtool2.png'
						},
						{
							title: 'Command page',
							url: 'projects/cmdtool3.png'
						},
						{
							title: "Multiple command windows. Cool! (After 9 years that's still my windows background)",
							url: 'projects/cmdtool4.png'
						},
						{
							title: 'Version selector',
							url: 'projects/cmdtool5.png'
						},
						{
							title: 'Version comparison',
							url: 'projects/cmdtool6.png'
						}
					],
					items: [
						`Have you ever been confused how to use the command-line? Well, as a sweet Windows summer child,
						I sure was. My friend [Greg Miller](http://gmiller.net) suggested, "Let's create an interface
						for all these weird command line doodads!", so we got to work on creating a graphical interface
						for common Windows/Mac/Unix
						command-line commands. It was pretty cool. You could open multiple windows for various commands
						and see full descriptions of what parameters would do. Most commands had "-h" or "--help" as
						an argument, but assaulted you with thousands of lines of nerdy jargon. This was unacceptable!
						I wanted inputs, radios, and checkboxes to give me that command I was looking for.
						The site would evolve like wikipedia, with users creating and editing versions of commands and
						parameters. It even had a versioning system
						and was quite an ambitious full-stack web project. It *may* even still be up and running...it's
						worth checking out if you're a computer nerd like me.`
					]
				},
				{
					name: 'StarField (ActionScript)',
					dates: 'February 2012',
					// play: {
					// 	title: 'Run (.swf file is safe)',
					// 	url: 'starfield-as/bin-debug/Starfield.swf'
					// },
					download: {
						title: 'Source Code (FlashBuilder ActionScript)',
						url: 'starfield-as/starfield-as.zip'
					},
					images: [
						{
							title: 'Star Field',
							url: 'projects/starfield-as-1.png'
						}
					],
					items: [
						`The classic Windows StarField screensaver in ActionScript. Unfortunately, this won't run in the browser.
						I ported it to JavaScript later on (see above).
						It recycles dead stars into new ones using a pooling scheme. Another interesting thing is that
						you can have it spawn enough stars to match a target frames-per-second (FPS). It will constantly
						monitor this and throttle accordingly. The true pinnacle of AI! Here are the controls:

* E/R: Decrease / Increase target FPS
* D/F: Decrease / Increase acceleration
* C/V: Decrease / Increase star growth time
* X: Toggle GUI`
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
							url: 'projects/ico-lod0-1.png'
						},
						{
							title: 'Highest level-of-detail',
							url: 'projects/ico-lod5-1.png'
						}
					],
					items: [
						`My ambitions far outweighed my talents. A real-time strategy game across planets in space sounds awesome, right?
"Sounds simple enough to build"...haha. Well, I tried, and I learned how to subdivide an
[icosahedron](https://upload.wikimedia.org/wikipedia/commons/9/9c/Icosahedron-golden-rectangles.svg) for
level-of-detail (LOD) indices that I'd pass to OpenGL for rendering. The LOD would increase as the camera got closer
and decrease as it got further away. At that point, I realized texture-mapping and pathfinding would be a bitch, so
I became discouraged and quit. Later on, I came back and made a Java applet version with texture-mapping and terrain
height editing, but I can't find the project :( A better solution for this, instead of using an icosphere, is to
simply extrude a cube and live with the imperfect edge-sizes, because at least texture-mapping and pathfinding would
be much easier. I really had fun with the math on this project, though.

* A/Z: Increase / Decrease Level-of-Detail (LOD)
`
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
							title: 'Cat, Shrubbery, House',
							url: 'projects/catgame1.png'
						},
						{
							title: 'Cat or minecraft?',
							url: 'projects/catgame2.png'
						}
					],
					items: [
						`A third-person simulation of being a kleptomaniac cat in a suburban neighborhood. I combined my C++/OpenGL programming
talents with the design talents of my friend, [Greg Miller](http://gmiller.net), to create a game within a 3-day weekend.
The idea was inspired by a [news story about Dusty the Kleptomaniac Kitty](https://www.youtube.com/watch?v=fDX7tevXO1E),
a burglar cat in San Mateo, California. Our game idea revolved around solving quests on a day-night cycle by stealing
items around the neighborhood. Scope creep and clashing ideas ended this project, but it was fun while it lasted. I also
got to explore the [Drawbridge ghost town](http://www.gmiller.net/2013/08/drawbridge-ghost-town/) with Greg, which was
super exciting.
`
					]
				}
			].map((proj, i) => (
				<Box key={i} px={space._7}>
					<Flex alignItems="center">
						<Text.Title>{proj.name}</Text.Title>
						{proj.play && (
							<Text.Caption
								ml={space._7}
								as="a"
								href={`https://gregoryland.com/projects/${proj.play.url}`}
							>
								{proj.play.title}
							</Text.Caption>
						)}
						{proj.download && (
							<Text.Caption
								ml={space._7}
								as="a"
								href={`https://gregoryland.com/projects/${proj.download.url}`}
							>
								{proj.download.title}
							</Text.Caption>
						)}
					</Flex>
					{proj.images && (
						<Flex alignItems="stretch">
							{proj.images.map(({ title, url }, i) => (
								<Flex
									key={i}
									alignItems="center"
									flexDirection="column"
									justifyContent="space-between"
									maxWidth="300px"
									p={space._4}
								>
									<Text.Label>{title}</Text.Label>
									<a href={`//static.gregoryland.com/${url}`} style={{ display: 'block' }}>
										<img
											src={`//static.gregoryland.com/${url}?w=128`}
											style={{ display: 'block', height: '120px' }}
										/>
									</a>
								</Flex>
							))}
						</Flex>
					)}
					<Box pb={space._6}>
						{proj.items.map((item, i2) => (
							<Box key={i2} pl={space._6} pt={space._1}>
								{compiler(item, {
									overrides: {
										p: {
											component: Text.BodyBook
										}
									}
								})}
							</Box>
						))}
					</Box>
					{proj.playInline && <PlayInline {...proj.playInline} />}
				</Box>
			))}
		</>
	);
};
