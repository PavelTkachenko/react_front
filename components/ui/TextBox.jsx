import React from 'react';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <span>{this.props.text}</span>;
  }
}

export default TextBox;