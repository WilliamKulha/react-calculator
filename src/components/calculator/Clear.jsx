import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/clear.scss';

class Clear extends Component{

  render() {
    return (
        <button 
        className="clear"
        onClick={this.props.handleClick}>
        Clear
        </button>
    )
  }
}

export default CSSModules(Clear, styles);

