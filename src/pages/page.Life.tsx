import { Box } from 'pu2/style-lib';
import React from 'react';
import { Frame, H3, H4, Li, Para, Span, Ul } from '../primitives';
import { Space } from '../theme';

interface SectionProps {
	children: React.ReactNode;
	title: string;
}
const Section = ({ children, title }: SectionProps) => (
	<Frame
		b="2px solid black"
		mt={Space._6}
		css={{
			':first-of-type': { mt: '0px' }
		}}
	>
		<H3>{title}</H3>
		{children}
	</Frame>
);

const videoGames = [
	'Cuphead',
	'Factorio',
	'Final Fantasy VII',
	'Final Fantasy VIII',
	'FTL',
	'Hollow Knight',
	'Kid Chameleon',
	'Satisfactory',
	'Shenzhen I/O (and any Zachtronics game)',
	'Slay the Spire',
	'Starcraft',
	'Starcraft II',
	'Subnautica',
	'Super Meat Boy',
	'The Talos Principle',
	'Thief: The Dark Project',
	'Thief 2: The Metal Age',
	'Undertale',
	'Warcraft III'
];

export const PageLife = () => (
	<Box p={Space._6}>
		<Section title="Dev stuff I've learnt">
			<Ul>
				<Li>
					I've learnt to be OK with teamwork and letting other people make your life easier, even if
					it doesn't follow coding conventions you normally employ. This is critical when working
					with large teams.
				</Li>
				<Li>
					Writing things from scratch is tempting, but it's often better to build on the backs of
					giants by using a highly dependable library instead, assuming one exists.
				</Li>
				<Li>
					It's almost always better to take time on a well-designed API rather than a quick one. API
					consumers, as well as your future self, will thank you as your projects scale.
				</Li>
				<Li>You may be wrong about things and that's ok.</Li>
				<Li>
					Separate your personal life from your work life. Leave your work at work. If you don't do
					this, you'll burnout fast. It also makes work-time more productive.
				</Li>
			</Ul>
		</Section>

		<Section title="My ramblings">
			<H4>The joy of creation</H4>
			<Para>
				I have deep respect for people who build things themselves. There's something about owning
				your creation that's so beautiful. As we move towards a greater level of abstraction we face
				the danger of forgetting what inspired us in the first place.
			</Para>

			<H4>From animal to robot</H4>
			<Para>
				I like thinking really deep into things, reducing everything to the evolutionary mechanisms
				that create us, and perhaps even the universe itself. There was this very interesting idea I
				came across recently that made me start questioning how far this "evolution" thing goes. I
				heard that maybe the universe descended from a black hole from a parent universe, and that the
				selective pressure for universal constants is finely tuned by evolution to create descendent
				universes by means of black holes.
			</Para>
			<Para>
				Humanity's further merging with computers and AI is inevitable. Throughout our journey we need
				to take a step back and remember who we actually are. Are we animal or are we robot? And how
				do we structure our lives to live healthily in a society.
			</Para>
		</Section>

		<Section title="Some of my favorite video games">
			<Span>I love games with great soundtracks!</Span>
			<Ul>
				{videoGames.map((v) => (
					<Li key={v}>{v}</Li>
				))}
			</Ul>
		</Section>
	</Box>
);
