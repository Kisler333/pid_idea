import React from "react";

function Pin({ imgSrc, name = 'life style', link = '', pinSize }) {
  const sizeClass = pinSize || (Math.random() < 0.33 ? 'small' : Math.random() < 0.66 ? 'medium' : 'large');
// function Pin({ pinSize =5, imgSrc, name='life style', link="" }) {
  return (
    //pinSize instesd 'small'
    // <div className={`pin ${'large'}`}>
    <div className={`pin ${sizeClass}`}>
      <img src={imgSrc} alt="" className="mainPic" />

      <div className="content">
        <h3>{name}</h3>
        <div className="search">
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
