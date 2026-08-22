import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlurCircle from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden relative'>
      
      {/* Upper Header: Now Shopping & View All */}
      <div className='relative flex items-center justify-between pt-20 pb-10 z-10'> 
        <BlurCircle top='0' right='-80px' />

        <p className='text-gray-300 font-medium text-lg'>Now Shopping</p>
        
        <button 
          onClick={() => {
            navigate('/movies');
            window.scrollTo(0, 0);
          }} 
          className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
        >
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' />
        </button>
      </div>

      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0,4).map((show)=>(
          <MovieCard key={show._id}movie={show}/>
        ))}

      </div>

      {/* Center Button Section */}
      <div className="flex justify-center mt-20">
        <button 
          onClick={() => {
            navigate('/movies');
            window.scrollTo(0, 0);
          }} 
          /* dhyaan se dekhiye, yahan cursor-pointer ke baad single quote (') laga diya hai */
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull text-white transition rounded-md font-medium cursor-pointer'
        >
          show button
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;