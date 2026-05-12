const fs = require('fs');
const size = fs.statSync('dist/chatgpt-extractor.zip').size;
console.log(size);
