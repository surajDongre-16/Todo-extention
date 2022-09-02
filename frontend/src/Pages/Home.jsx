import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TodoMain from "../components/todoUi/TodoMain";
import ActivityList from "./ActivityList";

const Home = () => {
  const [user, setUser] = useState(null);

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
      <Navbar />
      <TodoMain />
      {/* <ActivityList/> */}
    </div>
  );
};

export default Home;
