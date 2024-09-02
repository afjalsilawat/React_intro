import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';


function Card({ iamge, name, price, id }) {
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
                        <Link to={`/product-details/${id}`}><button>see more</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;
