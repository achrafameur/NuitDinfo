import React, { Fragment, useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../actions/userActions'

const ForgotPassword = () => {
	const [email, setEmail] = useState('')

	const alert = useAlert()
	const dispatch = useDispatch()

	const { error, loading, message } = useSelector((state) => state.forgotPassword)

	useEffect(() => {
		if (error) {
			alert.error(error)
			dispatch(clearErrors())
		}

		if (message) {
			alert.success(message)
		}
	}, [dispatch, alert, error, message])

	const submitHandler = (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.set('email', email)

		dispatch(forgotPassword(formData))
	}

	return (
			<div className='row wrapper'>
				<div className='col-10 col-lg-5 card'>
					<form onSubmit={submitHandler}>
						<h1 className='mb-4'>Mot de passe oublié</h1>
						<div className='form-group'>
							<label htmlFor='email_field'>Entrer adresse email</label>
							<input
								type='email'
								id='email_field'
								className='form-control'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<button
							id='forgot_password_button'
							type='submit'
							className='btn btn-block py-2 border-0'
							style={{ backgroundColor: '#5E72E4' }}
							disabled={loading ? true : false}
						>
							Envoyer Email
						</button>
					</form>
				</div>
			</div>
	)
}

export default ForgotPassword
