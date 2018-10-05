'use strict'

module.exports.helptext = `
Welcome to SVG to React Native. This tool takes a svg file and outputs
a full formated stateless functional React component. The
component has two props, height and width.

Sample command: svgtoreact svgImage ComponentName
Advanced sample command: svgtoreact svgImage ComponentName output ./components/svgComponents/ no-format rm-style

Required Arguments:
  For Single File -
  first .................. the name of the svg file. If in working
                           directory, the path and extention are not
                           required.
  second ................. the name of the component. This will be the
                           function name as well as the file name (with
                           .js prepended)
  For Multi File -
    svgtoreact dir - run util off all .svg's in curent working directory

Optional Flags:
  -o, --output <path> .... the output path. Do not include the filename.
      --no-format ........ will skip line breaks and indentation to svg.
                           If your svg is already formatted, use this flag.
      --rm-style ......... removes all style tags within svg.
      --force ............ Writes the ouptut file even if it exists.
      --help ............. you got here on your own, didn't you?
      --example .......... output an example of the i/o of this util.

  ** SVG to React originally created by Cody Barrus gitHub: goopscoop **
  repo: https://github.com/goopscoop/svg-to-react
  ** SVG to React Native forked by Chris Bull gitHub: chrisbull **
  repo: https://github.com/chrisbull/svg-to-react-native-cli
  ** Alchemy version forked by Ben Thornburg gitHub: btrane **
  repo: https://github.com/pgalchemy/svg-to-react-native-cli
`;

module.exports.exampleText = `
>>>>>>>>>>  INPUT:
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <path fill="#000" fill-rule="evenodd" d="M9.12 18.627H37v3H8.868l8.879 8.88-2.121 2.12L4.974 21.976c-.673-.587-1.012-1.16-1.018-1.723-.005-.562.323-1.125.985-1.69L15.626 7.88 17.747 10 9.12 18.627z"/>
</svg>

>>>>>>>>>>  OUTPUT:

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
  };

  render() {
    const { width, height, opacity, style } = this.props;
    <Svg width={width} height={height} opacity={opacity} style={style} viewBox="0 0 40 40">
    	<Path d="M9.12 18.627H37v3H8.868l8.879 8.88-2.121 2.12L4.974 21.976c-.673-.587-1.012-1.16-1.018-1.723-.005-.562.323-1.125.985-1.69L15.626 7.88 17.747 10 9.12 18.627z" fill="#000" fillRule="evenodd"/>
    </Svg>
  }
}
`;

module.exports.processCompleteText = `
Process complete! Thanks for using SVG to React Native SVG (a la Alchemy)!
`;