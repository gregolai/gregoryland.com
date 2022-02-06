import React from 'react';
import { H2, H3, P } from '../primitives';

export const PageProjects = () => (
	<>
		<H2>Just a few of many projects I've worked on in my free time</H2>
		<H3>SNEK</H3>
		<H3>HTML5 Vimeo player</H3>
		<H3>WarGame</H3>
		<H3>JS & ActionScript Starfield</H3>
		<H3>JS Canvas Masking</H3>
		<H3>CmdTool</H3>
		<H3>IcoSphere</H3>
		<H3>Cat Game</H3>
		<P>
			I wrote my own little CSS-in-JS styling lib{' '}
			<a href="https://github.com/gregolai/pu2/tree/master/src/style-lib">here</a>. It supports
			server-side rendering. It's what's rendering this site. I built it because CSS is aweful. It
			really is. Having to repeat the same selectors is only "cascading" in behavior, not as it appears
			to the developer. Third-party CSS-in-JS come with a lot of cruft and buy-in to a specific
			framework. It's not that difficult to write your own, and you learn a lot from it.
		</P>
	</>
);
