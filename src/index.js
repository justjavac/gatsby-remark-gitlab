const gitlab = require('remark-gitlab');

module.exports = ({ markdownAST }, options) => {
  const transformer = gitlab(options);

  transformer(markdownAST, options);
};
