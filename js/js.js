// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*
let arr = [
  {
    name: "Milk",

    price: 3.25,
  },

  {
    name: "Coffee",

    price: 1.5,
  },

  {
    name: "Ice Cream",

    price: 7.85,
  },

  {
    name: "Tomatos",

    price: 4.14,
  },

  {
    name: "Onion",

    price: 2.25,
  },
];

const setup = (arr) => {
  let discount = prompt("Какая скидка?");
  let totalSale = 0;
  let total = 0;
  let average = 0;
  let arr_sale = [];
  let min2 = [];
  let apex = 0;
  let arr2 = 0;
  let min_elem = 0;
  let max_elem = 0;

  for (i of arr) {
    min2.push(i.price);
  }

  for (i of arr) {
    min_elem = Math.min.apply(null, min2); //нахожу мин значения
    max_elem = Math.max.apply(null, min2); //нахожу мах значения
    if (i.price === min_elem) {
      console.log(i);
    } else if (i.price === max_elem) {
      console.log(i);
    }
    ///////////////////////////////////////
    total += i.price; // скадываю все цены без скидки
    if (discount <= 100) {
      // делаю скидку
      apex = (discount * i.price) / 100;
      arr2 = i.price - apex;
      i.price = arr2;
    } else console.log("Не жирно?");
    totalSale += arr2; //складываю цены со скидками
  }
  ////////////////////////////////////////////
  for (i of arr) {
    arr_sale.push(i); //Пушу в
  }
  average = total / 2;
  ///////////////////////////////////////////
  console.log(total + " общая цена без скидки");
  console.log(totalSale + " общая цена со скидкой");
  console.log(average + " Средняя цена");
  console.log(arr);
  console.log(arr_sale);
};
setup(arr);
