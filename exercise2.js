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
// Async / Await
// const example = async () => {
//   return "hello there";
// };

// console.log(example()); //Promise {<fulfilled>: 'hello there'}

// async function someFunc() {
//   const result = await example();
//   console.log(result);
//   console.log("hello world");
// }
// someFunc();

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];
//get array artciles of user based on id of users :
const getData = async () => {
  try {
    const user = await getUser("john");
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getData();

//another way :
// getUser('susan')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err))

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      resolve(user);
    } else {
      reject(`No such user with name : ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);

    if (userArticles) {
      resolve(userArticles.articles);
    } else {
      reject(`Wrong ID`);
    }
  });
}

//async and await make promises easier to write :

//async makes a function return a Promise
//await makes a function wait for a Promise
