import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './view/ui/styles/GlobalStyle';
import StartPage from './view/start-page/StartPage';
import QuizPage from './view/quiz/QuizPage';
import store from './state/store';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Normalize />
      <GlobalStyle />
      <Route exact path="/" component={StartPage} />
      <Route exact path="/quiz" component={QuizPage} />
    </HashRouter>
  </Provider>
);

export default App;
