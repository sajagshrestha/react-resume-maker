import { BrowserRouter, Route, Switch } from "react-router-dom";
const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					test
				</Route>
				<Route path="/customize">test customize</Route>
				<Route path="*">404 page not found</Route>
			</Switch>
		</BrowserRouter>
	);
};
export default App;
