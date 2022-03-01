import type { IconType } from 'react-icons';
import { AiFillGithub, AiOutlineHome, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaRegKeyboard } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import { GiEnergyBreath } from 'react-icons/gi';
import { MdOutlineEmail } from 'react-icons/md';

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
		Icon: AiOutlineHome
	},
	{
		label: 'Career',
		to: '/career',
		Icon: BiBuildings
	},
	{
		label: 'Projects',
		to: '/projects',
		Icon: FaRegKeyboard
	},
	{
		label: 'Life',
		to: '/life',
		Icon: GiEnergyBreath
	}
];

export const externalLinks: NavLink[] = [
	{
		label: 'Email',
		newTab: false,
		to: 'mailto:gregolai@gmail.com?subject=Hey Greg',
		Icon: MdOutlineEmail
	},
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
