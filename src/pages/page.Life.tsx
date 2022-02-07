import { Box } from 'pu2/style-lib';
import React from 'react';
import { H2, H3, Li, P, Ul } from '../primitives';
import { Space } from '../theme';

const Section = ({ children, title }) => (
	<Box>
		<H2>{title}</H2>
		{children}
	</Box>
);

export const PageLife = () => (
	<>
		<Section title="Some things I've learnt">
			<Ul>
				<Li>
					Despite how tempting it may be to build your own tools, it may be better to use someone
					else's.
				</Li>
				<Li>A well-designed API is almost always better than one written quickly without care.</Li>
				<Li>Accept that you may be wrong about things.</Li>
			</Ul>
		</Section>

		<Section title="From animal, to robot">
			<P>
				I have deep respect for people who build things themselves. There' something about owning your
				creation that's beautuiful. As we move towards a greater level of abstraction we face the
				danger of not remembering who we are. We must not forget ourselves across the vast digital
				ocean! The joy of creation must not be lost!
			</P>
			<P>
				As we abstract up the tree we must recontexualize who we are...just as we do in life as we
				age. It's fractal-like.
			</P>
			<P>
				Our analog human experience is touching hands with our digital creations. It's ok to be weird
				because life is weird. It's the fire that keeps us going. Consciousness, the greatest mystery
				alongside the Big Bang and black holes, is fundamentally paradoxical.
			</P>
			<P>
				Everything boils down to mental models. When the state of your organism matches the state of
				the local environment, you are in flow with the universe
			</P>
		</Section>

		<H2 pt={Space._7}>What got me into dev?</H2>
		<P>Map editors...Warcraft 3 editor...UT2004 scripting...Starcraft. etc.</P>
		<H2 pt={Space._7}>Why I write code</H2>
		<P>For better or for worse, most people don't think like I do.</P>
		<P>I think like a scientist. Skeptical by nature.</P>
		<P>I try not to be someone I'm not. I try to maintain an honest character.</P>
		<H2 pt={Space._7}>Why I moved to Texas</H2>
		<P>Environment is everything</P>
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
