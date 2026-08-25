import React from 'react'
import { assets } from '../assets/assets'
import {ArrowRight, Clock, Calendar } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const Herosection = () => {
  const navigate=useNavigate();
  return (
    <div
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'
    >
      {/* Logo */}
      <img
        src={assets.marvelLogo}
        alt="logo"
        className="max-h-11 lg:h-11 mt-20"
      />

      {/* Title */}
      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>
        Guardians <br /> of the Galaxy
      </h1>

      {/* Meta Info */}
      <div className='flex items-center gap-4 text-gray-300'>

        <span>Action | Adventure | Sci-Fi</span>

        <div className='flex items-center gap-1'>
          <Calendar className='w-4.5 h-4.5' />
          2018
        </div>

        <div className='flex items-center gap-1'>
          <Clock className='w-4.5 h-4.5' />
          2h 8m
        </div>



      </div>
      <p className='max-w-md text -gray-300'>movie no one in the world</p>
      <button onClick={()=>navigate('/Movies')} className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium px-5 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
           explore Movies
           <ArrowRight className="w-5 h-5"/>
      </button>

    </div>
  )
}

export default Herosection