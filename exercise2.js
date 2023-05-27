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
//Get Element Helper :
const heading = document.querySelector(".heading");
console.log(heading);

const listItem = document.querySelectorAll(".list-item");
console.log(listItem);

//what happen if you type wrong class name in parenthesis

const getElement = (selector, isList) => {
  //when we don't pass second paramter to functoin this paramter is undefined as a default
  /*if (isList) {
      const el = [...document.querySelectorAll(selector)];
      if (el.length < 1) {
        throw new Error(`please double check slector : ${selector}`);
      }
      return el;
    }
    const el = document.querySelector(selector);
    if (el) return el;
    throw new Error(`please double check slector : ${selector}`);
    */
  console.log(isList); //undefined
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);
  //if not a List --> chech exist or not
  if (!isList && el) return el;
  //if is a List ---> chech empty or not

  if (isList && !el.length < 1) return el;

  throw new Error(`please double check slector : ${selector}`);
};

console.log(getElement(".heading")); //here second paramter is undefined
console.log(getElement(".list-item", true));
