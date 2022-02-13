import { Box } from 'pu2/style-lib';
import React from 'react';
import { Button, Flex } from '../primitives';
import { ResumeDesktop, ResumeMobile } from '../Resume';
import { Breakpoint, mediaGreaterThan, mediaLessThan, Space } from '../theme';
import { MediaHide } from '../MediaHide';

let printing = false;
const printResume = () => {
	if (printing) return;

	printing = true;

	const iframe = document.createElement('iframe');
	iframe.src = `${window.location.origin}/resume-print`;
	iframe.style.position = 'absolute';
	iframe.style.top = '-10000px';
	document.body.appendChild(iframe);

	// @ts-ignore
	iframe.contentWindow.addEventListener('DOMContentLoaded', () => {
		// @ts-ignore
		iframe.contentWindow.print();

		setTimeout(() => {
			document.body.removeChild(iframe);
			printing = false;
		}, 2000);
	});
};

export const PageCareer = () => (
	<>
		<Button onClick={() => printResume()}>Print my resume</Button>
		<MediaHide
			q={mediaLessThan(Breakpoint.tablet)}
			render={(props) => (
				<Flex justifyContent="center" py={Space._6} {...props}>
					<Box
						//border="2px solid black"
						boxShadow="5px 5px 3px rgba(0,0,0,0.3)"
						maxWidth="980px"
					>
						<ResumeDesktop />
					</Box>
				</Flex>
			)}
		/>
		<MediaHide q={mediaGreaterThan(Breakpoint.tablet)} render={ResumeMobile} />
	</>
);
