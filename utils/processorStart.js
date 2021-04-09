const apiResponse = require('./apiResponse');

module.exports = (req, res, validate, process) => {
    let startTime = Date.now('micro');
    console.log('[API] [Processor Start] ---------------- Start ---------------- ');
    return validate(req, res)
        .then(data => {
            return process(req, res);
        })
        .then(() => {
            let endTime = Date.now('micro');
            console.log('[API] [Processor Start] ---------------- End ' + (endTime - startTime) + ' ms ---------------- ');
        })
        .catch(async (error) => {
            res.send(error);
            console.log('[API] error ' + JSON.stringify(error));
        })
}