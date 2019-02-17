export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const REMOVE_KEYWORD = 'REMOVE_KEYWORD';
export const SAVE_SEARCH = 'SAVE_SEARCH';
export const USE_SAVED_QUERY = 'USE_SAVED_QUERY';
export const FETCH_IMAGES = 'FETCH_IMAGES';

interface HandleChangeAction {
  type: typeof HANDLE_CHANGE;
  payload: SystemState['searchBox'];
}

interface HandleSubmitAction {
  type: typeof HANDLE_SUBMIT;
  payload: SystemState['searchBox'];
}

interface RemoveKeywordAction {
  type: typeof REMOVE_KEYWORD;
  payload: number;
}

interface SaveSearchAction {
  type: typeof SAVE_SEARCH;
}

interface UseSavedQueryAction {
  type: typeof USE_SAVED_QUERY;
  payload: SystemState['keywords'];
}

interface FetchImagesAction {
  type: typeof FETCH_IMAGES;
  payload: ImagesEntity[];
}

export type ActionTypes = HandleChangeAction | HandleSubmitAction | RemoveKeywordAction | SaveSearchAction | UseSavedQueryAction | FetchImagesAction;


export interface ReduxState {
  fetchImg: SystemState;
}

export interface SystemState {
  searchBox: string;
  keywords: string[];
  searches: string[][];
  images: ImagesEntity[];
  loading: boolean;
}

export interface ImagesEntity {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  urls: Urls;
  links: Links;
  categories?: (null)[] | null;
  sponsored: boolean;
  sponsored_by?: null;
  sponsored_impressions_id?: null;
  likes: number;
  liked_by_user: boolean;
  current_user_collections?: (null)[] | null;
  user: User;
  tags?: (TagsEntityOrPhotoTagsEntity)[] | null;
  photo_tags?: (TagsEntityOrPhotoTagsEntity)[] | null;
}
export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: null;
  portfolio_url: string;
  bio?: null;
  location: string;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}
export interface Links1 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}
export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}
export interface TagsEntityOrPhotoTagsEntity {
  title: string;
}
