import React, { useEffect, useState } from "react";
import { dummyShowsData, dummyDateTimeData } from "../assets/assets";
import { Heart, StarIcon, PlayCircle } from "lucide-react";
import timeFormat from "../lib/timeformat";
import { useNavigate, useParams } from "react-router-dom";
import BlurCircle from "../components/BlurCircle";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);

  const getShow = async () => {
    const movie = dummyShowsData.find((movie) => movie._id === id);

    if (movie) {
      setShow({
        movie,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      {/* Movie Details Section */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />

        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />

          <p className="text-primary font-medium">English</p>

          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>

          {/* Rating */}

          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />

            <span>{show.movie.vote_average.toFixed(1)} User Rating</span>
          </div>

          {/* Overview */}

          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>

          {/* Movie Info */}

          <p className="text-gray-300 text-sm">
            {timeFormat(show.movie.runtime)}

            {" . "}

            {show.movie.genres.map((genre) => genre.name).join(", ")}

            {" . "}

            {show.movie.release_date.split("-")[0]}
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap items-center gap-4 mt-5">
            {/* Trailer Button */}

            <button
              className="
                            flex items-center gap-2
                            bg-primary
                            hover:bg-primary-dull
                            text-white
                            px-6 py-3
                            rounded-full
                            font-medium
                            transition
                            cursor-pointer
                            "
            >
              <PlayCircle className="w-5 h-5" />
              Watch Trailer
            </button>

            {/* Buy Ticket Button */}

            <a
              href="#dateSelect"
              className="
                            bg-white
                            text-black
                            hover:bg-gray-200
                            px-8 py-3
                            rounded-full
                            font-medium
                            transition
                            cursor-pointer
                            "
            >
              Buy Tickets
            </a>

            {/* Favourite Button */}

            <button
              className="
                            border
                            border-gray-500
                            hover:border-primary
                            hover:text-primary
                            p-3
                            rounded-full
                            transition
                            cursor-pointer
                            "
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cast Section */}

      <p className="text-lg font-medium mt-20">Your Favourite Cast</p>

      <div className="overflow-x-auto mt-8 pb-4 no-scrollbar">
        <div className="flex items-center gap-6 w-max px-2">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-24"
            >
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="
                                        rounded-full
                                        h-20
                                        md:h-24
                                        aspect-square
                                        object-cover
                                        "
              />

              <p
                className="
                                    text-sm
                                    text-gray-300
                                    mt-2
                                    truncate
                                    w-full
                                    "
              >
                {cast.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <DateSelect dateTime={show.dateTime} id={id} />

      <p className="text-lg font-medium mt-20 mb-8">You may also like</p>

      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0,0)
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Show more
        </button>
      </div>
    </div>
  ) : <Loading/>
};

export default MovieDetails;