import React from 'react'
import './card.css'
const Card = ({detail}) => {
  return (
    <>
<div className="cards border-0 bg-light " >
    <div className="cards-body ">
      <img className='w-25 h-25 d-flex mx-auto pb-5 pic'  src={detail.images} alt="" />
    <h2 className="card-title fw-bold text-center det pb-4">{detail.name}</h2>
    <p className="card-text text-black-50 fs-2 des">{detail.description}</p>
    </div>
</div>
    </>
  )
}

export default Card
