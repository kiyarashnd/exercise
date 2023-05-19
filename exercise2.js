/*
form move line in vsCode :
Alt + Up // Move Up
Alt + Down // Move Down
// 2-Unique Values JavaScript (ES6) :(new Set)
fetch('./products.json').then((res) => res.json()).then((response) => myFunctin(response))
function myFunctin(data) {
    console.log(data)

    names = data.map((item) => item.name);
    console.log(names);//Array with 12 object

    uniqueNames = new Set(names);
    console.log(uniqueNames)//10 Object(Set)

    //spread operator iterate over items of object
    myArray = [...uniqueNames]
    console.log(myArray);//Array with 10 element

    myArray1 = [uniqueNames];
    console.log(myArray1)//Array with 1 element that this element is uniqueNames object

    myNewArry = ['newItem', ...uniqueNames]
    console.log(myNewArry);//insert newItem first of array

    const demo = document.querySelector('.list');
    demo.innerHTML = myNewArry.map((dm) => {
        return `<li>${dm}</li>`
    }).join('');
    //join for delete ,
}
*/
// fetch('./products.json').then(res => res.json()).then(response => showData(response));

// function showData(data) {
//     const staff = data;
//     //always return your fisrt parameter :
//     const dailyTotal = staff.reduce((total, person) => {
//         console.log('total is : ', total);
//         console.log('person.price is : ', person.price);
//         console.log('------------------------');
//         total += person.price;
//         return total;
//         // return total += person.price;
//     }, 0)//here 0 is value of total in first iteration

//     console.log(dailyTotal)
// }
/*
//here we dont have initial value 0 instead we have initial value of on object for reduce :
function showData(data) {
    const cart = data;
    let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
        //here total is this object : {totalItems: 0, cartTotal: 0}

        const { age, price } = cartItem;
        console.log('total is : ', total)
        //count items :
        total.totalItems += age;
        total.cartTotal += age * price;
        return total;
    }, {
        totalItems: 0,
        cartTotal: 0
    })
    //in above second paramter is an object that have 2 item that have initial value 0 in first iteration.
    cartTotal = Number(cartTotal.toFixed(2));
    //wiht toFixed(2) after we have 2 number after .
    console.log(totalItems, cartTotal);
}
//*note : vaghti mikhay y object mesle const {name, age}= y object dg bezari to oon yki object bayad hatamn y property b esme age o name dashte bashi
*/
/*
//Destructuring (Array):
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruits1 = fruits[0];
const fruits2 = fruits[1];
const fruits3 = fruits[2];

console.log(fruits1, fruits2, fruits3);

const [john, peter11, bob, , kelly, susan] = friends;
console.log(john, peter11, bob, kelly, susan);

//easier way to swap between 2 item of array :
let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second)
*/
//Timestamps :
// console.log(new Date()); //Fri May 19 2023 13:26:09 GMT+0330 (Iran Standard Time)

// Unix Time = January 1, 1970 and 1s = 1000ms

console.log(Date.now()); //1684491017472
console.log(new Date().getTime()); //1684491017472
console.log(new Date().valueOf()); //1684491017472

//this function run after 1000ms that more than 1000s as above values :
setTimeout(() => {
  console.log(Date.now()); //1684491049592
}, 1000);

// create id's in learning apps
let people = [{ id: Date.now() + 2000, name: "kiya" }];
people = [...people, { id: Date.now(), name: "peter" }]; //spread operator

setTimeout(() => {
  people = [...people, { id: Date.now(), name: "john" }];
  console.log(people); //[0: {id: 1684491116269, name: 'peter'}, 1: {id: 1684491117272, name: 'john'}]
}, 1000);

// create/get dates
console.log(new Date(1632961557647)); //when you send a time as mill second form Unix time this Date gonna return exact time--->Thu Sep 30 2021 03:55:57 GMT+0330 (Iran Standard Time)
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
//here futureDate is 1 minute after new Date() :
console.log(futureDate); //Fri May 19 2023 13:44:26 GMT+0330 (Iran Standard Time)
console.log(new Date()); //Fri May 19 2023 13:43:26 GMT+0330 (Iran Standard Time)

//find difference between dates :
const firstDate = new Date();
const secondDate = new Date(2023, 8, 28);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue); //1684491272487
console.log(secondValue); //1632774600000

const timeDifference = secondValue - firstValue;

console.log(timeDifference); //11355289758

const minutes = timeDifference / (1000 * 60);
console.log(minutes); //189254.62856666668

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours); //3154.2438094444447
