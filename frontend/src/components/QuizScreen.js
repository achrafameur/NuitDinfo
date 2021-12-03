import React, { useState } from 'react'
import Start from './quiz/Start'
import Quiz from './quiz/Quiz'

function QuizScreen() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default QuizScreen ;
