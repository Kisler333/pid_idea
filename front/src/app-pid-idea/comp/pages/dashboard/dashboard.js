import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
////////////////////////////////////////////////////////
// import { StyleSheet, FlatList, ScrollView } from "react-native";
// import { View } from "../components/Themed";
// import { RootTabScreenProps } from "../types";
// import Pin from "../components/Pin";
// import pins from "../assets/data/pins";


import "./dashboard.css";
import { } from "@mui/material";
import { Add, Chat, Favorite, NotificationAdd, Person, QuestionMark } from "@mui/icons-material";
import { useEffect } from "react";
import MenuContainer from "./MenuContainer"
import Pin from "./Pin"
import Data from "./Data"


const Dashboard = (props) => {
  // const handleContinue =() =>{
  //     props.handleContinue()
  //function App() {
  const [imgArray, setImgArray] = useState([])
  const fetchImg = async() => {
   const url ='http://127.0.0.1:8000/api/users/dashboard'
    const imagesFromApi = await axios.get(url) 
    console.log(imagesFromApi.data.images);
   setImgArray(imagesFromApi.data.images)
   //console.log(imgArray)

  }
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }
   fetchImg()
    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      <div className="menuContainer">
        <img
          src="https://thumbs.dreamstime.com/b/lightbulb-flat-icon-red-circle-84219680.jpg"
          alt=""
          className="logo"
        />

        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<NotificationAdd />} />
            <MenuContainer icon={<Chat />} />
          </div>

          <div>
            <MenuContainer icon={<Favorite />} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
            {/* <MenuContainer icon={<Add />} /> */}
          </div>
        </div>
      </div>

      <main>
        <div className='header'>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
          <div className="search">
            {/* <img
                  src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
                  alt=""
                /> */}
          </div>
        </div>
        </div>

        <div className="mainContainer">
          {imgArray &&
            imgArray.map((img) => (
              <Pin
                key={img.id}
                /* pinSize={data.size} */
                imgSrc={img.urls.regular}
              /*   name={data.name}
                link={data.link} */
              // userPrf={data.imgSrc}
              />
            ))}
        </div>
          </main>
    </div>
  );
  //}
  // return (
  //   <div className='dashboardPage'>search bar
  //   {/* let head = <div><h1>Welcome to PidIdea!</h1><h3 className='subtitle'>Let's get started:)</h3></div>
  //   let content = <div className='buttons myhandleSignUpMode-3 w-100  d-flex justify-content-center pb-5  '></div> */}

  //   <h1>hi walabala</h1>
  //  </div>

  // )
}
// <div className='menuContainer'></div>
//}


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// export default function HomeScreen({
//   navigation,
// }) {
//   return (
//     React.createElement(ScrollView, null, 
//       React.createElement(View, { style: styles.container },
//         React.createElement(View, { style: styles.column },
//           pins
//             .filter(function(_, index) { return index % 2 === 0 })
//             .map(function(pin) { return React.createElement(Pin, { pin: pin, key: pin.id }); })
//         ),
//         React.createElement(View, { style: styles.column },
//           pins
//             .filter(function(_, index) { return index % 2 === 1 })
//             .map(function(pin) { return React.createElement(Pin, { pin: pin, key: pin.id }); })
//         )
//       )
//     )
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     flexDirection: "row",
//   },
//   column: {
//     flex: 1,
//   },
// });


export default Dashboard

