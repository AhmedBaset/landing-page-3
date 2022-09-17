import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
console.log("done");

ReactDOM.createRoot(document.getElementById("root")).render(
	<HashRouter base="/template-react-stylish">
		<App />
	</HashRouter>
);
