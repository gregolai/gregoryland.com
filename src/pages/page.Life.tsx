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

const videoGames = [
	'Factorio',
	'Hollow Knight',
	'Kid Chameleon',
	'Starcraft',
	'Super Meat Boy',
	'The Talos Principle',
	'Thief: The Dark Project',
	'Thief 2: The Metal Age',
	'Undertale',
	'Warcraft 3'
];

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
				<Li>
					Something I do while designing my website is to open a second tab in Chrome and play with
					the CSS to my heart's content in devtools. When I get it looking right, I make adjustments
					to the code while refreshing the first tab until it looks right. It's a winning strategy.
				</Li>
			</Ul>
		</Section>

		<Section title="From animal, to robot">
			<P>
				I have deep respect for people who build things themselves. There's something about owning
				your creation that's beautiful. As we move towards a greater level of abstraction we face the
				danger of not remembering who we are. We must not forget ourselves across the vast digital
				ocean. The joy of creation must not be lost!
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

		<Section title="Favorite video games">
			<Ul>
				{videoGames.map((v) => (
					<Li key={v}>{v}</Li>
				))}
			</Ul>
		</Section>

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
