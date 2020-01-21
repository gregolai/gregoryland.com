import { h } from 'preact';
import { Text } from '../tokens';

const css = require('./Header.scss');

const ContactRow = ({ icon, children }) => (
	<div className={css.contactRow}>
		<img src={icon} className={css.contactIcon} />
		<div className={css.contactInfo}>{children}</div>
	</div>
);

export const Header = ({ name, role, email, phone }) => (
	<div className={css.container}>
		<div className={css.left}>
			<h1 style={{ margin: 0 }}>{name}</h1>
			<Text.Title>{role}</Text.Title>
		</div>
		<div className={css.right}>
			<ContactRow icon="static/img/phone-smartphone-apple-iphone-device-mobile-icon.svg">
				{phone}
			</ContactRow>
			<ContactRow icon="static/img/envelope.svg">{email}</ContactRow>
		</div>
	</div>
);
