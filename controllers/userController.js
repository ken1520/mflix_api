const { Router } = require('express');
const userProcessor = require('../processors/user/userProcessor');

let router = new Router({ caseSensitive: true });

router.post('/login', userProcessor.userLogin);

module.exports = router;