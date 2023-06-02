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
//String includes() :
//String includes() - checks if a string contains another string
//this method uses to search filter in websites
//this method is case-sensitive

const firstName = 'john';
const result = firstName.includes('jo');
console.log(result); //true

const result2 = firstName.includes('j');
console.log(result2); //true

const result3 = firstName.includes('j', 0);
console.log(result3); //true

const result4 = firstName.includes('j', 2);
console.log(result4); //false

const myProducts = {
  title: 'Leather Chair',
};

const result5 = myProducts.title.includes('Le');
console.log(result5); //true

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

const text = 'cha';

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);

console.log(filteredProducts);
