import React, { useContext } from 'react';
import RouterContext from './RouterContext';

interface Props {
	children: React.ReactChild | React.ReactChild[];
	to: string;
	[key: string]: any;
}

const Link: React.FC<Props> = ({ children, to, ...props }) => {
	const { goToHref } = useContext(RouterContext);

	return (
		<a
			{...props}
			href={to}
			onClick={e => {
				e.preventDefault();
				goToHref(props.to);
				props?.onClick(e);
			}}
			onKeyPress={e => {
				if (e.key === 'Space' || e.key === 'Enter') {
					e.preventDefault();
					goToHref(props.to);
					props?.onClick(e);
				}
			}}
		>
			{children}
		</a>
	);
};
export default Link;
