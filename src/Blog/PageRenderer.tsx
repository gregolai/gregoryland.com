import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { compiler } from 'markdown-to-jsx';
import { Page } from './Blog';
import { Text } from '../Resume/tokens';

interface Props {
	page: Page;
}

const defaultOptions = {
	overrides: {
		h1: {
			component: Text.Title
		},
		h2: {}
	}
};

export default (props: Props) => {
	const { page } = props;

	const [content, setContent] = useState(null);

	useEffect(() => {
		page.md().then(content => {
			setContent(content.default);
		});
	}, [page]);

	return content ? compiler(content, { ...defaultOptions, ...page.mdOptions }) : null;
};
