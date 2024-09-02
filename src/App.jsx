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
import ppp from'../src/assets/pic11.jpg'
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Home'
import About from './About'
import Count from './Count'
import ProductDetail from './ProductDetail'


// import { GrFormUp, GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";
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
      name:'Umbrella',
  
    },
   
   {
    id:5,
    iamge:ppp,
    price:1000,
    name:'brd',
   },


   {
    id:6,
    iamge:ppp,
    price:1000,
    name:'brd',
   },

   {
    id:7,
    iamge:ppp,
    price:1000,
    name:'brd',
   },
   {
    id:8,
    iamge:ppp,
    price:1000,
    name:'brd',
   }


   
  ]

  return (
   
    <>


     {/* <Header/>
     <Slider/> */}
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

     
     



     <BrowserRouter>
     <Header/>
     <Routes>
      
     <Route path='/'element={<Home data={data}/>}></Route>
     <Route path='/about'element={<About/>}></Route>
     <Route path='/count'element={<Count/>}></Route>
     <Route path='/product-details/:id'element={<ProductDetail data={data}/>}></Route>
     </Routes>
     
     <Footer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
