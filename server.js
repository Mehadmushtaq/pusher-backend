const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

const messagesRouter = require('./routes/message.routes');

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/api', messagesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
