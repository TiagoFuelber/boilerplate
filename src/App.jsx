import React from "react";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "./view/ui/styles/GlobalStyle";
import StartPage from "./view/start-page/StartPage";
import QuizPage from "./view/quiz/QuizPage";
import store from "./state/store";

library.add(faTimes);

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
