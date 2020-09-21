function sumOfNum(...arr:number[])
{
    let sum = 0;
    // for (let arg of arr) sum += arg;
    arr.forEach(arg => {
        sum += arg; 
       });
       console.log(sum);
    
    //Mam's code
    // arr.forEach((ele)=>{
    //     sum +=ele;
    // });
    // console.log(sum)
}

sumOfNum(3,4)