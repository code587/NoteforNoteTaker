const router = require('express').Router()

// Imports the router for apiRoutes and htmlRoutes
const apiRoutesRouter = require('./apiRoutes');
const htmlRoutesRouter = require('./htmlRoutes');


router.use('/api', apiRoutesRouter);
router.use('/', htmlRoutesRouter);

module.exports = router;