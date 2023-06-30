/*
//5-Reduce Basics :
fetch('./products.json')
  .then((res) => res.json())
  .then((response) => showData(response));

function showData(data) {
  const staff = data;
  //always return your fisrt parameter :
  const dailyTotal = staff.reduce((total, person) => {
    console.log('total is : ', total);
    console.log('person.price is : ', person.price);
    console.log('------------------------');
    total += person.price;
    return total;
    // return total += person.price;
  }, 0); //here 0 is value of total in first iteration

  console.log(dailyTotal);
}
*/
fetch('./products.json')
  .then((res) => res.json())
  .then((response) => showData(response));
//here we dont have initial value 0 instead we have initial value of on object for reduce :
function showData(data) {
  const cart = data;
  let { totalItems, cartTotal } = cart.reduce(
    (total, cartItem) => {
      const { age, price } = cartItem;
      //count items :
      total.totalItems += age;
      total.cartTotal += age * price;
      return total;
    },
    //here total is this object : {totalItems: 0, cartTotal: 0}
    {
      totalItems: 0,
      cartTotal: 0,
    }
  );
  //in above second paramter is an object that have 2 item that have initial value 0 in first iteration.
  cartTotal = Number(cartTotal.toFixed(2));
  //wiht toFixed(2) after we have 2 number after .
  console.log(totalItems, ',,,', cartTotal);
}
