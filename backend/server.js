const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary')
const cors = require('cors')
const { readdirSync } = require('fs')
const connectDatabase = require('./config/database')
const errorMiddleware = require('./middlewares/errors')

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
	console.log(`ERROR: ${err.message}`)
	console.log('Shutting down due to Uncaught Exception')
	process.exit(1)
})

// Config Env Path
dotenv.config({ path: 'config/.env' })

// Connect database
connectDatabase()

// Setting up cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Create App
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(fileUpload())
app.use(morgan('dev'))

// Routes
readdirSync('routes').map((route) => {
	app.use('/api', require(`./routes/${route}`))
})

// Middleware
app.use(errorMiddleware)

// Start server
const port = process.env.PORT || 5000
const server = app.listen(port, () => {
	console.log(`Server started on port ${port} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Promise rejection.
process.on('unhandledRejection', (err) => {
	console.log(`ERROR: ${err.message}`)
	console.log('Shutting down the server due to Unhandled Promise rejection')
	server.close(() => {
		process.exit(1)
	})
})
