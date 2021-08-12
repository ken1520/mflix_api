const { Router } = require('express');
const loginProcessor = require('../processors/user/loginProcessor');
const registerProcessor = require('../processors/user/registerProcessor');

let router = new Router({ caseSensitive: true });

router.post('/login', loginProcessor.start);
router.post('/register', registerProcessor.userRegistration);

module.exports = router;