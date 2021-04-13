const { Router } = require('express');
const userProcessor = require('../processors/user/userProcessor');

let router = new Router({ caseSensitive: true });

router.post('/login', userProcessor.userLogin);
router.post('/register', userProcessor.userRegistration);

module.exports = router;