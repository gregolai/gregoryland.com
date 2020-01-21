export interface Song {
	id: number;
	artist: string;
	duration: string;
	title: string;
	art: string;
}

export const songs: Song[] = [
	{
		id: 9999,
		title: 'Thought Contagion',
		artist: 'Muse',
		duration: '2:47',
		art:
			'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Simulation_Theory_%28album%29.jpg/220px-Simulation_Theory_%28album%29.jpg'
	},
	{
		id: 0,
		title: 'Sternhagelvoll',
		artist: 'In Extremo',
		duration: '3:49',
		art: 'https://e.snmc.io/i/300/w/7a85d60152b8aa0a2950e3ee47bfc80a/6208155'
	},
	{
		id: 1,
		title: 'Savannah',
		artist: 'Diviners feat. Philly K',
		duration: '2:59',
		art: 'https://m.media-amazon.com/images/I/61XHZQKOGKL._SS500_.jpg'
	},
	{
		id: 2,
		title: 'Forever Young (Dance mix)',
		artist: 'Alphaville',
		duration: '5:20',
		art:
			'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Alphaville_-_Forever_Young_Single.jpg/220px-Alphaville_-_Forever_Young_Single.jpg'
	},
	{
		id: 3,
		title: 'The Sound of The Shire',
		artist: 'Howard Shore',
		duration: '2:40',
		art: 'https://i.ytimg.com/vi/cCWSZMZ4vjw/hqdefault.jpg'
	},
	{
		id: 4,
		title: 'The Bible Or The Gun',
		artist: 'Blues Saraceno',
		duration: '3:10',
		art: 'http://images.genius.com/9f23be9110936f10c4abe0accf499f07.600x600x1.jpg'
	},
	{
		id: 5,
		title: 'Save Tonight',
		artist: 'Eagle Eye Cherry',
		duration: '4:05',
		art: 'https://i.scdn.co/image/ab67616d0000b2730b85593f08d19d9036929e0f'
	}
];
