
var printVal = (val:string|number)=>{
    if(typeof(val)=="string"){
        console.log("Welcome" +val);
    }
    if(typeof(val)=="number"){
        console.log("Your scoe is" +val);
    }
    
}
printVal("Sachin");
printVal(10);

var mixed=['hello',10,90.5];
var mix_tuple[];
mix_tuple[0] =120;
mix_tuple[1]='Kumaran'
console.log(mix_tuple[0]);
mix_tuple[3]='hi';
console.log(mix_tuple.length);

var mix_nums=[10,'hello'];
var[x,y]= mix_nums;
var[x,y,z]=mix_nums;
var[p]= mix_nums;
console.log(x);
console.log(y);
console.log(z);

console.log(p);

