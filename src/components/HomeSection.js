import React from "react"
import { useNavigate } from 'react-router-dom'


const HomeSection = props => {
    const navigate = useNavigate()

  return (
    <section onClick={()=>{ navigate(props.link)}} className="home-section">
      <picture>
        <img src={props.image} alt="picture" />
      </picture>
      <h1>{props.title}</h1>
      <p>
        {props.description ||
          `Lorem ipsum dolor sit, amet consectetur.`}
      </p>
    </section>
  )
}

export default HomeSection