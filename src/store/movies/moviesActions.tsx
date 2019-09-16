import {
  moviesActionTypes,
  LOAD_POPULAR_AND_UPCOMING,
  IResponseMovie,
  IMovieState,
  ISetMovieLoading,
  SET_MOVIE_LOADING,
  IApiResponse,
  LOAD_MORE_UPCOMING,
} from './moviesTypes';
import {Dispatch} from 'react';
import {movieAPI} from '../../api';
import axios from 'axios';
import {ReduxState} from '..';

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

export const setMoreUpcoming = (data: IApiResponse): moviesActionTypes => ({
  type: LOAD_MORE_UPCOMING,
  payload: data,
});

export const loadMoreUpcoming = () => {
  return (
    dispatch: Dispatch<moviesActionTypes>,
    getState: () => ReduxState,
  ) => {
    const {
      movies: {
        upcoming: {isLoading, currentPage, totalPages},
      },
    } = getState();
    if (!isLoading && currentPage !== totalPages && currentPage) {
      dispatch(setMovieLoading(['upcoming']));
      movieAPI
        .get<IApiResponse>('movie/upcoming', {
          params: {
            page: currentPage + 1,
          },
        })
        .then(response => {
          setTimeout(() => {
            dispatch(setMoreUpcoming(response.data));
          }, 1000);
        });
    }
  };
};

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
        }, 1000);
      }),
    );
  };
};
