const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

createFile( argv.b, argv.l, argv.s  )
   .then( fileName => console.log(fileName.rainbow, 'created') )
   .catch( err => console.log(err) );