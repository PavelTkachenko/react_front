import React from 'react';
import Image from './Image'
import TextBox from './Image'

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Image {...this.props.image}/>
        <TextBox text={this.props.text}/>
      </div>
    );
  }
}

export default BlogItem;