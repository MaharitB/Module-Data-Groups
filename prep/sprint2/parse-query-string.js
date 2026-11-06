//function parseQueryString(queryString) {
//const queryParams = {};

//const keyValuePair = queryString.split("=");

//const key = keyValuePair[0]; // key will hold 'fruit'
//console.log(key);
//const value = keyValuePair[1]; // value will hold 'banana'
//queryParams[key] = value;

// return queryParams;
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const [key, value] = queryString.split("="); // key will hold 'fruit', value will hold 'banana'
  queryParams[key] = value;

  return queryParams;
}

//console.log(parseQueryString("fruit=banana"));
module.exports = parseQueryString;
