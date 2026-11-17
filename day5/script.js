/*1. Function as an argument

Create a function calculate(a, b, operation) that accepts two numbers and a function as arguments. Pass an addition function and return the result.*/

let f1=(a)=>{
    a(10,40,'+')

}

f1((a,b,ope)=>{
    console.log(a+b)
})



/*2. Greeting using HOF

Create a function greetUser(name, callback) that accepts a name and a greeting function. Display a greeting message.*/


let greetUser=(a)=>{

    a("Bhakti","Good Morning")
}
greetUser((name,greet)=>{
    console.log("Hello,"+name +" "+greet)
})


/*3. Square using HOF

Create a function performOperation(n, callback) that accepts a number and a function. Pass a function that returns the square of the number.*/


let square=(num)=>{

    num(2)
}
square((n)=>{
    console.log(n*n)
})



/*5. Check even or odd

Create a function checkNumber(n, callback) that accepts a number and a function to check whether the number is even or odd.*/


let check=(checkEO)=>{
    checkEO(8)
}

check((num)=>{
    if(num%2===0){
        console.log(`${num} is Even Number`)
    }
    else{
        console.log(`${num} is odd number`)
    }
})



let currentBal=5000

let transaction=(type, amt)=>{
    type(amt)
}

let depostie=(amt)=>{
    currentBal+=amt;
    console.log(currentBal);
    
}

let withdrawl=(amt)=>{
    currentBal-=amt;
    console.log(currentBal);
}

let interest=(perc)=>{
    currentBal=currentBal+(currentBal*perc)/100;
    console.log(currentBal);
}

transaction(depostie,2000);
transaction(withdrawl,2000);
transaction(interest,5);




/*5. Age eligibility generator

Create a function checkEligibility(minAge) that returns another function to check whether a given age meets the minimum requirement.*/