const path = require('path');
const fs = require('fs');

const DIR_PUBLIC = path.resolve(__dirname, '../public');

const filePathExists = async (absolutePath) => {
	try {
		await fs.promises.access(absolutePath);
		return true;
	} catch {
		return false;
	}
};

const pathIsWithin = (testPath, parentPath) => {
	return testPath.startsWith(parentPath);
};

module.exports = {
	DIR_PUBLIC,
	filePathExists,
	pathIsWithin
};
