import React from 'react';
import { useEffect, useState } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Page } from './Blog';
import { Text } from 'core/primitives';

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
