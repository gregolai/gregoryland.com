import type { BoxProps } from 'pu2/style-lib/browser/Box';

interface MediaHideProps {
	render: (props: BoxProps) => React.ReactElement;
	q: string;
}
export const MediaHide = ({ render, q }: MediaHideProps) =>
	render({
		css: { [q]: { display: 'none' } }
	});
