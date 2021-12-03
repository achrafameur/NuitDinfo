const mongoose = require('mongoose')

const GameSchema = mongoose.Schema(
	{
		gameName: {
			type: String,
			required: [true, 'Please enter an Game Name'],
		},
		gameLink: {
			type: String,
			required: [true, 'Please enter an Game Link'],
		},
		image: {
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Game', GameSchema)
