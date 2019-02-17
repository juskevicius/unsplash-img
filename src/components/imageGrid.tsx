import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImgLoader from './loader';
import { ImagesEntity, ReduxState } from '../actions/types';

interface IProps {
  images: ImagesEntity[];
  loading: boolean;
  keywords: string[];
};

class ImageGrid extends Component<IProps> {
  render() {
    const { images, loading, keywords } = this.props;
    const windowWidth = window.innerWidth;
    const imgWidth = windowWidth > 768 ? Math.floor(windowWidth / 3) : Math.floor(windowWidth / 2);
    const imgHeight = Math.floor(imgWidth / 1.333);
    return (
      <div className="image">
        <ImgLoader loading={loading} />
        {(keywords.length > 0 && images.length === 0 && !loading)
          && <div className="image__not-found">No images found. Please repeat the search using a different keyword</div>}
        {images && images.map(image => (
          <div 
            key={image.id}
            className="image__container"
          >
          <img 
            alt={image.description}
            src={image.urls.raw + `&w=${imgWidth}&h=${imgHeight}&fit=crop&dpi=2`}
          />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  images: state.fetchImg.images,
  loading: state.fetchImg.loading,
  keywords: state.fetchImg.keywords,
});

export default connect(mapStateToProps, {})(ImageGrid);
