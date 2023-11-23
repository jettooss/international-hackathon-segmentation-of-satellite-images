import React from 'react';
import './main.global.css';
import {rootReducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Header} from "./shared/Header";
import {Intro} from "./shared/Intro";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  return (
    <div className="container">
      <Header />
      <Intro />
    </div>
  );
}

export const App = () => 
  <Provider store={store}>
    <AppComponent />
  </Provider>
;
