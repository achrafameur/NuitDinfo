const mongoose = require('mongoose')

const QuizSchema = mongoose.Schema(
	{
		question: {
			type: String,
			required: [true, 'Please enter an Question'],
		},
		a1: {
			type: String,
			required: [true, 'Please enter an answer'],
		},
		a2: {
			type: String,
			required: [true, 'Please enter an answer'],
		},
		a3: {
			type: String,
			required: [false, 'Please enter an answer'],
		},
		a4: {
			type: String,
			required: [false, 'Please enter an answer'],
		},
		a5: {
			type: String,
			required: [false, 'Please enter an answer'],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Quiz', QuizSchema)
