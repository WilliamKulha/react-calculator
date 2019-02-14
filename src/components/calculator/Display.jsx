import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/display.scss';

const Display = (props) => (
  <div className="display">
  <span>{props.display}</span>
  </div>
)

export default CSSModules(Display, styles)