const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const express = require('express');
const { DIR_PUBLIC, filePathExists, pathIsWithin } = require('../utils');

const DIR_IMG = path.resolve(DIR_PUBLIC, 'img');

const VALID_THUMB_WIDTHS = [64, 128];
const VALID_THUMB_EXT = ['png', 'jpg', 'jpeg'];

const canBeThumbnailed = (absolutePath) => {
	const parts = absolutePath.split('.');
	const ext = parts[parts.length - 1].toLowerCase();
	return VALID_THUMB_EXT.includes(ext);
};

/**
 * @param app {express.Express}
 */
module.exports = (app) => {
	/**
	 * Get the localpaths of all the image files
	 */
	app.get('/streetart', (req, res) => {
		const DIR_IMG_STREETART = path.resolve(DIR_IMG, 'streetart');

		const imgs = fs
			.readdirSync(DIR_IMG_STREETART)
			.filter((imgName) => imgName !== '.' && imgName !== '..')
			.map((imgName) => `streetart/${imgName}`);

		res.json(imgs);
	});

	// app.get('/img/:localpath', async (req, res) => {
	// 	const imgPath = path.resolve(DIR_IMG, req.params['localpath']);

	// 	if (!pathIsWithin(imgPath, DIR_IMG)) {
	// 		res.sendStatus(404);
	// 		return;
	// 	}

	// 	res.sendFile(imgPath);
	// });

	const sendThumbnail = async (res, localPath, width) => {
		const DIR_THUMB = path.resolve(DIR_IMG, `t/${width}`);
		const thumbPath = path.resolve(DIR_THUMB, localPath);
		if (!pathIsWithin(thumbPath, DIR_THUMB)) {
			res.sendStatus(404);
			return;
		}

		const thumbExists = await filePathExists(thumbPath);
		if (!thumbExists) {
			const imgPath = path.resolve(DIR_IMG, localPath);

			/**
			 * If the image doesn't exist, 404
			 */
			const imgExists = await filePathExists(imgPath);
			if (!imgExists) {
				res.sendStatus(404);
				return;
			}

			/**
			 * If the file can't be thumbnailed, such as an SVG, just send it
			 */
			if (!canBeThumbnailed(thumbPath)) {
				res.sendFile(imgPath);
				return;
			}

			/**
			 * Create the directories required (if necessary)
			 */
			fs.mkdirSync(path.dirname(thumbPath), { recursive: true });

			/**
			 * Read image, resize + convert to JPG, then write it to thumbnails
			 */
			const imgBuffer = fs.readFileSync(imgPath);
			const thumbBuffer = await sharp(imgBuffer).resize(width).jpeg().toBuffer();
			fs.writeFileSync(thumbPath, thumbBuffer);
		}

		res.sendFile(thumbPath);
	};

	VALID_THUMB_WIDTHS.forEach((width) => {
		app.get(`/img/t/${width}/*`, async (req, res) => {
			console.log({ 'req params': req.params });
			sendThumbnail(res, req.params[0], width);
		});
	});

	app.get('/img/t/*', async (req, res) => {
		sendThumbnail(res, req.params[0], VALID_THUMB_WIDTHS[0]);
	});
};
