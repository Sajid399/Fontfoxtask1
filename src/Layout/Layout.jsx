import React from 'react'
import backGroundImage from '../assets/backPic.png'
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import previousbtn from '../assets/Layer_7 (2).png'
import nextsbtn from '../assets/Layer_7 (1).png'
import { useNavigate } from 'react-router-dom';


const Layout = ({children}) => {
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/next_page')
  };

  // Function to handle clicking on the previous button
  const handlePreviousClick = () => {
    navigate('/')
  
  };
  return (
    <div className='h-full' style={{ backgroundImage: `url(${backGroundImage})`, backgroundSize: 'cover'}}>
        {children}
        <div className="w-full flex justify-center md:justify-between py-5">
      <button className="w-1/2 flex justify-center">
        <img src={icon1} alt="Icon 1" />
      </button>
      <div className="w-1/2 flex justify-center ">
        <div className='flex gap-2'>
          <button onClick={handlePreviousClick}>
            <img src={previousbtn} alt="Previous Button Icon" />
          </button>
          <div className='h-10 mt-1 rounded-lg bg-[#cd3f97] flex justify-center items-center w-24  text-white'>
          1
          </div>
          <button onClick={handleNextClick}>
            <img src={nextsbtn} alt="Next Button Icon" />
          </button>
        </div>
      </div>
      <button className="w-1/2 flex justify-center">
        <img src={icon2} alt="Icon 2" />
      </button>
    </div>
    </div>
  )
}

export default Layout