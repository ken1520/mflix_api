const path = require('path');
const rfs = require('rotating-file-stream');

const log = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, '../logs')
});

module.exports = {
    logRequestId: true,
    //noColors: process.env.NODE_ENV === 'dev' ? false : true,
    //stream: process.env.NODE_ENV === 'dev' ? null : log
    noColors: true,
    stream: log
}