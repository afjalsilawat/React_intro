import React from 'react'
import Card from './Card'
import pic from'../src/assets/pic1.jpeg'
import abc from'../src/assets/pic4.jpg'
import xyz from'../src/assets/pic0.jpeg'
import './Home.css'

function Home({data}) {
  return (
    <>
       <div className='rr'>
     {

      data.map((i) => (
       
        <Card
        iamge={i.iamge}
        price={i.price}
        name={i.name}
        id={i.id}
        />
       
        
        
      ))
     }
      </div>
     

     
     
    </>
  )
}



export default Home