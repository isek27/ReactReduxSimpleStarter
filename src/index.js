import "materialize-css/dist/css/materialize.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers"; // folder find the index file

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Redux app layout
ReactDOM.render(
  	<Provider store={store}>
  		<App />
  	</Provider>
  , document.querySelector("#root")
);
