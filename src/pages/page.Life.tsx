import { Box } from 'pu2/style-lib';
import React from 'react';
import { H3, Li, Para, Ul } from '../primitives2';
import { Space } from '../theme';

const Section = ({ children, title }) => (
	<Box>
		<H3>{title}</H3>
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
	<Box p={Space._6}>
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
			<Para>
				I have deep respect for people who build things themselves. There's something about owning
				your creation that's beautiful. As we move towards a greater level of abstraction we face the
				danger of not remembering who we are. We must not forget ourselves across the vast digital
				ocean. The joy of creation must not be lost!
			</Para>
			<Para>
				As we abstract up the tree we must recontexualize who we are...just as we do in life as we
				age. It's fractal-like.
			</Para>
			<Para>
				Our analog human experience is touching hands with our digital creations. It's ok to be weird
				because life is weird. It's the fire that keeps us going. Consciousness, the greatest mystery
				alongside the Big Bang and black holes, is fundamentally paradoxical.
			</Para>
			<Para>
				Everything boils down to mental models. When the state of your organism matches the state of
				the local environment, you are in flow with the universe
			</Para>
		</Section>

		<Section title="Favorite video games">
			<Ul>
				{videoGames.map((v) => (
					<Li key={v}>{v}</Li>
				))}
			</Ul>
		</Section>

		<H3 pt={Space._7}>My personal roadmap</H3>
		<Ul>
			<Li>Work for an awesome company in Austin</Li>
			<Li>Remember to take breaks throughout the day</Li>
			<Li>Expand my personal utility library</Li>
			<Li>Work on a small project that people find useful</Li>
			<Li>Learn some "big picture" things</Li>
			<Li>Get better at math</Li>
		</Ul>
	</Box>
);
