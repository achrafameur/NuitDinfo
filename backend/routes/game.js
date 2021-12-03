const express = require('express')
const router = express.Router()

const { allGame, addGame, updateGame, deleteGame, getGameDetails } = require('../controllers/game')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/game').get(allGame)
router.route('/game/new').post(addGame)
router
	.route('/game/:id')
	.get(getGameDetails)
	.put(isAuthenticatedUser, authorizeRoles('admin'), updateGame)
	.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteGame)

module.exports = router
