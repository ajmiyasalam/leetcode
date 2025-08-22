/**
 * @param {number} n
 * @return {number}
 */
function subtractProductAndSum(n) {
   
    let digits = n.toString().split('').map(Number);

    let product = digits.reduce((acc, num) => acc * num, 1);

   
    let sum = digits.reduce((acc, num) => acc + num, 0);

   
    return product - sum;
}