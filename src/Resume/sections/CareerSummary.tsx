import React from 'react';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Para, SectionFrame } from './_primitives';

export const CareerSummary = (props: BoxProps) => (
	<SectionFrame {...props} title="Career Summary">
		<Para>
			This is my career summary. It's meant to summarize my career. What have I learnt? What are my
			goals? Why do I do what I do? It should be very short.
		</Para>
	</SectionFrame>
);
