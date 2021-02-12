const router = require('express').Router();

const userRoutes = require('./user-routes');
const groupRoutes = require('./event-api-routes/group-routes');
const eventRoutes = require('./event-api-routes/event-routes');
const questionRoutes = require('./question-api-routes/question-routes');
const answerRoutes = require('./question-api-routes/answer-routes');

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/events', eventRoutes);
router.use('/askDevs', questionRoutes);
router.use('/answers', answerRoutes);

module.exports = router;