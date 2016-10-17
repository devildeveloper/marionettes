'use strict'

const Invocate = process.argv[2];
const Order = process.argv[3];

const Marionettes = require('./marionettes');
let Marionette = Marionettes[Invocate];

if(!Invocate ||  !Order || !Marionette){
	console.log('You will need to invocate a valid  marionette and write an order');
	process.exit();
}


//calling
if(Marionette[Order]){
	Marionette[Order]();
}else{
	Marionette['default']();
	//console.log(`order: ${Order} for marionette: ${Invocate} not found`);
};
