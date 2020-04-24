import React from "react";

function Card({ img, alt }) {

  // let divStyle = {
    // backgroundImage: {img},
  //   width: "200px",
  //   height: "200px",
  //   border: "1px solid black"
  // }
  return (
    <div  className="card"> 
    <img src={img}  alt={alt}></img>
    </div>
   
  )
}

export default Card