import React, { useState } from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import "./Slider.scss"

const Slider = () => {

    const [currentSlide,setCurrentSlide]= useState(0);
    
    const data= [
      " https://images.pexels.com/photos/7973008/pexels-photo-7973008.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=2000",
        "https://images.pexels.com/photos/1835660/pexels-photo-1835660.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?auto=compress&cs=tinysrgb&w=1600"
    ];

    const prevSlide=()=>{
      setCurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev-1);
    };
        
    const nextSlide=()=>{
      setCurrentSlide(currentSlide === 3 ? 0 : (prev)=> prev + 1 )
    }
      
  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt=""/>
        <img src={data[1]} alt=""/>
        <img src={data[2]} alt=""/>
        <img src={data[3]} alt=""/>
      </div>
      <div className="icons">
        <div className="icon icon-left" onClick={prevSlide}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon icon-right" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider
