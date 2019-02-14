import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './app-styles.scss';
import Calculator from 'components/calculator/Calculator';

const App = () => (
  <Calculator />
);

export default CSSModules(App, styles);