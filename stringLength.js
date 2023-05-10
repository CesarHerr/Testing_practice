let stringLength = (string) => {
  if(string.stringLength < 1 || string.stringLength > 10 ){
    throw new Error('Input string must be at least 1 character long');
  }
  return string.length;
}
module.exports = stringLength;