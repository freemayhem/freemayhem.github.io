const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('email')