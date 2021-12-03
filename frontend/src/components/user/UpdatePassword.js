import React, { Fragment, useState, useEffect } from 'react'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword, clearErrors } from '../../actions/userActions'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'

const UpdatePassword = ({ history }) => {
	const [oldPassword, setOldPassword] = useState('')
	const [password, setPassword] = useState('')

	const alert = useAlert()
	const dispatch = useDispatch()

	const { error, isUpdated, loading } = useSelector((state) => state.user)

	useEffect(() => {
		if (error) {
			alert.error(error)
			dispatch(clearErrors())
		}

		if (isUpdated) {
			alert.success('Password updated successfully')

			history.push('/me')

			dispatch({
				type: UPDATE_PASSWORD_RESET,
			})
		}
	}, [dispatch, alert, error, history, isUpdated])

	const submitHandler = (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.set('oldPassword', oldPassword)
		formData.set('password', password)

		dispatch(updatePassword(formData))
	}

	return (
		<Fragment>
			<div className='row wrapper'>
				<div className='col-10 col-lg-5 card'>
					<form onSubmit={submitHandler}>
						<h1 className='mt-2 mb-5'>Modifier Mot de passe</h1>
						<div className='form-group'>
							<label for='old_password_field'>ancien mot de passe</label>
							<input
								type='password'
								id='old_password_field'
								className='form-control'
								value={oldPassword}
								onChange={(e) => setOldPassword(e.target.value)}
							/>
						</div>

						<div className='form-group'>
							<label for='new_password_field'>Nouveau mot de passe</label>
							<input
								type='password'
								id='new_password_field'
								className='form-control'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button
							type='submit'
							className='btn btn-block py-2 border-0'
							style={{ backgroundColor: '#5E72E4' }}
							disabled={loading ? true : false}
						>
							Modifier Mot de passe
						</button>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default UpdatePassword
