import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import { PlayCircleIcon } from "lucide-react";
import BlurCircle from "./BlurCircle";


const TrailorSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">

            <p className="text-gray-300 font-medium text-lg">
                Trailers
            </p>


            {/* Video Player */}
            <div className="relative mt-6">

                <BlurCircle 
                    top="100px" 
                    right="-100px"
                />

                <ReactPlayer
                    src={currentTrailer.videoUrl}
                    controls
                    width="100%"
                    height="500px"
                />

            </div>


            {/* Trailer Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                {dummyTrailers.map((trailer) => (

                    <div
                        key={trailer.image}
                        onClick={() => setCurrentTrailer(trailer)}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                    >

                        <img
                            src={trailer.image}
                            alt="trailer"
                            className="
                                rounded-lg 
                                w-full 
                                h-full 
                                object-cover 
                                brightness-75
                                group-hover:brightness-50
                                transition
                            "
                        />


                        <PlayCircleIcon
                            strokeWidth={1.6}
                            className="
                                absolute
                                top-1/2
                                left-1/2
                                w-8
                                h-8
                                md:w-10
                                md:h-10
                                text-white
                                transform
                                -translate-x-1/2
                                -translate-y-1/2
                            "
                        />

                    </div>

                ))}

            </div>

        </div>
    );
};

export default TrailorSection;