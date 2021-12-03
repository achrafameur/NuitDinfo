const Quiz = require('../models/quiz')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

exports.allQuiz = catchAsyncErrors(async (req, res, next) => {
	const quiz = await Quiz.find()

	res.status(200).json(quiz)
})

exports.addQuiz = catchAsyncErrors(async (req, res, next) => {
	const quiz = await Quiz.create(req.body)

	res.status(200).json({
		success: true,
		quiz,
	})
})

exports.updateQuiz = catchAsyncErrors(async (req, res, next) => {
	const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	})

	res.status(200).json({
		success: true,
	})
})

exports.deleteQuiz = catchAsyncErrors(async (req, res, next) => {
	const quiz = await Quiz.findById(req.params.id)

	if (!quiz) {
		return next(new ErrorHandler(`Quiz does not found with id: ${req.params.id}`))
	}

	await quiz.remove()

	res.status(200).json({
		success: true,
	})
})
