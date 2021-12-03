const express = require('express')
const router = express.Router()

const { allQuiz, addQuiz, updateQuiz, deleteQuiz } = require('../controllers/quiz')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/quiz').get(allQuiz)
router.route('/quiz/new').post(addQuiz)
router
	.route('/quiz/:id')
	.put(isAuthenticatedUser, authorizeRoles('admin'), updateQuiz)
	.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteQuiz)

module.exports = router
