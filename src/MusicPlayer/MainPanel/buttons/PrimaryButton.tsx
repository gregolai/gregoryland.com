import React from 'react';
import { cx } from 'pu2';

const css = require('./PrimaryButton.scss');

export const PrimaryButton = ({ size, ...props }) => {
	return (
		<div
			{...props}
			className={cx(
				css.container,
				size === 'small' && css.small,
				size === 'large' && css.large,
				props.className
			)}
		>
			<div className={css.innerLayer}>{props.children}</div>
		</div>
	);
};
