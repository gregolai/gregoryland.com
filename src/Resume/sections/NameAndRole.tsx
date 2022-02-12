import React from 'react';
import { Box } from 'pu2/style-lib';
import type { BoxProps } from 'pu2/style-lib/browser/Box';
import { Palette, Space } from '../resume-theme';
import { Flex } from '../../primitives';
import { Diamond, MediumHeading, NameHeading } from './_primitives';

const ResumeBanner = () => (
	<Box position="relative" w="30px" bg={Palette.darkest}>
		<Box
			position="absolute"
			bottom="0"
			left="50%"
			transform="rotateZ(-90deg) translate(10px, 50%)"
			transformOrigin="bottom left"
			color="white"
			textTransform="uppercase"
		>
			Resume
		</Box>
	</Box>
);

interface NameAndRoleProps extends BoxProps {
	pb?: BoxProps['pb'];
	pl?: BoxProps['pl'];
	showResumeBanner?: boolean;
}
export const NameAndRole = ({ pb, pl, showResumeBanner, ...rest }: NameAndRoleProps) => (
	<Flex pb={pb}>
		{showResumeBanner && <ResumeBanner />}
		<Box flex="1" pl={pl} {...rest}>
			<NameHeading color={Palette.darker}>Gregory</NameHeading>
			{showResumeBanner && (
				<Box
					position="relative"
					// hacky but works
					ml={`calc(-1 * ${pl || 0} )`}
				>
					<Diamond />
				</Box>
			)}
			<NameHeading fontWeight="600" pt={Space._4px}>
				Dalton
			</NameHeading>
			<MediumHeading pt={Space._18px} color={Palette.dark}>
				Software Engineer
			</MediumHeading>
		</Box>
	</Flex>
);
