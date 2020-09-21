function calculate(n1, n2) {
    return (n1 + n2);
}
console.log(calculate(2, 3));
function greetMyuser(name) {
    console.log('Great day ' + name);
}
greetMyuser('Sachin');
var greetStudent = function (name) {
    return 'Good day ' + name;
};
console.log(greetStudent('Rohan'));
// arrow function 
var sum = function () {
    var n1 = 2;
    var n2 = 3;
    console.log('Sum is ' + (n1 + n2));
};
sum();
