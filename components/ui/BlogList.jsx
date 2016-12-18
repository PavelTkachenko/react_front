import React from 'react';
import BlogItem from './BlogItem';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const items = this.props.items.map((item, key) => {
      return <div key={key}><BlogItem {...item}/></div>;
    });
    return <div>{items}</div>;
  }
}

export default BlogList;