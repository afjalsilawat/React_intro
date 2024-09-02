// import React, { useState } from 'react'

// function Count() {

//     const [count, setCount] = useState(1)

//     function inc(){
//         setCount(count + 1)
//     }
//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={inc}>Increment</button>
//     </>
//   )
// }

// export default Count


// dicrement


// import React,{useState} from "react";

// function count(){
   
//     const [count,setCount] = useState(0)

//     function dec(){
//         // setCount(count - 1)
//         if (count === 0 ){
//             setCount(5)
//         }
//         else{
//             setCount(count - 1)
//         }
  


//     }

//     function inc(){
//         // setCount(count + 1)
//         if(count === 5){
//             setCount(0)
//         }
//         else{
//             setCount(count + 1)
//         }
//     }

//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={dec}>decrement</button>
//         <button onClick={inc}>increment</button>
//         </>
//     )
// }

// export default count









  
// image increge



// import React, { useState } from 'react';

// const ImageSwitcher = () => {
 
//   const images = [
//     'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
//     'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
//     'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
//     'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'

//   ];

  
//   const [count, setCount] = useState(0);

 
//   const handleClick = () => {
    
//     setCount((prevCount) => (prevCount + 1) % images.length);
//   };

//   return (
//     <div>
//       <img 
//         src={images[count]} 
//         alt="Switchable" 
//         style={{ width: '300px', height: '200px' }} 
//       />
//       <button onClick={handleClick}>Next Image</button>
//     </div>
//   );
// };

// export default ImageSwitcher;






import React, { useEffect } from "react";
import { useState } from "react";
import{FcNext} from"react-icons/fc";
import"./Count.css";

function Count(){
  const [number,setNumber]= useState(1)

  const images = [
    {
      id:1,
      src:"https://static.vecteezy.com/system/resources/thumbnails/036/135/743/small_2x/ai-generated-colored-water-drops-on-abstract-background-water-drops-on-colorful-background-colored-wallpaper-ultra-hd-colorful-wallpaper-background-with-colored-bubbles-photo.jpg"
    },

    {
      id:2,
      src:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    
    {
      id:3,
      src:"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    },

    {
      id:4,
      src:"https://wallpapers.com/images/hd/hd-sunset-at-beach-w5ped7x6g3uo2o76.jpg"
    },

    {
      id:5,
      src:"https://wallpapers.com/images/featured/hd-nature-ngdfb9h966h4z3le.jpg"
    }
  ]


  const handleNext =() => {
    if(number===images.length - 1){
      setNumber(0);
    }
    else{
      setNumber(number +1)
    }
  }
  

  const handlePrev = () =>{
    if (number===0){
      setNumber(images.length - 1);
    }
    else{
      setNumber(number -1)
    }
   
};
useEffect(() =>{
  let interval = setInterval(() => {
    handleNext();
  },3000);
  return()=>clearInterval(interval);
})


return(
  <>
  <div className="main-box"> 
    <div className="image-display">
      {"  "}
      <img src={images[number].src}/>
    </div>
    <button onClick={handlePrev}className="next=btn">
      <FcNext/>
    </button>
    <br/>
    <button onClick={handleNext} className="prev-btn">
      next
    </button>
    <br/>
  </div>
  </>
)


}

export default Count

