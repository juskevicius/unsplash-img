import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Title from './components/title';
import SearchInput from './components/searchInput';
import Buttons from './components/buttons';
import ImageGrid from './components/imageGrid';
import SavedQueries from './components/savedQueries';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Title />
        <SearchInput />
        <Buttons />
        <SavedQueries />
        <ImageGrid />
      </Provider>
    );
  }
}

export default App;
