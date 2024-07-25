import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import './App.css'
import Slider from './Slider'

import Footer from './Footer'
import Card from './Card'
import pic from'../src/assets/pic1.jpeg'
import abc from'../src/assets/pic4.jpg'
import xyz from'../src/assets/pic0.jpeg'

function App() {
  const [count, setCount] = useState(0)


  
 const data =[
  {
    id:1,
    iamge:abc,
    price:1000,
    name:'shirt',

  },

  {
    id:2,
    iamge:abc,
    price:2000,
    name:'shirt',
  },

  {
    id:3,
    iamge:pic,
    price:6000,
    name:'shirt',

  },

  {
    id:4,
    iamge:xyz,
    price:8000,
    name:'shirt',

  },
]
  return (
   
    <>
     <Header/>
     <Slider/>
     {/* <Card/> */}

     {/* <Card
     image={pic}
     name={'shirt'}
     price={400}
     />

     <Card
     image={abc}
     name={'Chamaeleon'}
     price={450}
     />


<Card
     image={xyz}
     name={'umbrella'}
     price={450}
     /> */}
<div className='rr'>
     {
      data.map((i) => (
        
        <Card
        iamge={i.iamge}
        price={i.price}
        name={i.name}
        />
        
      ))
     }
     </div>
     
     <Footer/>
      
    </>
  )
}

export default App
