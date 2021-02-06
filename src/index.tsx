import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App/App";
import reducers from "reducers";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={createStore(reducers)}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
