import { h } from 'preact';
import { Header } from './Header';
import { Body } from './Body';
import { Job } from './Job';
import { Skill } from './Skill';
import { School } from './School';
import { Text } from './tokens';

const css = require('./Resume.scss');

export const Resume = ({ children }) => <div className={css.container}>{children}</div>;

Resume.Header = Header;
Resume.Body = Body;

Resume.Job = Job;
Resume.Skill = Skill;
Resume.School = School;

Resume.Text = Text;
