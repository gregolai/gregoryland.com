// https://github.com/ReactTraining/history/blob/master/modules/DOMUtils.js#L52
const isExtraneousPopstateEvent = (e: PopStateEvent) => {
	return e.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

const createPath = (location: Location) => {
	const { pathname, search, hash } = location;

	let path = pathname || '/';

	if (search && search !== '?') {
		path += search[0] === '?' ? search : `?${search}`;
	}

	if (hash && hash !== '#') {
		path += hash[0] === '#' ? hash : `#${hash}`;
	}

	return path;
};

const createHistory = ({} = {}) => {
	const go = (n: number) => {
		window.history.go(n);
	};

	const getDOMLocation = (historyState: any) => {
		const { key, state } = historyState || {};
		const { pathname, search, hash } = window.location;

		let path = pathname + search + hash;
	};

	const onPopState = (e: PopStateEvent) => {
		if (isExtraneousPopstateEvent(e)) return;
	};

	const onHashChange = (e: HashChangeEvent) => {};

	const listen = () => {
		window.addEventListener('popstate', onPopState);
		window.addEventListener('hashchange', onHashChange);
	};

	return {
		go,
		goBack: () => go(-1),
		goForward: () => go(1)
	};
};
