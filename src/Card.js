import React from "react";

function Card({ img }){
  return (
    <img src={img} className="card" alt="Current card"></img>
  )
}

export default Card