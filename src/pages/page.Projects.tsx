import React from 'react';
import { P } from '../primitives';

export const PageProjects = () => (
	<>
		<P>
			I wrote my own little CSS-in-JS styling lib{' '}
			<a href="https://github.com/gregolai/pu2/tree/master/src/style-lib">here</a>. It supports
			server-side rendering. It's what's rendering this site. I built it because CSS is aweful. It
			really is. Having to repeat the same selectors is only "cascading" in behavior, not as it appears
			to the developer. Third-party CSS-in-JS come with a lot of cruft and buy-in to a specific
			framework. It's not that difficult to write your own, and you learn a lot from it.
		</P>
		<P>War Game</P>
		<P>Cmd Tool</P>
		<P>Cat Game</P>
		<P>A plethora of incomplete projects written in a variety of programming languages.</P>
	</>
);
