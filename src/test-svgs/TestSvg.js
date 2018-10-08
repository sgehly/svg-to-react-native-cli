
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

export default class TestSvg extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    opacity: PropTypes.number,
    style: PropTypes.any,
  }

  static defaultProps = {
    width: 40,
    height: 40,
    opacity: 1,
    style: {},
  }

  render() {
    const { width, height, opacity, style } = this.props;
    <Svg width={width} height={height} opacity={opacity} style={style} viewBox="0 0 40 40">
    	<Path d="M9.12 18.627H37v3H8.868l8.879 8.88-2.121 2.12L4.974 21.976c-.673-.587-1.012-1.16-1.018-1.723-.005-.562.323-1.125.985-1.69L15.626 7.88 17.747 10 9.12 18.627z" fill="#000" fillRule="evenodd"/>
    </Svg>
  }
}
