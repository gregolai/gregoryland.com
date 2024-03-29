import React from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Palette, Space } from '../resume-theme';
import { MdFace, MdOutlineEmail } from 'react-icons/md';
import { SmallHeading } from './_primitives';
import { Flex, Icon, Span } from '../../primitives';
import { mediaPrint } from '../../theme';

export const ContactInfo = (props: BoxProps) => (
	<Flex
		bg={Palette.darkest}
		color="white"
		flexDirection="column"
		px={Space._30px}
		py={Space._18px}
		{...props}
		css={{
			[mediaPrint()]: {
				bg: 'white',
				color: Palette.darkest
			}
		}}
	>
		{[
			{
				IconComp: MdOutlineEmail,
				label: 'Email',
				text: 'gregolai@gmail.com'
			},
			{
				IconComp: MdFace,
				label: 'Website',
				text: 'gregoryland.com'
			}
		].map(({ IconComp, label, text }) => (
			<Flex
				key={label}
				alignItems="center"
				bb="2px solid white"
				py={Space._18px}
				css={{
					[mediaPrint()]: {
						py: Space._8px,
						bb: 'none'
					},
					':first-of-type': { pt: '0px' },
					':last-of-type': { bb: 'none', pb: '0px' }
				}}
			>
				<Icon as={IconComp} />
				<Flex flex="1" pl={Space._18px} flexDirection="column" justifyContent="space-between">
					<SmallHeading>{label}</SmallHeading>
					<Span>{text}</Span>
				</Flex>
			</Flex>
		))}
	</Flex>
);
