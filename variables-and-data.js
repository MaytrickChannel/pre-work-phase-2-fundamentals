/*
Variables, Data Types, and Typing
 */
let wordData = "Word list"

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

console.log(totalWithTax);

let obj = {
    key1: "Value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value",
    }
};

console.log(obj.key1);

let obj2 = {
    key1: "Value 1",
    key2: 3,
    obj2: {
        obj2Key1: "value of inner object",
    },
};

console.log(obj2.obj2.obj2Key1);

let var1 ="2";
let var2 ="5";
let result = var1 + var2;
console.log(result);

let add = 1+2;
let sub = 2-1;
let mult =2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);
