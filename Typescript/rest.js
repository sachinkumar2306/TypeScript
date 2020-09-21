function sumOfNum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var sum = 0;
    // for (let arg of arr) sum += arg;
    arr.forEach(function (arg) {
        sum += arg;
        console.log(sum);
    });
    //Mam's code
    // arr.forEach((ele)=>{
    //     sum +=ele;
    // });
    // console.log(sum)
}
sumOfNum(3, 4);
