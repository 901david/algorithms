/* Take a string and replace all spaces with %20, enough spaces are left at end of string to accomplish this in place */
const urlify = str => str.trim().replace(/\s/g, "%20");

module.exports = urlify;
