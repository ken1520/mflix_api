const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server listening on port ${process.env.SERVER_PORT}`);
});