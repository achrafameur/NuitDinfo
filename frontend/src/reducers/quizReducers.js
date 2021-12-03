import { ALL_QUIZ_REQUEST, ALL_QUIZ_SUCCESS, ALL_QUIZ_FAIL } from '../constants/quizConstants'

export const allQuizReducer = (state = { quizs: [] }, action) => {
	switch (action.type) {
		case ALL_QUIZ_REQUEST:
			return {
				...state,
				loading: true,
			}

		case ALL_QUIZ_SUCCESS:
			return {
				...state,
				loading: false,
				quizs: action.payload,
			}

		case ALL_QUIZ_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		default:
			return state
	}
}
