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
import AddPin from './addPin/addPin';
import { useRef } from 'react';

const Dashboard = (props) => {
  // const handleContinue =() =>{
  //     props.handleContinue()
  //function App() {
   const myRef = useRef(null);

  const [imgArray, setImgArray] = useState([])
  const [inputValue, setInputValue] = useState('');
  const searchBar = async (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    const url ='http://127.0.0.1:8000/api/users/dashboard'
    const imagesFromApi = await axios.post(url, {search:e.target.value})  
    setImgArray(imagesFromApi.data.images)
  }
  const handleUpload=()=>{
    myRef.current.classList.add("visible");
    myRef.current.classList.remove("hide");
  }
  const handleCancle=()=>{
    myRef.current.classList.add("hide");
    myRef.current.classList.remove("visible");
    }

  const fetchImg = async() => {
   const url ='http://127.0.0.1:8000/api/users/dashboard'
   //rockstar,90's vibe,draw
    const imagesFromApi = await axios.post(url,{search:"ballet,rock"}) 
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
            <div onClick={handleUpload}>
            <MenuContainer icon={<Add />}/>
            </div>
            {/* <MenuContainer icon={<Add />} /> */}
          </div>
        </div>
      </div>

      <main>
        <div ref={myRef} className='hide'>
          <AddPin handleCancle={handleCancle}>
            
          </AddPin>
          </div>
        <div className='header'>
        <div className="searchBox">
          <input type="text" placeholder="Search" value={inputValue} onChange={searchBar} />
          <div className="search" >
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
                name={Object.keys(img.topic_submissions).shift()}
                /* pinSize={data.size} */
                imgSrc={img.urls.regular}
                img={img}
              /*   name={data.name}
                link={data.link} */
              // userPrf={data.imgSrc}
              />
            ))}
        </div>
          </main>
    </div>
  );
}
export default Dashboard

