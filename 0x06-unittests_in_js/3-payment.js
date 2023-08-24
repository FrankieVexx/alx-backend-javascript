const utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const totals = utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${totals}`);
    return totals;
    }