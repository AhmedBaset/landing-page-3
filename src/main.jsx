import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";
console.log(HashRouter);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter base="/">
			<App />
		</HashRouter>
	</React.StrictMode>
);
