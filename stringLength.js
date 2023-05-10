let stringLength = (string) => {
  if(string.length < 1 || string.length > 10) {
      throw new Error('Input string must be at least 1 and not longer than 10 characters');
  } else {
      return string.length;
  }
}

module.exports = stringLength;