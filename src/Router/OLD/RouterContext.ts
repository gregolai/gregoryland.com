import { createContext } from 'react';

interface Props {
	goToHref: (href: string) => void;
	registerRoute: (route: string, el: HTMLElement) => void;
	unregisterRoute: (route: string) => void;
}

export default createContext<Props>({
	goToHref: null,
	registerRoute: null,
	unregisterRoute: null
});
