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
 * Contains logic to return the value of the properties
 * 
 * @param  {Obj} obj  
 * @param  {String} prop 
 * @return {Mixed}      
 */
var getProp = (obj, prop) => {
  let isArray = Array.isArray(obj);
  let len = obj.length;

  if (isArray) {
    if (prop === 'firstObject') {
      return obj[0];
    }

    if (prop === 'lastObject') {
      return obj[len - 1];
    }

    if (prop === 'length') {
      return len;
    }

    if (prop.indexOf('[') > -1) {
      prop = prop.replace('[', '').replace(']', '');
    }
  }

  // TODO: Improve way of checking if it's a function
  let isFunction = prop.indexOf('(') > -1 && prop.indexOf(')') > -1;

  if (isFunction) {
    let funcInfo = prop.split('(');
    let funcName = funcInfo[0];

    if (typeof obj[funcName] === 'function') {
      let funcParams = funcInfo[1].length > 1 ? funcInfo[1].split(')')[0] : undefined;
      //TODO: Pass proper type --> number, string, etc
      
      return obj[funcName](funcParams);
    }
  }

  return obj[prop];
};

var isString = (value) => {
  return typeof value === 'string';
};

/**
 * Check and clean params before calling the "get" method
 * 
 * TODO: Use rest args
 * TODO: Check if is a valid keyName
 */
var getWrapper = (obj, keyName, defaultValue) => {
  let isValid = isKeyNameValid(keyName);
  let wantsArrayItem = keyName.indexOf('[') > -1;

  if (wantsArrayItem) {
    keyName = keyName.split('[').map((k, i) => {
      if (i === 0) return k;

      return `.[${k}`;
    }).join('');
  }

  return get(obj, keyName, defaultValue);
};

/**
 * Implement...
 * @param  {String} keyName 
 * @return {Boolean}         
 */
var isKeyNameValid = (keyName) => {
  return true;
};

export default {
  get: getWrapper,
  set: set
}