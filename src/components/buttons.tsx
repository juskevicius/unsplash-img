import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSubmit, saveSearch } from '../actions/fetchImages';

interface IProps {
  handleSubmit: Function;
  saveSearch: Function;
}

class Buttons extends Component<IProps> {
  render() {
    const { handleSubmit, saveSearch } = this.props;
    return (
      <div className="button">
        <div className="button--center">
          <button
            className="button__search"
            type="submit"
            value="search"
            onClick={(e: React.MouseEvent<HTMLElement>) => {handleSubmit(e)}}
          >
            {'Search'}
          </button>
          <button
            className="button__save"
            type="submit"
            value="save"
            onClick={(e: React.MouseEvent<HTMLElement>) => {saveSearch(e)}}
          >
            {'Save search results'}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { handleSubmit, saveSearch })(Buttons);
