export const SET_MOVIE_LOADING = 'SET_MOVIE_LOADING';
export const LOAD_POPULAR_AND_UPCOMING = 'LOAD_HOT_AND_UPCOMING';
export const LOAD_MORE_UPCOMING = 'LOAD_MORE_UPCOMING';

export interface ILoadPopularAndUpcoming {
  type: typeof LOAD_POPULAR_AND_UPCOMING;
  payload: {
    popular: IResponseMovie;
    upcoming: IResponseMovie;
  };
}

export interface ISetMovieLoading {
  type: typeof SET_MOVIE_LOADING;
  payload: (keyof IMovieState)[];
}

export interface ILoadMoreUpcoming {
  type: typeof LOAD_MORE_UPCOMING;
  payload: IApiResponse;
}

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  vote_average: string;
  poster_path: string;
  release_date: string;
}

export interface IApiResponse {
  results: IMovie[];
  page: number;
  total_pages: number;
}

export interface IResponseMovie {
  movies: IMovie[];
  currentPage: null | number;
  totalPages: null | number;
}

export interface IResponse extends IResponseMovie {
  isLoading: boolean;
}

export interface IMovieState {
  popular: IResponse;
  upcoming: IResponse;
}

export type moviesActionTypes =
  | ILoadPopularAndUpcoming
  | ISetMovieLoading
  | ILoadMoreUpcoming;
