const fs = require('fs');
const stats = fs.statSync(__dirname + '/public/chatgpt-extractor.zip');
console.log(stats.size);
