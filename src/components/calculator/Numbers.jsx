import React, {Component} from 'react';
import NumberButton from 'components/calculator/NumberButton';
import CSSModules from 'react-css-modules';
import styles from './styles/numbers-container.scss';

class Numbers extends Component {

  createButtons = () => {
    let numberCarrier = []
    for(let i = 1; i <= 9; i ++) {
      numberCarrier.push(
      <NumberButton 
        key={i}
        buttonValue = {i}
        handleClick = {this.props.handleClick}
      />
      )
    }
    return numberCarrier;
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