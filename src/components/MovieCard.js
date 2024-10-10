import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const { id, original_title, overview, poster_path, vote_average } = movie;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 transition-transform transform hover:scale-105">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg transition-transform transform hover:scale-110"
          src={poster_path ? image : "https://via.placeholder.com/500x750"}
          alt={original_title}
        />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        {vote_average && (
          <div className="flex items-center mb-3">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="font-bold text-gray-900 dark:text-white">{vote_average}</span>
          </div>
        )}
        <div className="flex flex-wrap">
          {/* Example genres array, modify according to your actual data structure */}
          {movie.genres && movie.genres.map((genre, index) => (
            <span key={index} className="bg-blue-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
