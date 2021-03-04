import ReactDOM from "react-dom";
import App from "./App";
//for styled-components
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
//for redux
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { rootReducer } from "./Reducers";

//create global store
const store = createStore(rootReducer, composeWithDevTools());

//React render
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
