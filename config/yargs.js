const argv = require('yargs')
                .option('b', {
                       alias: 'base',
                       type: 'number',
                       demandOption: true,
                       describe: 'Is the multiplication table base number'
                    })
                .option('s', {
                        alias: 'showResult',
                        type: 'boolean',
                        default: false,
                        demandOption: false,
                        describe: 'Show the output in the console'
                    })
                .option('l', {
                        alias: 'limit',
                        type: 'number',
                        demandOption: false,
                        describe: 'This is the limit number of the table'
                    })
                .check( (argv, options) => {
                        if( isNaN( argv.b) ){
                            throw `The base has to be a number`;
                        }
                        return true;
                    })
                .check( (argv, options) => {
                        if( isNaN( argv.l) ){
                            throw `The limit has to be a number`;
                        }
                        return true;
                    }) 
                .argv;

module.exports = argv;