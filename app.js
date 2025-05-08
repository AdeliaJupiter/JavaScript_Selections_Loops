console.log("Hello World!\n==========\n");

// Exercise 1 Section
//-----------------------------------IGNORE EVEN---------------------------------
console.log("EXERCISE 1: IGNORE EVEN\n==========\n");

//Print out only odd 1-100
for(let i = 1; i < 100; i++){
    if(i % 2 == 1){
        console.log(`${i}\n`);
    }
}

// Exercise 2 Section
//-------------------------------------FIZZBUZZ-----------------------------------
console.log("EXERCISE 2: FIZZBUZZ\n==========\n");

//iterate 1-100 
//if i is divisible by 3 BUT NOT 5 (i%3=0 && i%5!=0), print FIZZ
//i divisible by 5 BUT NOT 3 (i%5=0 && i%3!=0), print BUZZ
//i divisible by 3 AND 5 (i%3=0 && i%5=0), print FIZZBUZZ
//do nothing if not divisible by 3 or 5
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 != 0){
        console.log(`${i} 'FIZZ'\n`);
    }
    else if(i % 5 == 0 && i % 3 != 0){
        console.log(`${i} 'BUZZ'\n`);
    }
    else if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} 'FIZZBUZZ'\n`);
    }
}

//Exercise 3 Section
//------------------------------------WHILE & DO/WHILE----------------------------
console.log("EXERCISE 3: WHILE & DO/WHILE\n==========\n");

//IGNORE EVEN 
//WHILE
console.log("\nIgnore Even, but make it while\n");
let m = 1;
while(m < 100){
    if(m % 2 != 0){
        console.log(`${m}\n`);
    }

    m++;
}
//DO/WHILE
console.log("\nIgnore Even, but make it do/while\n");
let n = 1;
do{
    if(n % 2 != 0){
        console.log(`${n}\n`);
    }

    n++;
}while(n < 100);

//FIZZBUZZ 
//WHILE
console.log("\nFizzbuzz, but make it while\n")
let x = 1;
while(x <= 100){
    if(x % 3 == 0 && x % 5 != 0){
        console.log(`${x} 'FIZZ'\n`);
    }
    else if(x % 5 == 0 && x % 3 != 0){
        console.log(`${x} 'BUZZ'\n`);
    }
    else if(x % 3 == 0 && x % 5 == 0){
        console.log(`${x} 'FIZZBUZZ'\n`);
    }

    x++;
}
//DO/WHILE
console.log("\nFizzbuzz, but make it do/while\n")
let y = 1;
do{
    if(y % 3 == 0 && y % 5 != 0){
        console.log(`${y} 'FIZZ'\n`);
    }
    else if(y % 5 == 0 && y % 3 != 0){
        console.log(`${y} 'BUZZ'\n`);
    }
    else if(y % 3 == 0 && y % 5 == 0){
        console.log(`${y} 'FIZZBUZZ'\n`);
    }

    y++;
}while(y <= 100);

//Exercise 4 Section
//--------------------------------------FIND VALUE---------------------------
console.log("EXERCISE 4: FIND VALUE\n==========\n");

//the value to find
//creates a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 

//the iteration range
// creates a random number between 100 and 500
let f = Math.round(Math.random() * (500 - 100) + 100); 

for(i = 0; i <= f; i++){
    if(i == value && i != f){
        console.log(`Found value! :) (${value})\n`);
    }
    else if(i != value && i == f){
        console.log(`Did not find value :( (${value})\n`);
    }
}

//Exercise 5
//-------------------------------------CUSTOM FIZZBUZZ-----------------------
console.log("EXERCISE 5: CUSTOM FIZZBUZZ\n==========\n");

//initial value for iteration
let start = Math.round(Math.random() * (10 - 1) + 1);
//iteration range limit
let g = Math.round(Math.random() * (1000 - 1) + 1);
//modulus number for fizz
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//modulus number for buzz
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);

console.log(`\nstart: ${start}, range limit: ${g}, FIZZ: ${fizzDivisor}, BUZZ: ${buzzDivisor}`);

for(start; start <= g; start++){
    if(start % fizzDivisor == 0 && start % buzzDivisor != 0){
        console.log(`${start} FIZZ\n`);
    }
    else if(start % buzzDivisor == 0 && start % fizzDivisor != 0){
        console.log(`${start} BUZZ\n`);
    }
    else if(start % fizzDivisor == 0 && start % buzzDivisor == 0){
        console.log(`${start} FIZZBUZZ\n`);
    }
}