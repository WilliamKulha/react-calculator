import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/operators.scss';

const Operators = (props) => (
  <div className="operators-wrapper">
    <button className="operator-button" value="/" onClick={props.handleClick}>÷</button>
    <button className="operator-button" value="-" onClick={props.handleClick}>-</button>
    <button className="operator-button" value ="+" onClick={props.handleClick}>+</button>
    <button className="operator-button" value="=" onClick={props.handleClick}>=</button>
  </div>
)

export default CSSModules(Operators, styles);