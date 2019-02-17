import {
  ActionTypes,
  SystemState,
  HANDLE_CHANGE,
  HANDLE_SUBMIT,
  REMOVE_KEYWORD,
  SAVE_SEARCH,
  USE_SAVED_QUERY,
  FETCH_IMAGES,
} from '../actions/types';


const initialState: SystemState = {
  searchBox: '',
  keywords: [],
  searches: [],
  images: [],
  loading: false,
};

export default function (state = initialState, action: ActionTypes): SystemState {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        searchBox: action.payload,
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        keywords: [...state.keywords, action.payload],
        searchBox: '',
        loading: true,
      };
    case REMOVE_KEYWORD:
      return {
        ...state,
        keywords: [...state.keywords.slice(0, action.payload), ...state.keywords.slice(action.payload + 1)],
        loading: true,
      };
    case SAVE_SEARCH:
      return {
        ...state,
        keywords: [],
        searches: [
          ...state.searches,
          state.searchBox
            ? [...state.keywords, state.searchBox]
            : [...state.keywords]],
      };
    case USE_SAVED_QUERY:
      return {
        ...state,
        keywords: [...action.payload],
        loading: true,
      };
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
