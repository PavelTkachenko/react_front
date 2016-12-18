import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <img { ...this.props }/>;
  }
}

export default Image;