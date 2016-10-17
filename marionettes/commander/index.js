'use strict'
const Path = require('path');
const Fs   = require('fs');

module.exports = {
	"create-directory":()=>{
		var dir = Path.parse(process.argv[1]).dir ;
		if( !process.argv[4] ) {
			console.log('please give me a folder name');
			process.exit();
		}
		var dirname = Path.join(dir,'/',process.argv[4] );
		console.log(dirname);
		Fs.mkdir(dirname,777,(error)=>{
			if(error){
				console.log(`error: ${error.code}`)
			}else{
				console.log('directory created');
			}
		});
	}
}
