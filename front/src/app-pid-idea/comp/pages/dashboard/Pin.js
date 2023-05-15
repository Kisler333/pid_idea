import React from "react";
import { useRef } from 'react';

function Pin({ imgSrc, name = 'recommend', link = '', pinSize,img }) {
  const myRef = useRef(null);
  const sizeClass = pinSize || (Math.random() < 0.33 ? 'small' : Math.random() < 0.66 ? 'medium' : 'large');
  const handleClick = (id) => {
    console.log(`Image ${id} clicked`);
    console.log(myRef.current.className); // logs the class name of the HTML object
    console.log(img);
    // console.log(myRef.current.classList.indexOf('active'));
    const keys = Object.keys(img.topic_submissions);
    let data=[]
     if(myRef.current.className === 'search')
     {
      img.tags.forEach(tag => {
        const topic={hobby_index:tag.title,timestamp:Date.now()}
        data=[...data,topic]
      });
      keys.forEach(key => {
        const topic={hobby_index:key,timestamp:Date.now()}
        data=[...data,topic]
      });
      console.log(data);
      // myRef.current.classList.add("search");
      myRef.current.classList.add("active");
     }
     else{
      // myRef.current.classList.remove("search");
      myRef.current.classList.remove("active");
     }
  }

// function Pin({ pinSize =5, imgSrc, name='life style', link="" }) {
  return (
    //pinSize instesd 'small'
    // <div className={`pin ${'large'}`}>
    <div className={`pin ${sizeClass}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>{name}</h3>
        <div ref={myRef} className="search" onClick={() => handleClick("like")}>
          <a href={link}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;
