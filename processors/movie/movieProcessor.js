const processorStart = require('../../utils/processorStart');

let validate = async (req, res) => {
    console.log('validate');
    return true;
};

let process = async (req, res) => {
    console.log('process');
    
};

module.exports = {
    start: (req, res) => {
        return processorStart(req, res, validate, process);
    }
}