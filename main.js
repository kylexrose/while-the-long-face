function numberDoubler(num) {
    while(num < 100){
        num += num;
    }
    return num;
}

function stringRepeater(str) {
    let output = "";
    while(output.length < 10){
        output += str;
    }
    return output;
}

function makeDivisible(x, y) {
    while(x % y !== 0){
        x++;
    }
    return x;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};