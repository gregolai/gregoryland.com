import React from 'react';
import { useEffect, useState } from 'react';
import { compiler } from 'markdown-to-jsx';
import { Page } from './Blog';
import { Text } from '../core/primitives';

export const PageRenderer: React.FC<{ page: Page }> = ({ page }) => {
	const [content, setContent] = useState(null);

	useEffect(() => {
		page.md().then((content) => {
			setContent(content.default);
		});
	}, [page]);

	return content
		? compiler(content, {
				overrides: {
					h1: {
						component: Text.Title
					}
				},
				...page.mdOptions
		  })
		: null;
};
