function parseQueryString(queryString) {
  const queryParams = {};

  const keyValuePair = queryString.split("=");
  const key = keyValuePair[0]; // key will hold 'fruit'
  const value = keyValuePair[1]; // value will hold 'banana'
  queryParams.key = value;

  return queryParams;
}

module.exports = parseQueryString;
