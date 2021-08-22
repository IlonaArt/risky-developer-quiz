import React from 'react';
import {
  Link
} from "react-router-dom";

function ResultPage() {
  return (
    <Link className="primary-link" to="/question/:id">Пройти заново</Link>
  )
}

export default ResultPage;