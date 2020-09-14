const invoice = 100; 
const stock = 100;

// Write code under this line
const message =
  stock < invoice
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';;

console.log(message); 