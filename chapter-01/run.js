import statement from "./statement.js"
import {invoices} from "./invoices.js" 
import {plays} from "./plays.js" 

// console.log('invoices: '+JSON.stringify(invoices, null, 2))
// console.log('plays: '+JSON.stringify(plays, null, 2))
// console.log('invoices: '+JSON.stringify(invoices, null, 2))
// console.log('invoices[0] '+JSON.stringify(invoices[0], null, 2))

let textRedered = statement(invoices[0],plays);
console.log(textRedered)
