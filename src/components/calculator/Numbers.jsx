import React, {Component} from 'react';
import NumberButton from 'components/calculator/NumberButton';
import CSSModules from 'react-css-modules';
import styles from './styles/numbers-container.scss';

class Numbers extends Component {

  createButtons = () => {
    for(let i = 1; i <= 9; i ++) {
      return(
      <NumberButton 
        buttonValue = {i}
        handleClick = {this.props.handleClick}
      />
      )
    }
  }

  render() {
    return(
      <div className="numbers-container">
        {this.createButtons()}
      </div>
    )
  }

}

export default CSSModules(Numbers, styles);