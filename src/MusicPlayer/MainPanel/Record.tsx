import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';
import cx from 'classnames';
import { Context } from '../MusicPlayerProvider';

const css = require('./Record.scss');

export const Record = props => {
	const { currentSong, isPlaying, setPlaying, isPlaylistOpen } = useContext(Context);

	const [perspective, setPerspective] = useState(false);
	setTimeout(() => {
		setPerspective(true);
	}, 2000);

	return (
		<div
			className={cx(
				css.container,
				isPlaylistOpen && css.isPlaylistOpen,
				perspective && css.perspective
			)}
			onClick={() => setPlaying(!isPlaying)}
		>
			<div className={css.disc_0}>
				<div className={css.disc_1}>
					<div className={css.disc_2}>
						<div className={cx(css.discImage, isPlaying && css.rotating)}>
							<img className={css.img} src={currentSong.art} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
