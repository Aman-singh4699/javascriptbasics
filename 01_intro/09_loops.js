const arr = new Array(1,2,3,4,5,6,7,8,9,10)
function forLoop(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function whileLoop(arr){
    i = 0;
    while (i<10) {
        console.log(arr[i]);
        i++
    }
}

function newFor(arr){
    for(let i of arr){
        console.log(i);
    }
}

newFor(arr);
// forLoop(arr);
// whileLoop(arr);

