

/*ask 1. Double every number

Array: [2, 4, 6, 8, 10]

What to do:
1. Create an array of numbers.
2. Use map().
3. Multiply every element by 2.
4. Store the returned array in a new variable.
5. Print the new array.
Expected output: [4, 8, 12, 16, 20]

*/

/*
 let arr1 =[2,4,6,8,10]

let newarr = arr1.map((val,ind)=>{return val*2})
console.log(newarr) //[4,8,12,16] 
*/




/*Task 2. Add 5 to every number

Array: [10, 20, 30, 40]

What to do:
1. Use map().
2. Add 5 to every element.
3. Print the new array.
Expected output: [15, 25, 35, 45]
*/

/*
let arr =[10,20,30,40]

let newArr = arr.map((val,ind)=>{return val+5})
console.log(newArr)//[15, 25, 35, 45]*/


/*
Task 3. Find the square of every number

Array: [2, 3, 4, 5]

Expected output: [4, 9, 16, 25]*/

/*
let arr=[2,3,4,5]
let newArr=arr.map((val, ind)=>{return val*2})
console.log(newArr)*/



/*

Task 4. Convert every number into its negative value

Array: [10, 20, 30, 40]

Expected output: [-10, -20, -30, -40]*/

/*
let arr=[10,20,30,40]
let newArr=arr.map((val,ind)=>{return -val})
console.log(newArr);
*/


/*Task 5. Multiply every number by itself and then add 10

Array: [1, 2, 3, 4]

Expected output: [11, 14, 19, 26]*/

/*
let arr=[1,2,3,4]
let newArr = arr.map((val, ind) => { return val * val + 10 })
console.log(newArr)*/



/*

Task 6. Subtract 3 from every number

Array: [10, 15, 20, 25]

Expected output: [7, 12, 17, 22]*/

/*
let arr = [10,15,20,25]
let newArr = arr.map((val,ind)=>{return val-3})
console.log(newArr);
*/


/*

Task 7. Convert prices into prices with GST

Array: [100, 200, 300, 400]

What to do:
1. Use map().
2. Add 18% GST to each price.
3. Print the updated prices.
Hint: GST amount = price × 18 / 100.*/

/*
let arr = [100,200,300,400]

let newArr = arr.map((val,ind)=>{
    let GST_amt ;
    GST_amt = val*18/100;
    return  val+ GST_amt
})
console.log(newArr)
*/





/*

Task 8. Increase every number by 10%

Array: [100, 500, 1000]

Expected output: [110, 550, 1100]*/

/*
let arr=[100,500,1000]

let newArr = arr.map((val,ind)=>{
    let inc = val*10/100

    return val+inc
})
console.log(newArr);*/




/*

Task 9. Convert temperatures from Celsius to Fahrenheit

Array: [0, 10, 20, 30]

Formula:
\[
F = (C \times 9/5) + 32
\]

Expected output: [32, 50, 68, 86]*/

/*
let arr =[0,10,20,30]

let newArr = arr.map((val,ind)=>{
    return (val*9/5)+32
})
console.log(newArr)*/


/*
Task 10. Use map with a separate function

Array: [2, 4, 6, 8]

What to do:
1. Create a separate function called double().
2. The function should accept a number.
3. Return the number multiplied by 2.
4. Pass the function to map().
5. Print the new array.*/
/*
let arr = [2,4,6,8]

function double(num){
    return num*2
}

let newArr = arr.map(double)

console.log(newArr);*///[4,8,12,16]


/*Level 2 — filter() (10 tasks)
Beginner → Intermediate
Task 11. Find even numbers

Array: [1, 2, 3, 4, 5, 6, 7, 8]

Expected output: [2, 4, 6, 8]*/

/*
let arr =[1,2,3,4,5,6,7,8]

let newArr = arr.filter((val,ind)=>{return val%2==0})
console.log(newArr);
*/


/*
Task 12. Find odd numbers

Array: [10, 11, 12, 13, 14, 15, 16]

Expected output: [11, 13, 15]*/

/*
let arr = [10, 11, 12, 13, 14, 15, 16]

let newArr = arr.filter((val,ind)=>{return val%2==1})
console.log(newArr);*/


/*
Task 13. Find numbers greater than 50

Array: [10, 60, 30, 80, 90, 20]

Expected output: [60, 80, 90]*/

/*
let arr = [10, 60, 30, 80, 90, 20]
let newArr = arr.filter((val,ind)=>{ return val>50})
console.log(newArr);
*/


/*
Task 14. Find numbers less than 100

Array: [50, 120, 80, 200, 90, 150]

Expected output: [50, 80, 90]*/
/*
let arr = [50, 120, 80, 200, 90, 150]

let newArr = arr.filter((val,ind)=>{
    return val<100
})
console.log(newArr);*/



/*

Task 15. Find numbers between 20 and 50

Array: [10, 25, 30, 55, 40, 60, 45]

Expected output: [25, 30, 40, 45]*/

/*
let arr = [10, 25, 30, 55, 40, 60, 45]

let newArr =arr.filter((val,ind)=>{
    return val>20 & val<50
})

console.log(newArr);*/



