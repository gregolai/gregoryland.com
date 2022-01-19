import React from 'react';

import css from './Links.module.css';

const Link = ({ children, imgSrc }) => (
	<div className={css.link}>
		<div className={css.img}>
			<img src={imgSrc} />
		</div>
		<div className={css.text}>
			<h3>{children}</h3>
		</div>
	</div>
);

export const Links = ({ className }) => (
	<div className={`${css.container} ${className}`}>
		<Link imgSrc="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80">
			Career
		</Link>
		<Link imgSrc="https://images.unsplash.com/photo-1642420805144-5f03e55f90a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80">
			Projects
		</Link>
		<Link imgSrc="https://images.unsplash.com/photo-1642437386648-2521ba6f908b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1445&q=80">
			Life
		</Link>
	</div>
);
