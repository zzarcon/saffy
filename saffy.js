/**
 * TODO: Check if arguments are valid.
 *  
 * @param  {Object} obj     
 * @param  {String} keyName 
 * @param  {Mixed} defaultValue 
 * @return {Mixed}         
 */
var get = (obj, keyName, defaultValue) => {
  if (arguments.length < 2 || !isString(keyName)) return;

  let properties = keyName.split('.');
  
  if (properties.length === 1) {
    return obj[keyName] ? obj[keyName] : defaultValue;
  }

  let firstProp = properties.shift();
  let nextObj = obj[firstProp];
  let nextProps = properties.join('.');

  return nextObj ? get(nextObj, nextProps, defaultValue) : defaultValue;
};

/**
 * TODO: Check if arguments are valid.
 * 
 * @param  {Object} obj     
 * @param  {String} keyName 
 * @param  {Mixed} value   
 * @return {Mixed}  Returns the passed value
 */
var set = (obj, keyName, value) => {
  if (arguments.length < 3 || !isString(keyName)) return;

  let properties = keyName.split('.');

  if (properties.length === 1) {
    obj[keyName] = value;
    return value;
  }

  let firstProp = properties.shift();
  let nextObj = obj[firstProp];
  let nextProps = properties.join('.');

  return isObject(nextObj) ? set(nextObj, nextProps, value) : value;
};

var isString = (value) => {
  return typeof value === 'string';
};

var isObject = (value) => {
  return typeof value === 'object';
};

export default {
  get: get,
  set: set
}