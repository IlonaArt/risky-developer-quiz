import React from 'react';
import {
  Link, useParams
} from "react-router-dom";
import { questions } from './App';

type QuestionPageParams = {
  id: string;
};

function QuestionPage() {
  const { id } = useParams<QuestionPageParams>();
  const question = questions[+id - 1];
  return (
    <div>
      <div>{id}. {question.text}</div>
      <ul className="answers">
        {Object.values(question.answers).map((answer) => (
          <li key={answer}>
            <label>
              <input type="radio" name="variant" />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      {
        (+id === questions.length)
        ? <Link className="primary-link" to='/result'>Посмотреть результат</Link>
        : <Link className="primary-link" to={`/question/${+id + 1}`}>Следующий вопрос</Link>
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