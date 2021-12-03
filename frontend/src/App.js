import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'

// Auth or User imports
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'



// Admin Imports
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'

// home game & quiz

import ProtectedRoute from './components/route/ProtectedRoute'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import QuizScreen from './components/QuizScreen'
import TicTacToe from './components/TicTacToe'

import './App.css'
import AllGames from './components/AllGames'
import Video from './components/Video'

function App() {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	const { user, isAuthenticated, loading } = useSelector((state) => state.auth)

	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='h-100'>
					<Route path='/' component={Home} exact />
					<Route path='/quiz' component={QuizScreen} exact />
					<Route path='/game' component={TicTacToe} exact />
					<Route path='/video' component={Video} exact />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/password/forgot' component={ForgotPassword} exact />
					<Route path='/password/reset/:token' component={NewPassword} exact />
					<ProtectedRoute path='/me' component={Profile} exact />
					<ProtectedRoute path='/me/update' component={UpdateProfile} exact />
					<ProtectedRoute path='/password/update' component={UpdatePassword} exact />

					<ProtectedRoute path='/admin/users' isAdmin={true} component={UsersList} exact />
					<ProtectedRoute path='/admin/user/:id' isAdmin={true} component={UpdateUser} exact />
				</div>

				{/* {!loading && (!isAuthenticated || user.role !== 'admin') && <Footer />} */}
			</div>
		</Router>
	)
}

export default App
