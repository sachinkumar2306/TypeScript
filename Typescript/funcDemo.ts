function calculate(n1: number, n2: number): number {
    return (n1 + n2)
}
console.log(calculate(2, 3))

function greetMyuser(name: string): void {
    console.log('Great day ' + name);
}
greetMyuser('Sachin')

let greetStudent = function (name: string): string {
    return 'Good day ' + name;
}
console.log(greetStudent('Rohan'));

// arrow function 
let sum = () =>{
    let n1 =2;
    let n2 =3;
    console.log('Sum is ' + (n1 + n2));
}
sum()