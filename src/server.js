const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression')
const item = require('./controllers/items');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression())
app.use(bodyParser.json());
app.use('/static', express.static(path.resolve(__dirname, '../assets')))
app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/api/items', item);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});