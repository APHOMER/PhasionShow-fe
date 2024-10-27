import React from "react"
import "../../styles/event.css"
export default function Event({src, month, day, name, description}){
  return(
    <div className="main">
      <div>
        <img alt={name} src={src} />
      </div>

      <div className="details">
        <div className="date">
          <p className="month">{month}</p>
          <p className="day">{day}</p>
        </div>

        <div>
          <h3>{name}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  )
}