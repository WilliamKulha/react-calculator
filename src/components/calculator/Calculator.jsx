import React, {Component} from 'react'
import CSSModules from 'react-css-modules';
import Display from 'components/calculator/Display';
import Clear from 'components/calculator/Clear';
import Numbers from 'components/calculator/Numbers';
import Operators from 'components/calculator/Operators';
import styles from './styles/calculator-style.scss';

class Calculator extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      calculation: [],
      currentDisplay: ''
    }
  }

  handleClearClick = () => {
    this.setState({calculation: []})
  }

  render() {
    return(
      <div>
        <Display 
          display={this.state.currentDisplay}
        />
        <Clear 
          handleClick={this.handleClearClick}
        />
        <Numbers 

        />
        <Operators 
        
        />
      </div>
    )
  }
};

export default CSSModules(Calculator, styles)
