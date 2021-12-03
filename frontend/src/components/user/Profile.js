import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'

const Profile = () => {
	const { user, loading } = useSelector((state) => state.auth)

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div className='container my-5'>
						<div class='card shadow-lg'>
							<h2 class='card-header text-center'>Mon Profile</h2>
							<div class='card-body p-3'>
								<div className='row justify-content-around my-5 user-info'>
									<div className='col-12 col-md-3'>
										<figure className='avatar avatar-profile'>
											<img
												className='rounded-circle img-fluid'
												src={user.avatar.url}
												alt={user.name}
											/>
										</figure>
									</div>

									<div className='col-12 col-md-5'>
										<h4>Full Name</h4>
										<p>{user.name}</p>

										<h4>Addresse Email</h4>
										<p>{user.email}</p>

										<h4>Rôle</h4>
										<p>{user.role}</p>

										<h4>rejoint le</h4>
										<p>{String(user.createdAt).substring(0, 10)}</p>
									</div>
								</div>
							</div>
							<div class='card-footer text-muted'>
								<div className='row justify-content-around user-info'>
									<div className='col-12 col-md-3'>
										<Link
											to='/me/update'
											id='edit_profile'
											className='btn btn-block py-2 border-0 text-white'
											style={{ backgroundColor: '#5E72E4' }}
										>
											Edit Profile
										</Link>
									</div>
									<div className='col-12 col-md-5'>
										<Link
											to='/password/update'
											className='btn btn-block py-2 border-0 text-white'
											style={{ backgroundColor: '#5E72E4' }}
										>
											Changer mot de passe 
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	)
}

export default Profile
