import axios from 'axios'
import { ALL_QUIZ_REQUEST, ALL_QUIZ_SUCCESS, ALL_QUIZ_FAIL } from '../constants/quizConstants'

export const allUsers = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_QUIZ_REQUEST })

		const { data } = await axios.get('/api/quiz')

		dispatch({
			type: ALL_QUIZ_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: ALL_QUIZ_FAIL,
			payload: error.response.data.message,
		})
	}
}
