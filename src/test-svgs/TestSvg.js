
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
  };

  static defaultProps = {
    width: 128,
    height: 128,
    opacity: 1,
    style: {},
    colors: ['#e16b5a','#d16354','#242424','#b3b3b3','#1a1a1a','#f5f5f5'],
  };

  render() {
    const { width, height, opacity, style } = this.props;
    return (
          <Svg width={width} height={height} opacity={opacity} style={style} id="Layer_1" version="1.1" viewBox="0 0 128 128" x="0px" y="0px" xmlSpace="preserve">
    	<G>
    		<Circle x="64" y="64" fill={colors[0]} r="64"/>
    		<Path d="M119.23,96.322c-0.063-0.168-0.127-0.334-0.198-0.492c-0.079-0.208-0.158-0.414-0.247-0.609&#xA;&#x9;&#x9;c-0.079-0.21-0.159-0.418-0.248-0.613c-0.079-0.209-0.159-0.418-0.248-0.614c-0.08-0.21-0.16-0.419-0.25-0.617&#xA;&#x9;&#x9;c-0.079-0.208-0.158-0.414-0.247-0.61c-0.079-0.209-0.159-0.416-0.248-0.613c-0.079-0.209-0.159-0.416-0.248-0.613&#xA;&#x9;&#x9;c-0.08-0.21-0.159-0.419-0.25-0.617c-0.079-0.208-0.157-0.414-0.247-0.609c-0.078-0.209-0.158-0.418-0.248-0.613&#xA;&#x9;&#x9;c-0.08-0.211-0.16-0.42-0.25-0.618c-0.078-0.208-0.158-0.414-0.246-0.61c-0.08-0.21-0.16-0.419-0.25-0.617&#xA;&#x9;&#x9;c-0.08-0.207-0.158-0.412-0.248-0.608c-0.078-0.209-0.158-0.417-0.248-0.614c-0.078-0.209-0.158-0.417-0.248-0.613&#xA;&#x9;&#x9;c-0.078-0.211-0.16-0.42-0.25-0.617c-0.078-0.209-0.158-0.414-0.246-0.609c-0.08-0.209-0.16-0.417-0.248-0.614&#xA;&#x9;&#x9;c-0.08-0.209-0.158-0.417-0.248-0.614c-0.08-0.209-0.159-0.418-0.25-0.615c-0.08-0.208-0.157-0.414-0.248-0.61&#xA;&#x9;&#x9;c-0.077-0.209-0.157-0.417-0.248-0.614c-0.078-0.211-0.159-0.42-0.25-0.617c-0.077-0.209-0.156-0.414-0.245-0.609&#xA;&#x9;&#x9;c-0.08-0.21-0.16-0.419-0.25-0.617c-0.079-0.208-0.158-0.414-0.247-0.609c-0.079-0.209-0.159-0.418-0.248-0.613&#xA;&#x9;&#x9;c-0.079-0.209-0.159-0.417-0.248-0.614c-0.08-0.21-0.16-0.419-0.25-0.617c-0.079-0.208-0.158-0.413-0.247-0.61&#xA;&#x9;&#x9;c-0.079-0.209-0.159-0.416-0.248-0.612c-0.079-0.209-0.157-0.417-0.248-0.614c-0.08-0.21-0.159-0.419-0.25-0.617&#xA;&#x9;&#x9;c-0.079-0.207-0.157-0.414-0.247-0.609c-0.078-0.209-0.158-0.418-0.246-0.613c-0.08-0.209-0.16-0.417-0.248-0.614&#xA;&#x9;&#x9;c-0.08-0.211-0.162-0.42-0.25-0.618c-0.08-0.209-0.16-0.416-0.248-0.612c-0.08-0.208-0.158-0.414-0.248-0.609&#xA;&#x9;&#x9;c-0.078-0.209-0.158-0.417-0.248-0.614c-0.078-0.209-0.158-0.416-0.248-0.613c-0.078-0.211-0.16-0.42-0.25-0.617&#xA;&#x9;&#x9;c-0.078-0.207-0.158-0.413-0.246-0.609c-0.08-0.209-0.159-0.417-0.248-0.613c-0.079-0.209-0.159-0.418-0.248-0.614&#xA;&#x9;&#x9;c-0.079-0.21-0.16-0.419-0.25-0.616c-0.079-0.208-0.158-0.414-0.247-0.609c-0.079-0.209-0.159-0.418-0.248-0.615&#xA;&#x9;&#x9;c-0.079-0.209-0.159-0.416-0.248-0.613c-0.079-0.209-0.159-0.417-0.248-0.613c-0.08-0.212-0.162-0.422-0.252-0.622&#xA;&#x9;&#x9;c-0.078-0.206-0.157-0.411-0.245-0.605c-0.079-0.209-0.159-0.417-0.248-0.614c-0.079-0.209-0.159-0.416-0.248-0.613&#xA;&#x9;&#x9;c-0.08-0.21-0.16-0.419-0.25-0.617c-0.079-0.208-0.158-0.414-0.247-0.61c-0.079-0.209-0.159-0.417-0.248-0.613&#xA;&#x9;&#x9;c-0.079-0.209-0.159-0.417-0.247-0.614c-0.08-0.21-0.16-0.419-0.25-0.617c-0.08-0.208-0.158-0.414-0.248-0.61&#xA;&#x9;&#x9;c-0.078-0.209-0.158-0.417-0.248-0.613c-0.078-0.209-0.158-0.417-0.248-0.614c-0.078-0.209-0.158-0.417-0.248-0.614&#xA;&#x9;&#x9;c-0.08-0.212-0.162-0.422-0.252-0.622c-0.078-0.206-0.156-0.411-0.244-0.604c-0.08-0.209-0.158-0.417-0.248-0.614&#xA;&#x9;&#x9;c-0.08-0.209-0.158-0.417-0.248-0.614c-0.078-0.21-0.159-0.419-0.25-0.617c-0.078-0.208-0.157-0.414-0.248-0.609&#xA;&#x9;&#x9;c-0.077-0.209-0.157-0.417-0.246-0.614c-0.079-0.209-0.159-0.417-0.248-0.614c-0.079-0.21-0.16-0.419-0.25-0.617&#xA;&#x9;&#x9;c-0.079-0.208-0.158-0.413-0.247-0.609c-0.079-0.209-0.159-0.417-0.248-0.614c-0.079-0.209-0.159-0.417-0.248-0.614&#xA;&#x9;&#x9;c-0.079-0.21-0.16-0.419-0.25-0.616c-0.079-0.209-0.158-0.414-0.247-0.61c-0.08-0.211-0.161-0.42-0.25-0.618&#xA;&#x9;&#x9;c-0.079-0.208-0.156-0.414-0.247-0.61c-0.078-0.209-0.157-0.417-0.248-0.613c-0.08-0.21-0.159-0.419-0.25-0.617&#xA;&#x9;&#x9;c-0.077-0.208-0.157-0.414-0.245-0.61c-0.08-0.209-0.16-0.417-0.248-0.613c-1.305-3.459-4.01-5.256-6.695-5.256&#xA;&#x9;&#x9;c-0.311,0-0.598,0.021-0.873,0.056c-0.43,0.045-0.836,0.11-1.198,0.224c-0.043-0.076-0.089-0.146-0.132-0.221&#xA;&#x9;&#x9;C81.225,25.163,68.098,24,64,24c-0.19,0-0.406,0.004-0.634,0.01c-0.03,0.001-0.058,0.002-0.088,0.003&#xA;&#x9;&#x9;c-0.238,0.007-0.493,0.02-0.768,0.034c-0.003,0.001-0.006,0.001-0.01,0.001h0.001c-5.221,0.316-16.676,2.532-23.931,15.23&#xA;&#x9;&#x9;C37.972,39.092,37.281,39,36.5,39c-3.726,0-7.5,3.436-7.5,10c0,3.568,0.001,7.427,1.132,9.898c0.076,0.213,0.158,0.418,0.248,0.613&#xA;&#x9;&#x9;c0.076,0.214,0.159,0.421,0.25,0.618c0.076,0.211,0.157,0.414,0.247,0.609c0.05,0.141,0.106,0.273,0.162,0.407&#xA;&#x9;&#x9;c-1.239,7.521-0.387,14.98,2.408,21.601c0.083,0.205,0.162,0.411,0.248,0.613c0.083,0.207,0.164,0.416,0.251,0.619&#xA;&#x9;&#x9;c0.081,0.203,0.16,0.406,0.245,0.607c0.083,0.205,0.162,0.411,0.248,0.614c0.083,0.208,0.165,0.416,0.251,0.622&#xA;&#x9;&#x9;c0.082,0.201,0.16,0.406,0.245,0.604c0.083,0.207,0.164,0.415,0.251,0.62c0.081,0.203,0.16,0.406,0.245,0.607&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.41,0.248,0.613c0.083,0.205,0.162,0.41,0.248,0.613c0.083,0.207,0.164,0.415,0.251,0.62&#xA;&#x9;&#x9;c0.081,0.203,0.16,0.406,0.245,0.606c0.083,0.205,0.162,0.412,0.248,0.613c0.083,0.205,0.162,0.411,0.248,0.614&#xA;&#x9;&#x9;c0.083,0.207,0.164,0.415,0.251,0.62c0.081,0.203,0.16,0.406,0.245,0.607c0.083,0.205,0.162,0.41,0.248,0.612&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.411,0.248,0.614c0.084,0.21,0.167,0.42,0.254,0.628c0.08,0.2,0.159,0.401,0.242,0.601&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.41,0.248,0.613c0.083,0.205,0.162,0.411,0.248,0.614c0.083,0.205,0.162,0.411,0.248,0.614&#xA;&#x9;&#x9;c0.083,0.207,0.164,0.414,0.251,0.619c0.081,0.203,0.16,0.405,0.245,0.606c0.083,0.205,0.162,0.411,0.248,0.614&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.41,0.248,0.613c0.083,0.207,0.164,0.416,0.251,0.621c0.081,0.201,0.16,0.404,0.245,0.605&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.411,0.248,0.613c0.083,0.205,0.162,0.412,0.248,0.615c0.084,0.209,0.167,0.42,0.254,0.627&#xA;&#x9;&#x9;c0.08,0.201,0.158,0.4,0.242,0.601c0.083,0.205,0.162,0.411,0.248,0.614c0.083,0.205,0.162,0.41,0.248,0.613&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.411,0.248,0.613c0.083,0.207,0.164,0.415,0.251,0.62c0.081,0.203,0.16,0.405,0.245,0.606&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.412,0.248,0.614c0.083,0.204,0.162,0.41,0.248,0.613c0.083,0.207,0.164,0.415,0.251,0.62&#xA;&#x9;&#x9;c0.081,0.203,0.16,0.406,0.245,0.607c0.083,0.205,0.162,0.41,0.248,0.612c0.083,0.205,0.162,0.411,0.248,0.614&#xA;&#x9;&#x9;c0.083,0.207,0.164,0.415,0.251,0.62c0.082,0.206,0.163,0.411,0.249,0.614c0.082,0.203,0.161,0.406,0.245,0.605&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.411,0.248,0.614c0.083,0.204,0.162,0.411,0.248,0.614c0.083,0.207,0.164,0.414,0.251,0.619&#xA;&#x9;&#x9;c0.081,0.203,0.16,0.406,0.245,0.606c0.083,0.205,0.162,0.411,0.248,0.614c0.083,0.205,0.162,0.41,0.248,0.613&#xA;&#x9;&#x9;c0.083,0.207,0.164,0.416,0.251,0.621c0.081,0.202,0.16,0.404,0.245,0.605c0.083,0.205,0.162,0.41,0.248,0.613&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.412,0.248,0.615c0.083,0.206,0.164,0.414,0.251,0.619c0.081,0.203,0.16,0.405,0.245,0.605&#xA;&#x9;&#x9;c0.083,0.209,0.165,0.416,0.251,0.623c0.082,0.201,0.16,0.406,0.245,0.605c0.083,0.205,0.162,0.411,0.248,0.613&#xA;&#x9;&#x9;c0.083,0.207,0.164,0.415,0.251,0.62c0.081,0.202,0.16,0.405,0.245,0.606c0.083,0.205,0.162,0.411,0.248,0.614&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.411,0.248,0.613c0.083,0.207,0.164,0.415,0.251,0.62c0.081,0.203,0.16,0.406,0.245,0.606&#xA;&#x9;&#x9;c0.083,0.205,0.162,0.411,0.248,0.614c0.083,0.205,0.162,0.41,0.248,0.613c0.083,0.207,0.164,0.414,0.251,0.619&#xA;&#x9;&#x9;c0.049,0.123,0.099,0.246,0.149,0.369C55.344,127.559,59.62,128,64,128C87.552,128,108.119,115.27,119.23,96.322z" fill={colors[1]}/>
    		<Path d="M64,104c-9.775,0-19.092-4.668-25.557-12.809c-6.726-8.467-9.336-19.584-7.29-30.775&#xA;&#x9;&#x9;C29,58.297,29,53.424,29,49c0-6.564,3.774-10,7.5-10c0.781,0,1.472,0.093,2.07,0.278C46.632,25.17,59.881,24,64,24&#xA;&#x9;&#x9;s17.368,1.17,25.43,15.278C90.027,39.092,90.719,39,91.5,39c3.727,0,7.5,3.436,7.5,10c0,4.424,0,9.297-2.152,11.416&#xA;&#x9;&#x9;c2.045,11.191-0.563,22.311-7.291,30.775C83.092,99.332,73.775,104,64,104z" fill={colors[2]}/>
    		<Path d="M64,95.5c-12.861,0-21.5-11.117-21.5-21.5c0-3.489,0.82-6.148,2.581-8.367l0.686-0.863l-0.926-0.599&#xA;&#x9;&#x9;c-1.808-1.167-4.84-4.04-4.84-10.171c0-5.908,5.785-9,11.5-9h25c5.715,0,11.5,3.092,11.5,9c0,6.131-3.033,9.004-4.84,10.171&#xA;&#x9;&#x9;l-0.927,0.599l0.687,0.863c1.761,2.219,2.581,4.878,2.581,8.367C85.5,84.383,76.861,95.5,64,95.5z" fill={colors[3]}/>
    		<G>
    			<Path d="M86.43,39.278C87.027,39.092,87.719,39,88.5,39c0.266,0,0.532,0.021,0.797,0.058&#xA;&#x9;&#x9;&#x9;C81.225,25.163,68.098,24,64,24c-0.412,0-0.919,0.013-1.5,0.048C67.723,24.365,79.175,26.582,86.43,39.278z" fill={colors[4]}/>
    			<Path d="M99,49c0-6.564-3.773-10-7.5-10c-0.58,0-1.093,0.068-1.573,0.171C93.131,39.935,96,43.277,96,49&#xA;&#x9;&#x9;&#x9;c0,4.424,0,9.297-2.152,11.416c2.045,11.191-0.563,22.311-7.291,30.775c-6.133,7.723-14.832,12.313-24.057,12.764&#xA;&#x9;&#x9;&#x9;C62.999,103.979,63.499,104,64,104c9.775,0,19.092-4.668,25.557-12.809c6.728-8.467,9.336-19.584,7.291-30.775&#xA;&#x9;&#x9;&#x9;C99,58.297,99,53.424,99,49z" fill={colors[4]}/>
    			<Path d="M35.073,39.171c0.166,0.035,0.344,0.061,0.498,0.107c0.043-0.076,0.089-0.146,0.132-0.222&#xA;&#x9;&#x9;&#x9;C35.492,39.085,35.281,39.121,35.073,39.171z" fill={colors[4]}/>
    		</G>
    		<Path d="M69,71.5c-1.382,0-2.5-1.118-2.5-2.5c0-1.123-1.377-2.5-2.5-2.5s-2.5,1.377-2.5,2.5&#xA;&#x9;&#x9;c0,1.382-1.118,2.5-2.5,2.5s-2.5-1.118-2.5-2.5c0-3.855,3.645-7.5,7.5-7.5c3.855,0,7.5,3.645,7.5,7.5&#xA;&#x9;&#x9;C71.5,70.382,70.382,71.5,69,71.5z" fill={colors[2]}/>
    		<Path d="M76.5,59c-2.756,0-5-2.241-5-5s2.244-5,5-5c2.759,0,5,2.241,5,5S79.259,59,76.5,59z" fill={colors[5]}/>
    		<Path d="M76.5,56.5c-1.377,0-2.5-1.121-2.5-2.5s1.123-2.5,2.5-2.5c1.382,0,2.5,1.121,2.5,2.5S77.882,56.5,76.5,56.5&#xA;&#x9;&#x9;z" fill={colors[2]}/>
    		<Path d="M51.5,59c-2.759,0-5-2.241-5-5s2.241-5,5-5c2.756,0,5,2.241,5,5S54.256,59,51.5,59z" fill={colors[5]}/>
    		<Path d="M51.498,56.5C50.121,56.5,49,55.379,49,54s1.121-2.5,2.498-2.5C52.88,51.5,54,52.621,54,54&#xA;&#x9;&#x9;S52.879,56.5,51.498,56.5z" fill={colors[2]}/>
    		<Path d="M74,81.5H54c-1.382,0-2.5-1.118-2.5-2.5s1.118-2.5,2.5-2.5h20c1.382,0,2.5,1.118,2.5,2.5&#xA;&#x9;&#x9;S75.382,81.5,74,81.5z" fill={colors[2]}/>
    	</G>
    </Svg>
    );
  }
}