/*
Task 16. Find positive numbers

Array: [-10, 20, -30, 40, 0, 50]

Expected output: [20, 40, 50]*/

/*
let arr = [-10, 20, -30, 40, 0, 50]

let newArr = arr.filter((val,ind)=>{ return val>0})
console.log(newArr);*/



/*
Task 17. Find numbers divisible by 5

Array: [10, 12, 15, 22, 25, 30, 33]

Expected output: [10, 15, 25, 30]*/

/*
let arr = [10, 12, 15, 22, 25, 30, 33]

let newArr = arr.filter((val,ind)=>{ return val%5==0})
console.log(newArr);*/

/*

Task 18. Find numbers greater than their average

Array: [10, 20, 30, 40, 50]

What to do:
1. Calculate the average of the array.
2. Use filter().
3. Keep only numbers greater than the average.
Expected output: [40, 50]
*/
/*
let arr = [10, 20, 30, 40, 50]
let newArr = arr.filter((val,ind)=>{

    let avg = 0
    avg+=val
    let totalavg = avg/arr.length

    return val> totalavg 
})

console.log(newArr);
*/



/*
Task 19. Find numbers whose squares are greater than 100

Array: [2, 5, 8, 10, 12]

Expected output: [12]
*/
/*
let arr =[2, 5, 8, 10, 12]

let newarr = arr.filter((val,ind)=>{
    return (val*val)>100
})
console.log(newarr);*/


/*
Task 20. Use filter with a separate function

Array: [10, 15, 20, 25, 30, 35]

What to do:
1. Create a function called checkEven().
2. It should accept a number.
3. Return true if the number is even.
4. Otherwise, return false.
5. Pass the function to filter().
Expected output: [10, 20, 30]

*/
/*
let arr =[10,15,20,25,30,35]

function checkEven(num){

    if(num%2==0){
        return true
    }
    else{
        return false
    }
}
let newarr = arr.filter(checkEven)

console.log(newarr);*/


/*Level 4 — forEach() (10 tasks)
Beginner → Intermediate
Task 21. Print every element

Array: [10, 20, 30, 40, 50]

Expected output:
10
20
30
40
50
*/

/*
let arr = [10, 20, 30, 40, 50]

let newArr = arr.forEach((val,ind)=>{console.log(val)})*/

/*
Task 22. Print the square of every number

Array: [2, 3, 4, 5]

Expected output:
4
9
16
25
*/
/*
let arr = [2,3,4,5]
let newArr = arr.forEach((val)=>{console.log(val*val)})
console.log(newArr);*/


/*
Task 23. Print only even numbers

Array: [1, 2, 3, 4, 5, 6, 7, 8]

What to do:
1. Use forEach().
2. Check whether each number is even.
3. Print only even numbers.*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let newarr = arr.forEach((val)=>{
    if(val%2==0){
        console.log(val)
    }
})
*/

/*
Task 24. Print the sum of all numbers

Array: [10, 20, 30, 40]

What to do:
1. Create a variable sum = 0.
2. Use forEach().
3. Add each number to sum.
4. Print the final sum outside the loop.
Expected output: 100*/
/*
let arr = [10, 20, 30, 40]
let sum=0

 arr.forEach((val)=>{
    sum+=val
})

console.log(sum);*/



/*
Task 25. Count even numbers

Array: [1, 2, 4, 5, 6, 8, 9, 10]

Expected output: 5*/

/*
let arr = [1, 2, 4, 5, 6, 8, 9, 10]

let count=0

arr.forEach((val)=>{
    if(val%2==0){
        count++
    }
})
console.log(count);

*/

/*

Task 26. Print numbers greater than 25

Array: [10, 20, 30, 40, 50]

Expected output:
30
40
50
*/
/*
let arr = [10,20,30,40,50]

arr.forEach((val)=>{
    if(val > 25){
        console.log(val);
        
    }
})*/




/*
Task 27. Multiply every number by 3 and print it

Array: [2, 4, 6, 8]

Expected output:
6
12
18
24*/

/*
let arr = [2, 4, 6, 8]

arr.forEach((val)=>{
    console.log(val*3)
})
*/


/*
Task 28. Find the total of positive numbers

Array: [-10, 20, -30, 40, 50]

Expected output: 110*/

/*
let arr = [-10, 20, -30, 40, 50]

let sum=0

arr.forEach((val)=>{
    if(val>0){
        sum+=val
    }
})
console.log(sum);
*/

/*

Task 29. Print the index and value of every element

Array: [100, 200, 300, 400]

Hint: forEach() callback can receive two parameters: element and index.

Expected output:
0 100
1 200
2 300
3 400

*/
/*
let arr = [100, 200, 300, 400]

arr.forEach((val,ind)=>{
    console.log(ind ,val);
    
})
*/

/*
Task 30. Create a separate function and pass it to forEach()

Array: [10, 20, 30, 40]

What to do:
1. Create a function called printNumber().
2. It should accept one number.
3. Print the number multiplied by 5.
4. Pass the function to forEach().
Expected output:
50
100
150
200
*/
let arr = [10, 20, 30, 40]

function printNumber(num){
    console.log(num*5);
    
}

arr.forEach(printNumber)











