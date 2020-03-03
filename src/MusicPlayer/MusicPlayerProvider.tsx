import React, { createContext, Component, RefCallback } from 'react';

export interface Album {
	id: number;
	art: string;
	songs: Song[];
	title: string;
}

export interface Song {
	id: number;
	artist: string;
	duration: string;
	title: string;
	art: string;
}

interface ContextValue {
	bufferingSongId: number;
	bufferingSongProgress: number;
	bufferAndPlaySong: (song: Song) => void;

	playerRef: HTMLDivElement;
	setPlayerRef: RefCallback<HTMLDivElement>;

	currentAlbum: Album;

	currentSong: Song;
	setCurrentSong: (v: Song) => void;

	isPlaying: boolean;
	setPlaying: (v: boolean) => void;

	isPlaylistOpen: boolean;
	setPlaylistOpen: (v: boolean) => void;

	knockAt: (knock: KnockAt) => void;
	knockStyle: any;
}

interface KnockAt {
	intensity?: number;
	clientX: number;
	clientY: number;
}

// class Knock {
// 	x: number;
// 	y: number;
// 	timeout: number;

// 	constructor(knock: KnockAt) {
// 		this.x = knock.x;
// 		this.y = knock.y;
// 	}

// 	destroy() {
// 		clearTimeout();
// 	}
// }

export const Context = createContext<ContextValue>(null);

interface Props {
	children: React.ReactChild;
}
interface State {
	currentAlbum: Album;
	currentSong: Song;
	bufferingSongId: number;
	bufferingSongProgress: number;
	isPlaying: boolean;
	isPlaylistOpen: boolean;
	knockStyle: any;
	playerRef: HTMLDivElement;
}

export class Provider extends Component<Props, State> {
	state = {
		currentAlbum: null,
		currentSong: null,
		bufferingSongId: null,
		bufferingSongProgress: 0,
		isPlaying: false,
		isPlaylistOpen: false,
		knockStyle: {},
		playerRef: null
	};

	knock: number;

	playerRef: HTMLDivElement = null;

	setPlayerRef = playerRef => this.setState({ playerRef });

	async componentDidMount() {
		const res = await fetch('http://localhost:8087/albums/2');

		const data = await res.json();

		const { album, error, success } = data;

		if (success) {
			this.setState({
				currentAlbum: album,
				currentSong: album.songs[0] || null
			});
		}
	}

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

	bufferAndPlaySong = (song: Song) => {
		this.setState(
			{
				isPlaying: false,
				bufferingSongId: song.id,
				bufferingSongProgress: 0
			},
			() => {
				const loop = () => {
					const { bufferingSongProgress } = this.state;

					if (bufferingSongProgress >= 100) {
						this.setState(
							{
								isPlaylistOpen: false
							},
							() => {
								// wait for transition
								setTimeout(() => {
									this.setState({
										isPlaying: true,
										currentSong: song,
										bufferingSongId: null,
										bufferingSongProgress: 0
									});
								}, 1000);
							}
						);

						this.setState({
							isPlaying: true,
							isPlaylistOpen: false,
							currentSong: song,
							bufferingSongId: null,
							bufferingSongProgress: 0
						});
						return;
					}

					const n = Math.floor(1 + Math.random() * 20);

					this.setState(
						{
							bufferingSongProgress: bufferingSongProgress + n
						},
						() => setTimeout(loop, 100)
					);
				};
				loop();
			}
		);
	};

	knockAt = ({ clientX, clientY, intensity = 20 }: KnockAt) => {
		const { x: playerX, y: playerY, width, height } = this.playerRef.getBoundingClientRect();

		const localX = clientX - playerX;
		const localY = clientY - playerY;

		const ratioX = localX / width;
		const ratioY = localY / height;

		const halfWidth = width / 2;
		const halfHeight = height / 2;

		const normX = halfWidth - localX;
		const normY = halfHeight - localY;

		// [-1, 1]
		let normRatioX = (halfWidth - localX) / halfWidth;
		let normRatioY = (halfHeight - localY) / halfHeight;

		let originX = 'center';
		let originY = 'center';

		let dist = 100; //Math.min(height, width);
		if (Math.abs(normRatioX) > Math.abs(normRatioY)) {
			normRatioY = 0;
			//dist = width;
			originX = normRatioX > 0 ? 'left' : 'right';
		} else {
			normRatioX = 0;
			//dist = height;
			originY = normRatioY > 0 ? 'top' : 'bottom';
		}

		if (this.knock) {
			window.clearTimeout(this.knock);
			//return;
		}

		const transform = `rotateX(${Math.round(normRatioY * intensity)}deg) rotateY(${Math.round(
			-normRatioX * intensity
		)}deg)`;

		console.log({ transform });
		const DURATION = 2000;
		this.setState({
			knockStyle: {
				perspective: 800,
				transition: `all ${DURATION}ms linear`,
				transform,
				transformOrigin: `${ratioX * 100}% ${ratioY * 100}%`
				//perspectiveOrigin: `${originY} ${originX}`
			}
		});

		this.knock = window.setTimeout(() => {
			// window.clearTimeout(this.knock);

			this.setState(
				{
					knockStyle: {
						perspective: 800,
						transition: `all ${DURATION}ms linear`,
						// perspectiveOrigin: `${originY} ${originX}`,
						transformOrigin: `${ratioX * 100}% ${ratioY * 100}%`
					}
				},
				() => {
					this.knock = window.setTimeout(() => {
						this.knock = null;
					}, DURATION);
				}
			);
		}, DURATION);
	};

	render() {
		const {
			bufferingSongId,
			bufferingSongProgress,
			currentAlbum,
			currentSong,
			isPlaying,
			isPlaylistOpen,
			knockStyle,
			playerRef
		} = this.state;

		return (
			<Context.Provider
				value={{
					bufferingSongId,
					bufferingSongProgress,
					bufferAndPlaySong: this.bufferAndPlaySong,

					currentAlbum,

					currentSong,
					setCurrentSong: this.setCurrentSong,

					isPlaying,
					setPlaying: this.setPlaying,

					isPlaylistOpen,
					setPlaylistOpen: this.setPlaylistOpen,

					playerRef,
					setPlayerRef: this.setPlayerRef,

					knockAt: this.knockAt,
					knockStyle
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}
