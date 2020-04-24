import React from "react";

function Card({ img, alt }) {

  let divStyle = {
    backgroundImage: img
  }
  return (
    <div style={ divStyle} className="card"> 
    {/* <img src={img}  alt={alt}></img> */}
    </div>
   
  )
}

export default Card