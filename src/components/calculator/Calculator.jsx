import React, {Component} from 'react'
import CSSModules from 'react-css-modules';
import Display from 'components/calculator/Display';
import Clear from 'components/calculator/Clear';
import Numbers from 'components/calculator/Numbers';
import Operators from 'components/calculator/Operators';
import styles from './styles/calculator.scss';
import math from 'mathjs';


class Calculator extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      calculation: [],
    }
  }

  handleClearClick = () => {
    this.setState({calculation: []})
  }

  handleNumberClick = (e) => {
    let tempState = this.state.calculation.slice();
    let newNumber = e.target.value;
    tempState.push(newNumber);
    this.setState({calculation: tempState});  
    console.log(this.state.calculation);  
  }

  handleOperatorClick = (e) => {
    let tempState = this.state.calculation.slice();
    let newOperator = e.target.value;
    if(newOperator === '=') { 
      try {
        let evaluated = [math.eval(this.state.calculation.join(''))]
        this.setState({calculation: evaluated});
      }
      catch(e) {
        this.setState({calculation: ['ERROR']});
      }
    } else {
      tempState.push(newOperator);
      this.setState({calculation: tempState});
      console.log(this.state.calculation);
    }
  }

  handleKeyPress = (e) => {
    let tempState = this.state.calculation.slice();
    let newValue = String.fromCharCode(e.keyCode);
    if(newValue === '=') { 
      try {
        let evaluated = [math.eval(this.state.calculation.join(''))]
        this.setState({calculation: evaluated});
      }
      catch(e) {
        this.setState({calculation: ['ERROR']});
      }
    } else {
      tempState.push(newValue);
      this.setState({calculation: tempState});
      console.log(this.state.calculation);
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  render() {
    return(
      <div className="calculator">
        <Display 
          display={this.state.calculation}
        />
        <Clear 
          handleClick={this.handleClearClick}
        />
        <Numbers 
          handleClick={this.handleNumberClick}
        />
        <Operators 
          handleClick={this.handleOperatorClick}        
        />
      </div>
    )
  }
};

export default CSSModules(Calculator, styles)
