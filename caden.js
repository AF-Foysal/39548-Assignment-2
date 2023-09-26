Array.prototype.mySome = function mySome(condition) {
    for (let i = 0; i < this.length; i++) { 
        if (condition(this[i])) { // if condition is true then return true
            return true; 
        }
    }
    return false; // if nothing satisfies condition return false
}

Array.prototype.myEvery = function myEvery(condition) {
    for (let i = 0; i < this.length; i++) { 
        if (!condition(this[i])) { // if condition is true then return true
            return false;
        }
    }
    return true;
}

Array.prototype.myReduce = function myReduce(callBack) {
    if (this.length == 0) {
        return "impossible";
    }
    let accumulator = this[0];
    for (let i = 1; i < this.length; i++) {
        accumulator = callBack(accumulator, this[i], i, this);
    }
    return accumulator;
}
