import React from 'react';
import { Component } from 'react';

class Section extends Component {
  constructor(props) {
    this.title = props.title
  }
  render() {
    return (
      <section>
        <h2>{this.title}</h2>
      </section>
    );
  }
}

export { Section };
