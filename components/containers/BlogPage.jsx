import React from 'react';
import BlogList from '../ui/BlogList';

const items = [
  {
    image: {
      src: "",
      width: 64,
      height: 64
    }, text: "Donald Trump"
  }, 
  {
    image: {
      src: "",
      width: 64,
      height: 64
    }, text: "Vladimir Putin"
  }, 
  {
    image: {
      src: "",
      width: 64,
      height: 64
    }, text: "Recep Erdogan"
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }
  
  render() {
    return <div><BlogList { this.state.items }/></div>;
  }
}

export default BlogPage;