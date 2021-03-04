import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Customize from "./Pages/Customize";
const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/customize">
					<Customize />
				</Route>
				<Route path="*">404 page not found</Route>
			</Switch>
		</BrowserRouter>
	);
};
export default App;
