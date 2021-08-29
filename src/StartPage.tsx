import React from 'react';
import {
  Link
} from "react-router-dom";

function StartPage() {
  return (
    <div className="container">
      <h1 className="heading">Насколько Вы рисковый разработчик?</h1>
      <Link className="primary-link centered" to="/question/1">Начать тест!</Link>
    </div>
  )
}

export default StartPage;
