import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useSavedQuery } from '../actions/fetchImages';
import { ReduxState } from '../actions/types';

interface IProps {
  searches: string[][],
  useSavedQuery: Function,
};

class SavedQueries extends Component<IProps> {
  render() {
    const { searches, useSavedQuery } = this.props;
    return (
      <div className="query">
        {searches.length > 0 && <div className="query__title">Saved searches:</div>}
        {searches.length > 0 && searches.map((search, index) => (
          <div key={index} className="query__unit" onClick={() => useSavedQuery(search)}>
            <span className="query__index">{index + 1}.</span>
            {search.map((kwrd, ind) => (
              <div className="query__keyword" key={ind}>{kwrd}</div>
            ))}
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  searches: state.fetchImg.searches,
});

export default connect(mapStateToProps, { useSavedQuery })(SavedQueries);
