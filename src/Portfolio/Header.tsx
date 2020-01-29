import { h } from 'preact';

const css = require('./Header.scss');

export const Header = () => (
	<header className={css.container}>
		<div className={css.left}>
			<img className={css.pic} src="static/img/gregory.jpg" />

			{/* <div className="links">
								<a id="pf-header-resume-download" href="resume/Gregory Dalton - Resume.pdf">Resumé</a>
								<a id="pf-header-resume-linkedin" href="https://www.linkedin.com/in/gregolai/">LinkedIn</a>
							</div> */}
		</div>

		<div className={css.right}>
			<p className={css.name}>Gregory Dalton</p>
			<p className={css.role}>Software Engineer</p>
			{/* <p className="email">gregolai@gmail.com</p> */}
		</div>

		{/* <img id="pf-header-accessory-img" src="static/img/Sprite-0001.png" /> */}
	</header>
);
