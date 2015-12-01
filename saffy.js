import isObject from 'isobject';
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
    let val = getProp(obj, keyName);

    return val ? val : defaultValue;
  }

  let {nextObj, nextProps} = getNextValues(obj, properties);

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

  let {nextObj, nextProps} = getNextValues(obj, properties);
  
  return isObject(nextObj) ? set(nextObj, nextProps, value) : value;
};

var getNextValues = (obj, properties) => {
  let first = properties.shift();
  
  return {
    nextObj: getProp(obj, first),
    nextProps: properties.join('.')
  };
};

/**
 * 
 * @param  {Obj} obj  
 * @param  {String} prop 
 * @return {Mixed}      
 */
var getProp = (obj, prop) => {
  let val = obj[prop];
  
  if (prop === 'firstObject' && Array.isArray(obj)) {
    val = obj[0];
  }

  return val;
};

var isString = (value) => {
  return typeof value === 'string';
};

export default {
  get: get,
  set: set
}