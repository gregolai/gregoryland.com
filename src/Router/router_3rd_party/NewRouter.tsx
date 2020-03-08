import React, { useEffect, useCallback, createContext, useState, useContext } from 'react';

import { LocationListener, Location } from 'history';
import { BrowserRouter, useHistory, Link, Route, NavLink } from 'react-router-dom';

const PageRouterContext = createContext<{
	links: string[];
	addLink: (pathname: string) => void;
	removeLink: (pathname: string) => void;
	onHistoryChange: LocationListener;
}>(null);

interface PageRouterProps {
	children: any;
	onTransition: (location: Location, action: string) => void;
}
export const PageRouter: React.FC<PageRouterProps> = ({ children, onTransition }) => {
	const [links, setLinks] = useState<string[]>([]);

	const addLink = (pathname: string) => {
		const nextLinks = [...links];
		nextLinks.push(pathname);
		setLinks(nextLinks);
	};
	const removeLink = (pathname: string) => {
		const nextLinks = [...links];
		nextLinks.splice(nextLinks.indexOf(pathname), 1);
		setLinks(nextLinks);
	};

	const onHistoryChange: LocationListener = async (location, action) => {
		await onTransition(location, action);
	};

	return (
		<BrowserRouter>
			<PageRouterContext.Provider
				value={{
					links,
					addLink,
					removeLink,

					onHistoryChange
				}}
			>
				<Route path="*">{children}</Route>
			</PageRouterContext.Provider>
		</BrowserRouter>
	);
};

const LinkAnchor = ({ as: Component, navigate, ...rest }) => {
	const { onClick, onKeyPress } = rest;
	return (
		<Component
			as="a"
			{...rest}
			onClick={e => {
				onClick && onClick(e);
				e.preventDefault();
				navigate();
			}}
			onKeyPress={e => {
				onKeyPress && onKeyPress(e);
				if (e.key === ' ' || e.key === 'Enter') {
					e.preventDefault();
					navigate();
				}
			}}
		>
			{rest.children}
		</Component>
	);
};

export const PageLink = ({ children, pathname, ...rest }) => {
	const { addLink, removeLink, onHistoryChange } = useContext(PageRouterContext);

	const history = useHistory();

	useEffect(() => {
		const unlisten = history.listen((location, action) => {
			if (location.pathname === pathname) {
				onHistoryChange(location, action);
			}
		});
		addLink(pathname);
		return () => {
			removeLink(pathname);
			unlisten();
		};
	}, [history, pathname]);

	return (
		<Link {...rest} component={LinkAnchor} to={pathname}>
			{children}
		</Link>
	);
};
