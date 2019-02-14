import React, {Component} from 'react';

export default class Clear extends Component{

  render() {
    return (
        <button onClick={this.props.handleClick}>Clear</button>
    )
  }
}

