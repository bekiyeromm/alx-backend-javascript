/**
 * 
 * adds, subtracts and divides anumber based on type
 * @param {number} type -could be SUM, SUBTRACT, DIVIDE
 * @param {number} a 
 * @param {number} b 
 * @returns {number} - based on type(SUM, SUBTRACT,
 *  DIVIDE, error)of a and b
 */
function calculateNumber(type, a, b) {
    switch(type){
        case 'SUM':
            return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
            return Math.round(a) - Math.round(b);
        case 'DIVIDE':
            if (Math.round(b) === 0)
            {
                return ('Error')
            }
            return Math.round(a) / Math.round(b);
        default:
            throw new Error('invalid type, type must be SUM, DIVIDE, SUBTRACT')
        }
}

module.exports = calculateNumber;
