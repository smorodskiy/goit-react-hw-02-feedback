import React from 'react';
import { Component } from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
    this.title = props.title
  }
  render() {
    return (
      <section>
        <h2>{this.title}</h2>        
        {this.props.children}
      </section>
    );
  }
}

export { Section };
