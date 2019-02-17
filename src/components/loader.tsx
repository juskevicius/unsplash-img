import React from 'react';
import { DotLoader } from 'react-spinners';

interface IProps {
  loading: boolean;
}

export default class ImgLoader extends React.Component<IProps> {
  render() {
    const { loading } = this.props;
    return (
      <div className="dotLoader">
        <DotLoader
          sizeUnit="px"
          size={50}
          loading={loading}
        />
      </div>
    );
  }
}
