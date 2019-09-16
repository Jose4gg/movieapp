import {IMovieState, moviesActionTypes, IResponse} from './moviesTypes';

const initialState: IMovieState = {
  popular: {
    isLoading: false,
    movies: [],
    currentPage: null,
    totalPages: null,
  },
  upcoming: {
    isLoading: false,
    movies: [],
    currentPage: null,
    totalPages: null,
  },
};

export function moviesReducer(
  state: IMovieState = initialState,
  action: moviesActionTypes,
): IMovieState {
  switch (action.type) {
    case 'SET_MOVIE_LOADING': {
      const newState: {
        [name: string]: IResponse;
      } = {};
      action.payload.map(key => {
        newState[key] = state[key];
        newState[key].isLoading = true;
      });
      return {
        ...state,
        ...newState,
      };
    }
    case 'LOAD_HOT_AND_UPCOMING': {
      return {
        ...state,
        upcoming: {
          ...action.payload.upcoming,
          isLoading: false,
        },
        popular: {
          ...action.payload.popular,
          isLoading: false,
        },
      };
    }
    case 'LOAD_MORE_UPCOMING': {
      return {
        ...state,
        upcoming: {
          isLoading: false,
          currentPage: action.payload.page,
          movies: [...state.upcoming.movies, ...action.payload.results],
          totalPages: action.payload.total_pages,
        },
      };
    }
    default:
      return state;
  }
}
