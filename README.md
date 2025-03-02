# Moviepoint

Moviepoint is a feature-rich movie discovery and recommendation platform that helps users find, explore, and save their favorite films. With a modern interface and comprehensive movie database, Moviepoint makes it easy to discover new releases, classics, and hidden gems.

## Features

- **Movie Discovery**: Browse and search through an extensive catalog of movies
- **Personalized Recommendations**: Get movie suggestions based on your preferences and viewing history
- **User Profiles**: Create and customize your profile to track your movie journey
- **Watchlists**: Save movies to personalized watchlists for future viewing
- **Reviews & Ratings**: Share your opinions and read reviews from other movie enthusiasts
- **Movie Details**: Access comprehensive information including cast, crew, trailers, and more
- **Genre Exploration**: Discover movies by genre, director, actor, or release year
- **Responsive Design**: Enjoy a seamless experience across all devices
- **Dark/Light Mode**: Choose your preferred viewing experience
- **Social Sharing**: Share your favorite movies with friends on social media

## Tech Stack

- **Frontend**:
  - React.js
  - Redux for state management
  - Styled Components / CSS Modules
  - Material UI / Bootstrap components
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database storage
  - Mongoose ODM
  
- **API Integration**:
  - TMDb (The Movie Database) API
  - YouTube API for trailers
  
- **Authentication**:
  - JWT (JSON Web Tokens)
  - Google/Facebook OAuth options

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn
- TMDb API key (get it from [themoviedb.org](https://www.themoviedb.org/))

### Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/harryhome1/Moviepoint.git
   cd Moviepoint
   ```

2. Install dependencies for both frontend and backend:
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory with the following variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/moviepoint
     JWT_SECRET=your_jwt_secret_key
     TMDB_API_KEY=your_tmdb_api_key
     NODE_ENV=development
     ```
   - Create a `.env` file in the client directory:
     ```
     REACT_APP_API_URL=http://localhost:5000/api
     REACT_APP_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/
     ```

4. Start the development servers:
   ```
   # Start backend server (from server directory)
   npm run dev

   # Start frontend server (from client directory)
   npm start
   ```

5. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## Project Structure

```
Moviepoint/
├── client/                # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── assets/        # Images, icons, etc.
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux state management
│   │   ├── services/      # API service integration
│   │   ├── styles/        # Global styles
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main application component
│   │   └── index.js       # Entry point
│   └── package.json       # Dependencies and scripts
│
├── server/                # Backend Node.js/Express application
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── services/          # External API integration
│   ├── utils/             # Utility functions
│   ├── app.js             # Express app setup
│   ├── server.js          # Server entry point
│   └── package.json       # Dependencies and scripts
│
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return token
- `POST /api/auth/refresh` - Refresh authentication token

### User Management
- `GET /api/users/profile` - Get current user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/password` - Update password

### Movies
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/popular` - Get popular movies
- `GET /api/movies/top-rated` - Get top-rated movies
- `GET /api/movies/upcoming` - Get upcoming movies
- `GET /api/movies/search` - Search for movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/:id/similar` - Get similar movies
- `GET /api/movies/:id/recommendations` - Get movie recommendations
- `GET /api/movies/:id/videos` - Get movie trailers and videos

### Watchlists
- `GET /api/watchlist` - Get user's watchlist
- `POST /api/watchlist` - Add movie to watchlist
- `DELETE /api/watchlist/:movieId` - Remove movie from watchlist

### Reviews
- `GET /api/reviews/movie/:movieId` - Get reviews for a movie
- `POST /api/reviews` - Add a new review
- `PUT /api/reviews/:id` - Update a review
- `DELETE /api/reviews/:id` - Delete a review

### Genres
- `GET /api/genres` - Get all movie genres

## Features in Development

- **Personalized Recommendations AI**: Enhanced recommendation system using machine learning
- **User-to-User Recommendations**: Allow users to recommend movies to friends
- **Advanced Filtering**: Filter movies by multiple criteria
- **Watch Parties**: Schedule virtual movie watching events with friends
- **Mobile Apps**: Native applications for iOS and Android
- **Offline Mode**: Access saved movie information without internet connection

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## Deployment

### Production Build
1. Build the frontend:
   ```
   cd client
   npm run build
   ```
2. Set up production environment variables
3. Start the production server:
   ```
   cd server
   npm start
   ```

### Deployment Options
- Heroku
- Vercel (frontend) + Heroku (backend)
- AWS (EC2, S3, CloudFront)
- DigitalOcean

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- The Movie Database (TMDb) for providing the movie data API
- All contributors who have helped build and improve Moviepoint
- The open-source community for the amazing libraries and tools
