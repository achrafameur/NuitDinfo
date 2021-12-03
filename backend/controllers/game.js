const Game = require('../models/game')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const cloudinary = require('cloudinary')

exports.allGame = catchAsyncErrors(async (req, res, next) => {
	const game = await Game.find()

	res.status(200).json(game)
})

exports.addGame = catchAsyncErrors(async (req, res, next) => {
	const result = await cloudinary.v2.uploader.upload(req.body.image, {
		folder: 'game',
		width: 150,
		crop: 'scale',
	})

	const game = await Game.create({
		gameName,
		gameLink,
		image: {
			public_id: result.public_id,
			url: result.secure_url,
		},
	})

	res.status(200).json({
		success: true,
		game,
	})
})

exports.updateGame = catchAsyncErrors(async (req, res, next) => {
	const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	})

	res.status(200).json({
		success: true,
	})
})

exports.deleteGame = catchAsyncErrors(async (req, res, next) => {
	const game = await Game.findById(req.params.id)

	if (!game) {
		return next(new ErrorHandler(`Quiz does not found with id: ${req.params.id}`))
	}

	await game.remove()

	res.status(200).json({
		success: true,
	})
})

exports.getGameDetails = catchAsyncErrors(async (req, res, next) => {
	const game = await Game.findById(req.params.id)

	if (!game) {
		return next(new ErrorHandler(`User does not found with id: ${req.params.id}`))
	}

	res.status(200).json(game)
})
