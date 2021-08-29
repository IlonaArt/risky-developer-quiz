import React from 'react';
import {
  Link
} from "react-router-dom";
import store from './store';

const getResultText = (total: number): string => {
  if (total >= 0 && total < 5) {
    return 'Вы не любите рисковать, предпочитая в целом более размеренный ритм жизни. Можно сказать, что в Вашей работе довольно много порядка и на Вас можно положиться. С Вами приятно работать.'
  }
  if (total >= 5 && total < 10) {
    return 'У Вас умеренная склонность к риску, при этом Ваши косяки по работе не сильно заметны. С Вами проект навряд ли развалится.'
  }
  if (total >= 10 && total <= 15) {
    return 'Вы будете тем самым человеком, который добавит “перчинки” в любой проект. С Вами не соскучишься!'
  }
  return 'Произошла ошибка. Попробуйте перезагрузить страницу.'
};

const declention = (total: number, titles: Array<string>) => {
  let decCache: Array<number> = [];
  let decCases = [2, 0, 1, 1, 1, 2];
  if(!decCache[total]) decCache[total] = total % 100 > 4 && total % 100 < 20 ? 2 : decCases[Math.min(total % 10, 5)];
  return titles[decCache[total]];
}

function ResultPage() {
  const total = store.getResult();

  return (
    <>
      <div>Вы набрали {total} {declention(total, ['балл', 'балла', 'баллов'])}</div>
      <p>{getResultText(total)}</p>
      <Link className="primary-link" to="/question/:id">Пройти заново</Link>
    </>
  )
}

export default ResultPage;