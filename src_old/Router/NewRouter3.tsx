import React, { useContext, useEffect, useState } from 'react';

import { Location } from 'history';
import { BrowserRouter, useHistory, Link, Route, NavLink } from 'react-router-dom';
import { Button } from '../core/primitives';
import { routes } from '../Portfolio/routes';

interface PageRouterProps {
	children: any;
	onTransition: (location: Location, action: string) => void;
}

const DumbContext = React.createContext({
	pathname: '',
	setPathname: (pathname: string) => {}
});

const Inner = ({ children, onTransition }) => {
	// const history = useHistory();

	// useEffect(() => {
	// 	return history.listen((location, action) => {
	// 		const route = routes.find((route) => route.path === location.pathname);
	// 		if (route && action !== 'POP') {
	// 			onTransition(location, action);
	// 		}
	// 	});
	// }, []);

	const { pathname } = React.useContext(DumbContext);

	useEffect(() => {
		// Prevent transition on first render
		if (pathname === '') return;

		onTransition({ pathname }, null);
	}, [pathname]);

	return children;
};

export const PageRouter: React.FC<PageRouterProps> = ({ children, onTransition }) => {
	const [pathname, setPathname] = useState('');

	// <BrowserRouter>
	return (
		<DumbContext.Provider value={{ pathname, setPathname }}>
			<Inner onTransition={onTransition}>
				{children}
				{/* <Route path="*">{children}</Route> */}
			</Inner>
		</DumbContext.Provider>
	);
};

type ButtonProps = React.ComponentProps<typeof Button>;
type LinkProps = React.ComponentProps<typeof Link>;

const PageLinkComponent = ({
	navigate,
	children,
	onClick,
	onKeyPress,
	...rest
}: ButtonProps & { navigate: () => void }) => {
	return (
		<Button
			{...rest}
			onClick={(e) => {
				onClick && onClick(e);
				e.preventDefault();
				navigate();
			}}
			onKeyPress={(e) => {
				onKeyPress && onKeyPress(e);
				if (e.key === ' ' || e.key === 'Enter') {
					e.preventDefault();
					navigate();
				}
			}}
		>
			{children}
		</Button>
	);
};

export const PageLink = ({ children, to, ...rest }: ButtonProps & LinkProps) => {
	// return (
	// 	<Link {...rest} component={PageLinkComponent} to={to}>
	// 		{children}
	// 	</Link>
	// );
	const { setPathname } = useContext(DumbContext);

	return (
		<Button
			{...rest}
			onClick={(e) => {
				e.preventDefault();
				setPathname(to as string);
				// navigate();
			}}
			onKeyPress={(e) => {
				// onKeyPress && onKeyPress(e);
				if (e.key === ' ' || e.key === 'Enter') {
					e.preventDefault();
					setPathname(to as string);
					// navigate();
				}
			}}
		>
			{children}
		</Button>
	);
};
