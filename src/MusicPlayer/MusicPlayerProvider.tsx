import { h, createContext, Component } from 'preact';
import { songs, Song } from './songs';

interface ContextValue {
	currentSong: Song;
	setCurrentSong: (v: Song) => void;

	isPlaying: boolean;
	setPlaying: (v: boolean) => void;

	isPlaylistOpen: boolean;
	setPlaylistOpen: (v: boolean) => void;
}

export const Context = createContext<ContextValue>(null);

export class Provider extends Component {
	state = {
		currentSong: songs[0],
		isPlaying: false,
		isPlaylistOpen: false
	};

	setCurrentSong = (currentSong: Song) => {
		if (currentSong.id !== this.state.currentSong.id) {
			this.setState({
				currentSong,
				isPlaylistOpen: false
			});
		} else {
			this.setState({ isPlaylistOpen: false });
		}
	};

	setPlaying = (isPlaying: boolean) => this.setState({ isPlaying });
	setPlaylistOpen = (isPlaylistOpen: boolean) => this.setState({ isPlaylistOpen });

	render() {
		const { children } = this.props;
		const { currentSong, isPlaying, isPlaylistOpen } = this.state;
		return (
			<Context.Provider
				value={{
					currentSong,
					setCurrentSong: this.setCurrentSong,

					isPlaying,
					setPlaying: this.setPlaying,

					isPlaylistOpen,
					setPlaylistOpen: this.setPlaylistOpen
				}}
			>
				{children}
			</Context.Provider>
		);
	}
}
