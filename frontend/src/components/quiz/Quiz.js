import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GameOver from './GameOver'

const QuizWindow = styled.div`
	text-align: center;
	font-size: clamp(20px, 2.5vw, 24px);
	margin-top: 10vh;
`

const Options = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin: 2em auto;

	@media screen and (min-width: 1180px) {
		width: 50%;
	}
`

const Option = styled.button`
	display: block;
	border: 1px solid #616a94;
	border-radius: 15px;
	padding: 15px 30px;
	text-decoration: none;
	color: #616a94;
	background-color: #161a31;
	transition: 0.3s;
	font-size: 1em;
	outline: none;
	user-select: none;
	margin-top: 1em;
	cursor: pointer;

	@media screen and (min-width: 1180px) {
		&:hover {
			color: white;
			background-color: #616a94;
		}
	}
`

const Question = styled.div`
	width: 70%;
	margin: 0 auto;
`

const Quiz = () => {
	const [quiz, setQuiz] = useState([])
	const [number, setNumber] = useState(0)
	const [pts, setPts] = useState(0)

	const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

	const pickAnswer = (e) => {
		let userAnswer = e.target.outerText

		if (quiz[number].answer === userAnswer) setPts(pts + 1)
		setNumber(number + 1)
	}
	const results= [
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `le nom de code de la "bataille de Dunkerque" livrée par les armées française et britannique, fin mai-début juin 1940, contre l'armée allemande ?`,
			"correct_answer": "Opération dynamo",
			"incorrect_answers": [
				`Operation sauvé dunkurque`,
				`Opération black ace`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Quel était le but de cette opération ? `,
			"correct_answer": "Libérer les soldats alliés pris au piège dans la poche de Dunkerque",
			"incorrect_answers": [
				`Tué Hitler`,
				`Détruire une base aérienne française contrôlée par les Allemands`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Quand a eu lieu cette opération ?`,
			"correct_answer": "Du 26 mai au 4 juin 1940",
			"incorrect_answers": [
				`Du 30 mai au 10 juin 1940`,
				`Du 26 mai au 4 juin 1941`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Combien d'hommes ont finalement été évacués ?`,
			"correct_answer": "330 000",
			"incorrect_answers": [
				`340 000`,
				`350 000`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Qui a réalisé le film "Dunkerque" ?`,
			"correct_answer": "Christopher Nolan",
			"incorrect_answers": [
				`Clint Eastwood`,
				`Steven Spielberg`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Combien de Français ont été évacués ?`,
			"correct_answer": "139 997",
			"incorrect_answers": [
				`56 760`,
				`145 867`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Combien de bateaux ont servi à l'évacuation des soldats alliés ?`,
			"correct_answer": "Environ 370",
			"incorrect_answers": [
				`800`,
				`La troisième flotte de la Royal Navy`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Par qui la retraite des Alliés a-t-elle été couverte ?`,
			"correct_answer": "Les Français",
			"incorrect_answers": [
				`Les Belges`,
				`Les Bretons`
			]
		},
		{
			"category": "Science: Computers",
			"type": "multiple",
			"difficulty": "easy",
			"question": `Comment l'opération a-t-elle eu un aussi grand succès ?`,
			"correct_answer": "Hitler a hésité à faire avancer ses troupes",
			"incorrect_answers": [
				`Grâce à la contre-offensive alliée`,
				`Cesser-le-feu de Noël pour les Allemands, les Alliés les prennent par surprise`
			]
		},
		
	]
	const response_code = 0

	// const Questions = {
	// 	"response_code": 0,
	// 	"results": [
	// 		{
	// 			"category": "Science: Computers",
	// 			"type": "multiple",
	// 			"difficulty": "easy",
	// 			"question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
	// 			"correct_answer": "Final",
	// 			"incorrect_answers": [
	// 				"Static",
	// 				"Private",
	// 				"Public"
	// 			]
	// 		},
	// 		{
	// 			"category": "Science: Computers",
	// 			"type": "multiple",
	// 			"difficulty": "easy",
	// 			"question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
	// 			"correct_answer": "Binary",
	// 			"incorrect_answers": [
	// 				"JavaScript",
	// 				"C++",
	// 				"Python"
	// 			]
	// 		},
	// 		{
	// 			"category": "Science: Computers",
	// 			"type": "multiple",
	// 			"difficulty": "easy",
	// 			"question": "What is the domain name for the country Tuvalu?",
	// 			"correct_answer": ".tv",
	// 			"incorrect_answers": [
	// 				".tu",
	// 				".tt",
	// 				".tl"
	// 			]
	// 		},
	// 		{
	// 			"category": "Science: Computers",
	// 			"type": "multiple",
	// 			"difficulty": "easy",
	// 			"question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
	// 			"correct_answer": "Green",
	// 			"incorrect_answers": [
	// 				"Red",
	// 				"Blue",
	// 				"Yellow"
	// 			]
	// 		},
	// 		{
	// 			"category": "Science: Computers",
	// 			"type": "multiple",
	// 			"difficulty": "easy",
	// 			"question": "This mobile OS held the largest market share in 2012.",
	// 			"correct_answer": "iOS",
	// 			"incorrect_answers": [
	// 				"Android",
	// 				"BlackBerry",
	// 				"Symbian"
	// 			]
	// 		}
	// 	]
	// }
	useEffect(() => {
				setQuiz(
					results.map((item) => ({
						question: item.question,
						options: shuffle([...item.incorrect_answers, item.correct_answer]),
						answer: item.correct_answer,
					}))
				)
	}, [])

	return (
		<QuizWindow>
			{quiz[number] && (
				<>
					<Question dangerouslySetInnerHTML={{ __html: quiz[number].question }}></Question>

					<Options>
						{quiz[number].options.map((item, index) => (
							<Option
								key={index}
								dangerouslySetInnerHTML={{ __html: item }}
								onClick={pickAnswer}
							></Option>
						))}
					</Options>
				</>
			)}
			{number === 9 && <GameOver pts={pts} />}
		</QuizWindow>
	)
}

export default Quiz
