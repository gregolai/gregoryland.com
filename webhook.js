const express = require('express');
const cors = require('cors');

const LISTEN_PORT = 8089;

const app = express();
app.use(cors());

app.post('/', (req, res) => {});

app.get('/', (req, res) => {});

app.listen(LISTEN_PORT);
console.log(`Webhook listening on http://localhost:${LISTEN_PORT}`);
