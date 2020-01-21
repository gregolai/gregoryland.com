import { h } from 'preact';
import cx from 'classnames';

const css = require('./ControlButton.scss');

export const ControlButton = ({ size, ...props }) => {
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
