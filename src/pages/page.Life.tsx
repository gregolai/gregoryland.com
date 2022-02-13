import { Box } from 'pu2/style-lib';
import React from 'react';
import { Frame, H3, Li, Para, Ul } from '../primitives';
import { Space } from '../theme';

interface SectionProps {
	children: React.ReactNode;
	title: string;
}
const Section = ({ children, title }: SectionProps) => (
	<Frame m={Space._8} b="2px solid black">
		<H3>{title}</H3>
		{children}
	</Frame>
);

const videoGames = [
	'Factorio',
	'Final Fantasy VII',
	'Final Fantasy VIII',
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
	<Box>
		<Section title="Dev stuff I've learnt">
			<Ul>
				<Li>
					Being OK with a team's coding practices. If it gets the job done and makes your life
					easier, this is almost always a win.
				</Li>
				<Li>
					Creating your own tool is tempting, but it's often better to build on the backs of giants
					by using highly dependable libraries if one exists.
				</Li>
				<Li>
					It's almost always better to take time on a well-designed API rather than a quick one.
					You'll thank your future self as your project scales.
				</Li>
				<Li>You may be wrong about things and that's ok.</Li>
				<Li>
					Separate your personal life from your work life. Leave your work at work. If you don't do
					this, you'll burnout fast. It also makes work more productive.
				</Li>
			</Ul>
		</Section>

		<Section title="My ramblings...from animal, to robot">
			<Para>
				I like thinking really deep into things, reducing everything to the evolutionary mechanisms
				that create us, and perhaps even the universe itself.
			</Para>
			<Para>
				I have deep respect for people who build things themselves. There's something about owning
				your creation that's beautiful. As we move towards a greater level of abstraction we face the
				danger of forgetting the joy of creation.
			</Para>
			<Para>
				Our analog human experience is touching hands with our digital creations. It's ok to be weird
				because life is weird. It's the fire that keeps us going. Consciousness, the greatest mystery
				alongside the Big Bang and black holes, is fundamentally paradoxical.
			</Para>
		</Section>

		<Section title="Favorite video games">
			<Ul>
				{videoGames.map((v) => (
					<Li key={v}>{v}</Li>
				))}
			</Ul>
		</Section>
	</Box>
);
