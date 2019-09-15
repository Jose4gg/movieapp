import {
  moviesActionTypes,
  LOAD_POPULAR_AND_UPCOMING,
  IResponseMovie,
  IMovieState,
  ISetMovieLoading,
  SET_MOVIE_LOADING,
  IApiResponse,
} from './moviesTypes';
import {Dispatch} from 'react';
import {movieAPI} from '../../api';
import axios from 'axios';

export const setMovieLoading = (
  keys: (keyof IMovieState)[],
): ISetMovieLoading => ({
  type: SET_MOVIE_LOADING,
  payload: keys,
});

export const setPopularAndUpcoming = (
  popular: IResponseMovie,
  upcoming: IResponseMovie,
): moviesActionTypes => ({
  type: LOAD_POPULAR_AND_UPCOMING,
  payload: {
    popular,
    upcoming,
  },
});

export const loadPopularAndUpcoming = () => {
  return (dispath: Dispatch<moviesActionTypes>) => {
    dispath(setMovieLoading(['popular', 'upcoming']));

    function getPopular() {
      return movieAPI.get<IApiResponse>('movie/popular');
    }

    function getUpcoming() {
      return movieAPI.get<IApiResponse>('movie/upcoming');
    }

    axios.all([getPopular(), getUpcoming()]).then(
      axios.spread(function(popular, upcoming) {
        setTimeout(() => {
          dispath(
            setPopularAndUpcoming(
              {
                currentPage: popular.data.page,
                movies: popular.data.results,
                totalPages: popular.data.total_pages,
              },
              {
                currentPage: upcoming.data.page,
                movies: upcoming.data.results,
                totalPages: upcoming.data.total_pages,
              },
            ),
          );
        }, 0);
      }),
    );
  };
};
