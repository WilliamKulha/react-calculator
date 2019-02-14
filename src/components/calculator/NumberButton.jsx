import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles/number-button.scss';

const NumberButton = (props) => (
  <button className="number-button" value={props.buttonValue} onClick={props.handleClick}>{props.buttonValue}</button>
)

export default CSSModules(NumberButton, styles);