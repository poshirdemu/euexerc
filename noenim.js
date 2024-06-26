function getQueryStringParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}
