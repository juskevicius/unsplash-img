import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange, handleSubmit, removeKeyword } from '../actions/fetchImages';
import { ReduxState } from '../actions/types';

interface IProps {
  handleChange: Function;
  handleSubmit: Function;
  removeKeyword: Function;
  searchBox: string;
  keywords: string[];
};

export class SearchInput extends Component<IProps> {
  render() {
    const {
      handleChange,
      handleSubmit,
      removeKeyword,
      searchBox,
      keywords,
    } = this.props;
    return (
      <div className="search">
        <form>
          <input
            className="search__input"
            name="searchBox"
            value={searchBox}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {handleChange(e)}}
            onKeyPress={event => event.key === 'Enter' && handleSubmit(event)}
          />
          <div className="search__keywords">
            {keywords.map((keyword, index) => (
              <div className="keyword" key={index}>
                {keyword}
                <i onClick={() => removeKeyword(index)} role="none">x</i>
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  searchBox: state.fetchImg.searchBox,
  keywords: state.fetchImg.keywords,
});

export default connect(mapStateToProps, { handleChange, handleSubmit, removeKeyword })(SearchInput);
