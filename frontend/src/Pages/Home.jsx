import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import TodoMain from "../components/todoUi/TodoMain";
import ActivityList from "./ActivityList";
import * as action from "../Redux/action"

const Home = () => {
  const id = JSON.parse(localStorage.getItem("user"))._id;
  console.log(id);
  const [todos, setTodos] = useState();
  const [trig, setTrig] = useState(false);
  const dispatch=useDispatch()

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/todo/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => {setTodos(data.todos);dispatch(action.setTodo(data.todos))});
  }, [trig]);

  console.log(todos)

//   useEffect(() => {
//     const getUser = () => {
//       fetch("http://localhost:5000/user/google/success", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//         //   Accept: "application/json",
//           "Content-Type": "application/json",
//         //   "Access-Control-Allow-Credentials": true,
//         },
//       })
//         .then((res) => {
//           if (res.status === 200) return res.json();
//           throw new Error("Authentication has been failed");
//         })
//         .then((res) => {
//           setUser(res.user);
//         })
//         .catch((err) => console.log(err));
//     };
// 	getUser()
//   }, []);

//   console.log(user,"user")
  return (
    <div id="home">
      <Navbar setTrig={setTrig} />
      <TodoMain todo={todos} setTrig={setTrig} />
      {/* <ActivityList/> */}
    </div>
  );
};

export default Home;
