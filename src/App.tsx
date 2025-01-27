import React from 'react';
import {IntlProvider} from 'react-intl';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import MovieDetails from './components/MovieDetails/MovieDetails.tsx';
import MovieList from './components/MovieList/MovieList.tsx';
import './styles/mixins.scss';
import './styles/globals.scss';

const App: React.FC = () => (
  <IntlProvider locale="en">
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:movieId/showtimes" element={<MovieDetails />} />
    </Routes>
  </Router>
  </IntlProvider>
);

export default App;
