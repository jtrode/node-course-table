const fs = require('fs');
var colors = require('colors/safe');

const createFile = async( base = 5, limit = 10, show ) => {

    try {
        

        let output = '';

        for (let i = 1; i <= limit; i++) {
            output += (`${ base } x ${ i } = ${ base * i }\n`);
        }

        if(show){
            console.log ('===================');
            console.log ('  Table of:  ', base);
            console.log ('==================='); 

            console.log(colors.green(output)); 
        }

        fs.writeFileSync( `./output/${base}-Table.txt`, output );

        return `${base}-Table.txt`;  

    }   catch(err){
        
        throw err;

    }
        

}

module.exports = {
    createFile
}