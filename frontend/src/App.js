import { useSelector } from "react-redux";
import "./App.css";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
	const curPage = useSelector((store) => store.currentPage);

	let output;

	switch (curPage) {
		case "home":
			output = <Home />;
      break;
    case "signup":
      output=<Signup/>
      break;
    default:
      output=<h1> 404 error</h1>
	}

	return output;
}

export default App;
