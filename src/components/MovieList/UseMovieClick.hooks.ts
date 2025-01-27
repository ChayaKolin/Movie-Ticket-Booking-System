import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useMovieClick = () => {
  const navigate = useNavigate();

  const handleMovieClick = useCallback((movieId: number) => {
    navigate(`/movie/${movieId}/showtimes`);
  }, [navigate]);

  return { handleMovieClick };
};

export default useMovieClick;
