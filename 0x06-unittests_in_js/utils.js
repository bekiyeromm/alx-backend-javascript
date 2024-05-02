const Utils = {
    /**
     * performs SUM, SUBTRACT, DIVIDE based on type
     * @param {string} type -SUM, SUBTRACT, DIVIDE
     * @param {number} a 
     * @param {number} b 
     * @returns {number} -the result of a and b
     */
    
    calculateNumber(type, a, b) {
        switch(type){
            case 'SUM':
                return Math.round(a) + Math.round(b);
            case 'SUBTRACT':
                return Math.round(a) - Math.round(b);
            case 'DIVIDE':
                if (Math.round(b) === 0)
                {
                    return ('Error');
                }
                return Math.round(a) / Math.round(b);
            default:
                throw new Error('invalid type, type must be SUM, DIVIDE, SUBTRACT');
            }
    }
}

module.exports = Utils