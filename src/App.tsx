import React from 'react';
import './App.css';
import StartPage from './StartPage';
import QuestionPage from  './QuestionPage';
// import ResultPage from './ResultPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
interface Question {
  text: string;
  answers: Record<string, string>;
}

export const questions: Array<Question> = [
  {
    text: 'Как часто Вы используете в своем коде git push --force?',
    answers: {
      a: 'Довольно часто',
      b: 'Иногда',
      c: 'Не использую',
    }
  },
  {
    text: 'В Вашем коде много повторяющихся сущностей?',
    answers: {
      a: 'Много, да почти весь проект из них состоит',
      b: 'Среднее количество',
      c: 'Очень мало (где-то 2 от силы)',
    }
  },
  {
    text: 'Увлекаетесь ли Вы экстремальными видами спорта (горные лыжи, скейтбординг и т.д.)?',
    answers: {
      a: 'Не только увлекаюсь, но и регулярно практикую',
      b: 'Пробовал/а, иногда могу прокатиться сам/а или с друзьями',
      c: 'Нет, это слишком опасно',
    }
  },
]

export const onClick = (data: string): boolean => {
  return true;
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/question/:id">
            <QuestionPage />
          </Route>
          {/* <Route path="/result">
            <ResultPage />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
