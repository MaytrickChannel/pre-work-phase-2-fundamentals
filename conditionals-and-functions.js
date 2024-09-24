/*
 * Conditionals, Functions, Scope and Loops.
 */

//Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

//Greater than
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

console.log(notEquals);

let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("store B has a lower price.")
    } else if (storeAIsLower) {
        console.log("Their price are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    let squared =  number * number;
    return squared;

}

let squaredNumber = squareNum(4);
console.log(squaredNumber);


/*...*/
/*...*/
/*...*/

let x = 10;

function addNumbers (n,m, x) {
    console.log(x);
    let b;
    if (1===1){
        b = 8;
    }
    console.log(b);
    return n + m;
}
addNumbers(1, 2, 10);

/*...*/
/*...*/
/*...*/
/*...*/

//             0  1  2  3  4
let ourArray =[1, 2, 3, 4, 5];

let arrrLen = ourArray.length;
for (let i = 0; i<=arrrLen; i++) {
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j =0; j<10; j++) {
        console.log('j is equal to: ' +j);
    }
}

/*...*/
/*...*/
/*...*/
/*...*/

let xa = 0;
while (xa < 10) {
    console.log('Ran');
    xa = xa + 1;
}







