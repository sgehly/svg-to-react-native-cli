'use strict'

const path = require('path');

/**
 * Convert a string from snake case to camel case
 * @param  string s The input string
 * @return string The output string
 */
function snakeToCamel(s){
  return s.replace(/((\-|_)\w)/g, function(m){return m[1].toUpperCase();});
}

/**
 * Creates a standardized component name from a given gile and filename
 * @param  string file
 * @param  string fileName
 * @return string
 */
module.exports = function createComponentName(file, fileName, keepSnakeCase) {
  let componentNamePrep;

  if ((fileName.indexOf('-') !== -1) || (fileName.indexOf('_') !== -1) && !keepSnakeCase) {
    componentNamePrep = snakeToCamel(path.basename(file, '.svg'));
  } else {
    componentNamePrep = path.basename(file, '.svg');
  }
  const componentNameArr = componentNamePrep.split('');
  componentNameArr[0] = componentNameArr[0].toUpperCase();
  return componentNameArr.join('').replace(/[0-9]/g, "").replace(/-|\s/g,"");;
};
