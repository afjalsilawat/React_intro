import React from 'react'
import './Card.css'


function Card({iamge,name,price}) {
  return (
    <>
    {/* <div className='prnt'>
    <div className='main'>
        <div className='image' >
            <img src={image} alt="" />
        </div>
            <div className='contect'>
                <h3>name:{name}</h3>
                <h3>price:{price}</h3>
            </div>
        </div>

        </div> */}



   
<div className="parent1">
            <div className="main">
                <div className="shirt">
                <img src={iamge} alt="" />
                </div>
                <div className="content">
                <h3>name:{name}</h3>
                <h3>price:{price}</h3>
                {/* <h4>Buy now</h4> */}
                </div>
            </div>
            </div>
       
    </>
  )
}

export default Card;
