const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('./api', apiRoutes);

app.use('./', htmlRoutes);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
})