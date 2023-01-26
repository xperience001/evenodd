'use strict';

module.exports = (n)=> {
    if(n && !isNaN(n)){
        if(n%2==0){
            return "even"
        } else {
            return "odd"
        }
    } else {
        return "not a valid input"
    }
};