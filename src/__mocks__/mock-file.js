const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))}`;
  }
};

/**
 * example assertion with the above mock
 * 
 * expect(imgElementYouMayFind.props.src)
 *.toEqual('moon.svg')
 */ 
