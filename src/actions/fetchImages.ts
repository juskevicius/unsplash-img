import axios from 'axios';
import { Dispatch } from 'redux';
import {
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
  REMOVE_KEYWORD,
  SAVE_SEARCH,
  USE_SAVED_QUERY,
  FETCH_IMAGES,
  SystemState,
} from './types';

export const handleChange = (event: React.FormEvent<HTMLInputElement>) => (dispatch: Dispatch) => {
  const value = event.currentTarget.value;
  dispatch({
    type: HANDLE_CHANGE,
    payload: value,
  });
};

export const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => (dispatch: Dispatch, getState: Function ) => {
  event.preventDefault();
  const searchTerm = getState().fetchImg.searchBox.trim();
  if (searchTerm) {
    dispatch({
      type: HANDLE_SUBMIT,
      payload: searchTerm,
    });
    const query = getState().fetchImg.keywords.toString();
    const url = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: FETCH_IMAGES,
          payload: response.data.results,
        });
      });
  }
};

export const removeKeyword = (index: Number) => (dispatch: Dispatch, getState: Function) => {
  dispatch({
    type: REMOVE_KEYWORD,
    payload: index,
  });
  const query = getState().fetchImg.keywords.toString();
  const url = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_IMAGES,
        payload: response.data.results,
      });
    });
};

export const saveSearch = (event: React.FormEvent<HTMLInputElement>) => (dispatch: Dispatch, getState: Function) => {
  event.preventDefault();
  if (getState().fetchImg.keywords.length > 0 || getState().fetchImg.searchBox) {
    dispatch({
      type: SAVE_SEARCH,
    });
  }
};

export const useSavedQuery = (savedQuery: SystemState['keywords']) => (dispatch: Dispatch, getState: Function) => {
  dispatch({
    type: USE_SAVED_QUERY,
    payload: savedQuery,
  });
  const query = getState().fetchImg.keywords.toString();
  const url = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_IMAGES,
        payload: response.data.results,
      });
    });
};
