/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=string(x)
    n=x.split("").reverse().join("")
    if(x==n)
    {
        return true
    }
    else
    {
        return false
    }
    
};