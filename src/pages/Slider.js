// import React, { useState, useEffect } from 'react';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// export const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleNextSlide();
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [currentSlide]);

//   return (
//     <div id="default-carousel" className="relative max-w-7xl mx-auto mt-7" data-carousel="slide">
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96 brightness-50">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`${currentSlide === index ? '' : 'hidden'} duration-700 ease-in-out transition-opacity`}
//             data-carousel-item
//           >
//             <img
//               src={slide}
//               className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
//             aria-current={currentSlide === index}
//             aria-label={`Slide ${index + 1}`}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>

//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={handlePrevSlide}
//       >
//         <GrFormPrevious className="w-10 h-10 text-cyan-50" />
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={handleNextSlide}
//       >
//         <GrFormNext className="w-10 h-10 text-cyan-50" />
//       </button>
//     </div>
//   );
// };

// // Array of static image URLs for slides
// const slides = [
//   'https://via.placeholder.com/1600x800?text=Slide+1',
//   'https://via.placeholder.com/1600x800?text=Slide+2',
//   'https://via.placeholder.com/1600x800?text=Slide+3',
//   'https://via.placeholder.com/1600x800?text=Slide+4',
// ];


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const API_KEY = 'ffe3e5bbfc4cebccef46e9c7c4903fde'; // Your TMDB API Key
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    // Fetch popular movie images from TMDB API
    const fetchMovies = async () => {
      try {
        const response = await axios.get(MOVIE_API_URL);
        const movies = response.data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        }));
        setSlides(movies);
      } catch (error) {
        console.error('Error fetching movies from TMDB', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 5000); // Adjusted the timer for a longer interval

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <div id="default-carousel" className="relative max-w-7xl mx-auto mt-7" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${currentSlide === index ? 'opacity-100' : 'opacity-0'} duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={slide.backdrop}
              className="absolute block w-full h-full object-cover transition-transform duration-1000 ease-in-out transform"
              alt={slide.title}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition duration-300 ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 transform -translate-y-1/2 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
        <GrFormPrevious className="w-10 h-10 text-cyan-50" />
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 transform -translate-y-1/2 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
        <GrFormNext className="w-10 h-10 text-cyan-50" />
      </button>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.backdrop}
            className={`w-20 h-12 object-cover rounded cursor-pointer transition transform duration-300 ${currentSlide === index ? 'border-2 border-blue-500' : ''}`}
            alt={slide.title}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};


