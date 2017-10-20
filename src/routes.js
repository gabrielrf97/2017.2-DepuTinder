import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/app';
import Questionnaire from './containers/questionnaire';
import AnsweredQuestionsPanel from './containers/answeredQuestionsPanel';
import Ranking from './containers/ranking';
import SearchParlamentary from './containers/searchContainer/searchParlamentary';

export default (
  <Route>
    <Route exact path="/" component={App}>
      <Route exact path="/responder" component={Questionnaire} />
      <Route exact path="/listar_respostas" component={AnsweredQuestionsPanel} />
      <Route exact path="/ranking" component={Ranking} />
      <Route exact path="/search" component={SearchParlamentary} />
    </Route>
  </Route>
);
