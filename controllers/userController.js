const { Router } = require('express');
const userProcessor = require('../processors/user/userProcessor');

let router = new Router({ caseSensitive: true });

router.get('/:changepw', userProcessor.updatePW);

module.exports = router;