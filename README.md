# Movie Ticket Booking System - Frontend Development

## Project Overview
This project aims to develop a user-friendly React-based frontend for a Movie Ticket Booking System. The application allows users to browse movies, view showtimes, and book tickets.

## Functional Requirements

### Movie Listings
- Display a list of movies with details: title, genre, rating, and duration.
- Allow filtering by genre and rating.
- Search movies by title.
- Clicking a movie navigates to its showtime listing.

### Showtime Listings
- Display showtimes for selected movies, including theater, start time, and available seats.
- Show availability status (e.g., "Seats Available" or "Sold Out").

### Ticket Booking System
- Display seat availability for a selected showtime using a seat map.
- Allow users to select and book available seats.
- Display ticket summary (movie, showtime, selected seats, total price).

## Technical Requirements

### Frameworks and Tools
- **Frontend Framework:** React (with TypeScript).
- **State Management:** Redux,
- **UI Library:** shadcn/UI components or another preferred library (e.g., Material-UI, Ant Design).
- **Routing:** React Router.
- **Testing:** Jest and React Testing Library or Cypress.

### User Interface Requirements
- Design a responsive UI optimized for both desktop and mobile devices.
- Ensure usability with clear navigation, intuitive layouts, and consistent styling.
- Highlight available and selected seats visually on the seat map.

### Validation and Error Handling
- Validate user inputs (e.g., invalid search terms or selections).
- Handle errors gracefully (e.g., "Showtimes not found" or "Failed to fetch seat suggestions").

## Non-Functional Requirements
- Ensure modular, clean, and scalable code with reusable components.
- Use efficient state management to handle large datasets like seat availability.
- Optimize for performance, particularly during real-time updates like seat selection.

## Setup Instructions

### Prerequisites
- Node.js (v20.15.0)
- npm or yarn

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movieticketbookingsystem.git
   cd movieticketbookingsystem
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Mock API Configuration
- The application uses mock data for movies and showtimes. Ensure the mock data files are located in the `src/mockData` directory.

### Explanation of the AI Seat Suggestion Feature
- The AI seat suggestion feature is designed to recommend the best available seats based on user preferences and seat availability. This feature is implemented using a combination of algorithms and real-time data processing to ensure optimal seat selection.

## Redux Slice Explanation
The `moviesSlice` in the Redux store manages the state for movie listings and showtimes. It includes:
- **Initial State:** Contains mock movie data, filtered movies, showtimes, loading status, error messages, and filters.
- **Reducers:** 
  - `filterMovies`: Filters movies based on search term, selected genre, and selected rating.
  - `resetState`: Resets the filtered movies and filters to their initial state.

## Testing
- Run unit tests using Jest and React Testing Library:
  ```bash
  npm test
  # or
  yarn test
  ```