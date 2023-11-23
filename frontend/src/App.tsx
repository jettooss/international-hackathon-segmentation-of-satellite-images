import React from 'react';
import './main.global.css';
import {Dialog} from "./shared/Dialog";
import {Mapgl} from "./shared/Mapgl";
import {rootReducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Dialog />
      <Mapgl />
    </div>
  );
}

export const App = () => 
  <Provider store={store}>
    <AppComponent />
  </Provider>
;
