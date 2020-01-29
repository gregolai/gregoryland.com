const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const cors = require('cors');
// const multer = require('multer');
// const serveStatic = require('serve-static');
const routes = require('./routes');

const { apiPort, paths } = require('../build-scripts/options');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser());
app.use(cors());
app.use(express.static(paths.public));

routes(app);

app.listen(apiPort);
console.log(`Server listening on http://localhost:${apiPort}`);
