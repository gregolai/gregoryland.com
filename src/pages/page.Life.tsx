import { Box } from 'pu2/style-lib';
import React from 'react';
import { H2, H3, Li, P, Ul } from '../primitives';
import { Space } from '../theme';

export const PageLife = () => (
	<>
		<H2 pt={Space._7}>What got me into dev?</H2>
		<P>Map editors...Warcraft 3 editor...UT2004 scripting...Starcraft. etc.</P>

		<H2 pt={Space._7}>Why I write code</H2>
		<P>For better or for worse, most people don't think like I do.</P>
		<P>I think like a scientist. Skeptical by nature.</P>
		<P>I try not to be someone I'm not. I try to maintain an honest character.</P>

		<H2 pt={Space._7}>Why I moved to Texas</H2>
		<P>Weather</P>
		<P>Nicer people</P>
		<P>More space</P>

		<H2 pt={Space._7}>Favorite video games</H2>
		<H3>Hollow Knight</H3>
		<H3>Kid Chameleon</H3>
		<H3>Starcraft</H3>
		<H3>The Talos Principle</H3>
		<H3>Thief: The Dark Project</H3>
		<H3>Thief 2: The Metal Age</H3>
		<H3>Undertale</H3>
		<H3>Warcraft 3</H3>

		<H2 pt={Space._7}>My personal roadmap</H2>
		<Ul>
			<Li>Work for an awesome company in Austin</Li>
			<Li>Remember to take breaks throughout the day</Li>
			<Li>Expand my personal utility library</Li>
			<Li>Work on a small project that people find useful</Li>
			<Li>Learn some "big picture" things</Li>
			<Li>Get better at math</Li>
			<Li>Make a boyfriend?</Li>
		</Ul>
	</>
);
