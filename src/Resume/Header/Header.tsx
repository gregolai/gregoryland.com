import { h } from 'preact';
import { Text } from '../tokens';

const css = require('./Header.scss');

const ContactRow = ({ icon, children }) => (
	<div className={css.contactRow}>
		<img src={icon} className={css.contactIcon} />
		<Text.BodyMedium className={css.contactInfo}>{children}</Text.BodyMedium>
	</div>
);

export const Header = ({ name, role, email, phone }) => (
	<div className={css.container}>
		<div className={css.left}>
			<Text.Title style={{ margin: 0 }}>{name}</Text.Title>
			<Text.Subtitle>{role}</Text.Subtitle>
		</div>
		<div className={css.right}>
			<ContactRow icon="static/img/phone-smartphone-apple-iphone-device-mobile-icon.svg">
				{phone}
			</ContactRow>
			<ContactRow icon="static/img/envelope.svg">{email}</ContactRow>
		</div>
	</div>
);
