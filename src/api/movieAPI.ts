import axios from 'axios';
import {MOVIEDB_TOKEN} from 'react-native-dotenv';

export const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 30000,
});

movieAPI.interceptors.request.use(config => ({
  ...config,
  params: {
    api_key: MOVIEDB_TOKEN,
    ...config.params,
  },
}));
