var myArr = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [...myArr,...arr2]

arr3.forEach(ele => {
    console.log(ele); 
});