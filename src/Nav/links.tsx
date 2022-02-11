import type { IconType } from 'react-icons';
import { AiFillGithub, AiFillHome, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { GiComputerFan, GiEnergyBreath } from 'react-icons/gi';

export interface NavLink {
	label: string;
	newTab?: boolean;
	Icon: IconType;
	to: string;
}

export const internalLinks: NavLink[] = [
	{
		label: 'Home',
		to: '/',
		Icon: AiFillHome
	},
	{
		label: 'Career',
		to: '/career',
		Icon: BiBuildings
	},
	{
		label: 'Projects',
		to: '/projects',
		Icon: GiComputerFan
	},
	{
		label: 'Life',
		to: '/life',
		Icon: GiEnergyBreath
	}
];

export const externalLinks: NavLink[] = [
	{
		label: 'Github',
		newTab: true,
		to: 'https://github.com/gregolai',
		Icon: AiFillGithub
	},
	{
		label: 'Linkedin',
		newTab: true,
		to: 'https://linkedin.com/in/gregolai',
		Icon: AiFillLinkedin
	},
	{
		label: 'IG',
		newTab: true,
		to: 'https://instagram.com/gregolai',
		Icon: AiFillInstagram
	}
];
