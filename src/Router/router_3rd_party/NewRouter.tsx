import React, { useEffect, useCallback, createContext, useState, useContext } from 'react';

import { LocationListener, Location } from 'history';
import { BrowserRouter, useHistory, Link, Route, NavLink } from 'react-router-dom';

const useListener = (listener: LocationListener) => {
	const history = useHistory();

	useEffect(() => {
		const unlisten = history.listen(listener);
		return unlisten;
	}, [listener]);
};

const PageRouterContext = createContext({
	links: [],
	addLink: (pathname: string) => null,
	removeLink: (pathname: string) => null,
	dispatch: (location, action) => null
});
export const PageRouter = ({
	children,
	//onBeforeTransition = async (location: Location, action: string) => false,
	onTransition = (location: Location, action: string) => {}
	//onAfterTransition = async (location: Location, action: string) => {}
}) => {
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

	const dispatch: LocationListener = async (location, action) => {
		await onTransition(location, action);
		// if (shouldTransition) {
		// 	await onTransition(location, action);
		// 	await onAfterTransition(location, action);
		// }

		console.log('dispatched', {
			location,
			action
		});
	};

	return (
		<BrowserRouter>
			<PageRouterContext.Provider
				value={{
					links,
					addLink,
					removeLink,

					dispatch
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
	const { addLink, removeLink, dispatch } = useContext(PageRouterContext);

	const history = useHistory();

	useEffect(() => {
		const unlisten = history.listen((location, action) => {
			if (location.pathname === pathname) {
				dispatch(location, action);
			}
		});
		addLink(pathname);
		return () => {
			removeLink(pathname);
			unlisten();
		};
	}, [history, pathname]);

	return (
		// @ts-ignore
		<Link {...rest} component={LinkAnchor} to={pathname}>
			{children}
		</Link>
	);
};
