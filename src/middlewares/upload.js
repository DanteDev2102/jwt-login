const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, './src/files'),
	filename: (req, file, cb) => {
		const name = `${Date.now()}_${file.fieldname}.${
			file.mimetype.split('/')[1]
		}`;
		file.filename = name;
		cb(null, name);
	}
});

module.exports = multer({ storage }).single('avatar');
