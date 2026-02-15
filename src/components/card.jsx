import React from 'react'
import { RiBookmark3Fill } from '@remixicon/react'

const Card = (props) => {
  return (


    <div className="card">

      <div className="top">
        <img src={props.logo} alt={props.company} referrerPolicy="no-referrer" crossOrigin="anonymous" />

        <button>Save <RiBookmark3Fill size={10} /></button>
      </div>

      <div className="center">
        <h3>{props.company}<span>{props.posted}</span></h3>
        <h2>{props.post}</h2>
        <div>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4> {props.pay} </h4>
          <p>{props.location}</p>
        </div>
        <div>
          <button>
            Apply Now
          </button>
        </div>
      </div>
    </div>

  )
}

export default Card
