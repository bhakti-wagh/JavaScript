


// 1.introduction print:using regular function

function intro(name,edu){

    console.log(`My name is ${name} and I completed my ${edu}`);
}
intro("Bhakti","graducation")




/* 2.Add two numbers

Create a regular function add(a, b) that accepts two numbers and returns their sum.
 */

function add(a,b){
    return a+b
}
console.log(add(50,50))




function countDigits(n) {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

console.log(countDigits(12345)); 
console.log(countDigits(789));   
console.log(countDigits(5));     

