/**
 * TODO: Check if arguments are valid.
 *  
 * @param  {Object} obj     
 * @param  {String} keyName 
 * @return {Mixed}         
 */
var get = (obj, keyName, defaultValue) => {
  if (arguments.length < 2 || typeof keyName !== 'string') return;

  let properties = keyName.split('.');
  
  if (properties.length === 1) {
    return obj[keyName] ? obj[keyName] : defaultValue;
  }

  let firstProp = properties.shift();
  let nextObj = obj[firstProp];
  let nextProps = properties.join('.');

  return nextObj ? get(nextObj, nextProps, defaultValue) : defaultValue;
};

var set = () => {

};

export default {
  get: get,
  set: set
}