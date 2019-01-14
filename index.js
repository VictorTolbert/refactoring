const plays = require('./data/plays')
const invoices = require('./data/invoices')
const statement = require('./statement')


console.log(statement(invoices[0], plays))
