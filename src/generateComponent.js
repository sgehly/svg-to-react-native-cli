'use strict';

/**
 * Creates a full component string based upon provided svg data and a component name
 * @param  string svgOutput     The svg data, preformatted
 * @param  string componentName The name of the component without extension
 * @return string               The parsed component string
 */
module.exports = (svgOutput, componentName, width, height) => `
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
  ClipPath
} from 'react-native-svg';

export default class ${componentName} extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    opacity: PropTypes.number,
    style: PropTypes.any,
  }

  static defaultProps = {
    width: ${width},
    height: ${height},
    opacity: 1,
    style: {},
  };

  render() {
${svgOutput
  .split('\n')
  .map(line => `    ${line}`)
  .join('\n')}
  }
}
`;
