import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Customize from "./Pages/Customize";
import Dev from "./Pages/Dev";
import Download from "./Components/Download";
const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Download />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/customize">
					<Customize />
				</Route>
				<Route path="/dev">
					<Dev />
				</Route>
				<Route path="*">404 page not found</Route>
			</Switch>
			{/* <Dev /> */}
		</BrowserRouter>
	);
};
export default App;
