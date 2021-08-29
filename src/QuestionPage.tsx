import React, { useState } from 'react';
import {
  Link, useParams
} from "react-router-dom";
import store from './store';

type QuestionPageParams = {
  id: string;
};

function QuestionPage() {
  console.log(store.userAnswers);
  
  const { id } = useParams<QuestionPageParams>();
  const question = store.questions[+id - 1];
  const [userAnswer, setUserAnswer] = useState<string>();
  return (
    <div>
      <div>{id}. {question.text}</div>
      <ul className="answers">
        {Object.entries(question.answers).map(([key, answer]) => (
          <li key={answer}>
            <label>
              <input type="radio" value={key} name="variant" onChange={(event) => setUserAnswer(event.target.value)} />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      {
        (+id === store.questions.length)
          ? <Link className="primary-link" to='/result' onClick={() => { if (userAnswer !== undefined) store.addUserAnswer(+id, userAnswer)}}>Посмотреть результат</Link>
          : <Link onClick={() => { if (userAnswer !== undefined) store.addUserAnswer(+id, userAnswer)}} className="primary-link" to={`/question/${+id + 1}`}>Следующий вопрос</Link>
      }
      {
        (+id > 1)
          ? <Link className="primary-link back" to={`/question/${+id - 1}`}>Предыдущий вопрос</Link>
          : null
      }
    </div>
  )
}

export default QuestionPage;