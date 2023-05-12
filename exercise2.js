/*
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
//Promises Example :
//.first - after 1s first red.
//.second - after 3s second blue.
//.third - after 2s third green.
//in SEQUENCE!
/*
const btn = document.querySelector(".btn");

const promise = new Promise((resolve, reject) => {
  resolve(console.log("success"));
});
btn.addEventListener("click", () => {
  promise
    .then(() =>
      setTimeout(() => {
        document.querySelector(".first").style.color = "red";
      }, 1000)
    )
    .then(() =>
      setTimeout(() => {
        document.querySelector(".second").style.color = "blue";
      }, 3000)
    )
    .then(() =>
      setTimeout(() => {
        document.querySelector(".third").style.color = "green";
      }, 2000)
    );
});*/

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => addColor(3000, ".second", "blue"))
    .then(() => addColor(2000, ".third", "green"))
    .catch((err) => console.log(err));
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`there is no such element : "${selector}"`);
    }
  });
}

//Note : if we comment line 140 and don't have resolve() function just firt addColor() gonna run so remember wheter your are return a value or not you need to either resolve the promise or rejected
