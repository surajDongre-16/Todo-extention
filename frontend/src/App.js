import { useSelector } from "react-redux";
import "./App.css";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Completed from "./Pages/Completed";
import Upcoming from "./Pages/Upcoming";

function App() {
	const curPage = useSelector((store) => store.currentPage);

	let output;

	switch (curPage) {
    case "home":
      output = <Home />;
      break;
    case "signup":
      output = <Signup />;
      break;
    case "login":
      output = <Login/>;
      break
    case "completed":
      output=<Completed/>
      break;
    case "upcoming":
      output=<Upcoming/>
      break;
    default:
      output = <h1> 404 error</h1>;
  }

	return output;
}

export default App;
