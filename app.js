const path = require('path');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/addressRouter');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// serves static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', router);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
