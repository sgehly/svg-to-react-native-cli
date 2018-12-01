'use strict';

const tinycolor = require('tinycolor2');

/**
 * Creates an array with all component colors and replaces hardcoded values with array vars
 * @param  string input  The formatted react-native-svg JSX
 * @return string        The JSX with the inserted colorArray and color variables
 */
module.exports = (input) => {
  let colorArray = [];

  // find colors
  let output = input.replace(/["']#(?:[0-9a-fA-F]{3}){1,2}["']/ig, function(c) {
    // remove quotes
    let color = c.replace(/["']/g, "");
    
    // when a color is found, add it to the array and replace with the index
    let colorObj = tinycolor(color);

    // if it's not in the array, add it
    let index = colorArray.indexOf(colorObj.toHexString());
    if (index === -1) index = colorArray.push(colorObj.toHexString()) - 1;

    // insert color variable into JSX
    return `colors[${index}]`;
  });

  // replace colors props with array (if there are any)
  if (colorArray.length > 0) output = output.replace('colors: [],', `colors: ['${colorArray.join("','")}'],`);

  // return with replaced strings and colorArray for props
  return output;
};

