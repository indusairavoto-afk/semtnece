const AdmZip = require('adm-zip');

const zip = new AdmZip();
zip.addLocalFolder('public/extension/');
zip.writeZip('public/chatgpt-extractor.zip');
console.log('Zipped successfully!');
