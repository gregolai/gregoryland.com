const fs = require('fs');
const path = require('path');
const express = require('express');

const db = require('./db');

const DATABASE = (() => {
	const DB_PATH = path.resolve(__dirname, 'db.json');

	return {
		load: () => {
			return JSON.parse(fs.readFileSync(DB_PATH, { encoding: 'utf-8' }));
		},
		save: db => {
			fs.writeFileSync(DB_PATH, JSON.stringify(db, null, '\t'));
		}
	};
})();

/**
 * @param app {express.Express}
 */
module.exports = app => {
	// app.get('/albums', (req, res) => {});

	app.get('/albums/:id', (req, res) => {
		const { albums, songs } = DATABASE.load();

		const { item: album } = db.getOne(albums, parseInt(req.params.id));
		if (!album) {
			res.json({ error: 'Album not found.' });
			return;
		}

		res.json({
			success: true,
			album: {
				...album,
				songs: db.getMany(songs, album.songs).items
			}
		});
	});
};
