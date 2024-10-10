import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export const MovieDetail = () => {
  const param = useParams();
  const [movie, setMovie] = useState(null); // Initialize with null to handle loading state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const image = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const json = await response.json();
        setMovie(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Loading completed
      }
    };
    fetchData();
  }, [param.id]);

  // Display loading message or error message
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>

        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
          <p className="my-4">{movie.overview}</p>

          {movie.genres && movie.genres.length > 0 && (
            <div className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <FaStar className="w-5 h-5 text-yellow-400" />
            <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime ? `${movie.runtime} min.` : "N/A"}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date || "N/A"}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              {movie.imdb_id || "N/A"}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
