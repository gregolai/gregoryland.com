import { Box } from 'pu2';
import React from 'react';
import { Flex } from '../../core/primitives';
import { space } from '../../core/tokens';
import { Resume } from '../../Resume/Resume';

let printing = false;

const printResume = () => {
	if (printing) return;

	printing = true;

	const iframe = document.createElement('iframe');
	iframe.src = window.location.href;
	iframe.style.position = 'absolute';
	iframe.style.top = '-10000px';
	document.body.appendChild(iframe);

	iframe.contentWindow.addEventListener('DOMContentLoaded', () => {
		iframe.contentWindow.print();

		setTimeout(() => {
			document.body.removeChild(iframe);
			printing = false;
		}, 2000);
	});
};

const PrintButton = (props: React.ComponentProps<typeof Box>) => (
	<Box as="button" py={space._1} px={space._4} alignSelf="center" onClick={printResume} {...props}>
		Print My Resume
	</Box>
);

export const ResumeScreen = () => {
	return (
		<Flex zIndex="1" flexDirection="column">
			<PrintButton mb={space._4} />
			<Resume zIndex="1" minWidth="800px" maxWidth="1000px" />
			<PrintButton mt={space._4} />
		</Flex>
	);
};
