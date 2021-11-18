var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 0.5,
      percent: 0,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
    offer: {
      number: 0,
      percent: 0,
    },
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 0,
      percent: 0.33,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
    offer: {
      number: 0,
      percent: 0,
    },
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
    offer: {
      number: 0,
      percent: 0,
    },
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
    offer: {
      number: 0,
      percent: 0,
    },
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
    offer: {
      number: 0,
      percent: 0,
    },
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
    offer: {
      number: 0,
      percent: 0,
    },
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
    offer: {
      number: 0,
      percent: 0,
    },
  },
];
var cartList = [];
var cart = [];
var subtotal = {
  grocery: {
    value: 0,
    discount: 0,
  },
  beauty: {
    value: 0,
    discount: 0,
  },
  clothes: {
    value: 0,
    discount: 0,
  },
};
var total = 0;

// Exercise 1
function buy(id) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (id == product.id) {
      cartList.push(product);
    }
  }
  console.log(cartList);
}

// Exercise 2
function cleanCart() {
  cartList = [];
  cart = [];
}

// Exercise 3
function calculateSubtotals() {
  for (let i = 0; i < cartList.length; i++) {
    const product = cartList[i];
    const type = product.type;
    const price = product.price;

    if (type == "grocery") {
      subtotal.grocery.value = subtotal.grocery.value + price;
    }
    if (type == "beauty") {
      subtotal.beauty.value = subtotal.grocery.value + price; 
    }
    if (type == "clothes") {
      subtotal.clothes.value = subtotal.grocery.value + price; 
    }
  }
  console.log(subtotal);
}

// Exercise 4
function calculateTotal() {
  for (let categoria in subtotal) {
    let totalProvisional = subtotal[categoria].value;
    total = total + totalProvisional;
  }
  console.log(total);
}

// Exercise 5
function generateCart() {
  for (let i = 0; i < cartList.length; i++) {
    //Recorre toda la lista de la compra
    const product = cartList[i];
    let found = false;
    for (let j = 0; j < cart.length; j++) {
      //Recorre el CartList
      var cartProduct = cart[j];
      if (product.id === cartProduct.id) {
        //Si ya encuentra el id, le añade uno
        found = true;
        cartProduct.quantity++;
        cartProduct.subtotal = cartProduct.quantity * cartProduct.price;
      }
    }
    if (found == false) {
      //Si no lo encuentra, la cantidad se queda en uno
      var cartProduct = {
        //Generamos objeto con los datos del producto
        id: product.id,
        name: product.name,
        price: product.price,
        type: product.type,
        quantity: 1,
        subtotal: product.price,
        offer: product.offer,
        subtotalWithDiscount: 0,
      };

      cart.push(cartProduct); //Añadimos el producto con sus datos en el Cart
    }
  }
  console.log(cart);
}

// Exercise 6
function applyPromotionsCart() {

  //*** VERSION OK ANTIGUA ***/:
  /* for (i = 0; i < cart.length; i++) {
    // Recorrer Cart
    const cartProd = cart[i];

    if (cartProd.id == 1 && cartProd.quantity >= 3) {
      cartProd.subtotalWithDiscount =
        cartProd.subtotal - cartProd.offer.number * cartProd.quantity;
      );
    } else if (cartProd.id == 3 && cartProd.quantity >= 10) {
      cartProd.subtotalWithDiscount =
        cartProd.subtotal - cartProd.subtotal * cartProd.offer.percent;
      );
    }
  } */


  // *** VERSION DEFINITIVA REFACTOR ***
  for (i = 0; i < cart.length; i++) {
    const cartProd = cart[i];
    if (cartProd.id == 1 && cartProd.quantity > 2) { //Cooking oil offer
      cartProd.subtotalWithDiscount =
        (cartProd.price - cartProd.offer.number) * cartProd.quantity;
    }
    if (cartProd.id == 3 && cartProd.quantity > 9) { //Cupcakes offer
      cartProd.subtotalWithDiscount =
        (cartProd.price - (cartProd.price * cartProd.offer.percent)) * cartProd.quantity ;
    }
  }
}

// Exercise 7
function addToCart(id) {

  // buscar producto
  let found = false;

  for (let i = 0; i < cart.length && !found; i++) {

    //Compara productos
    if (cart[i].id === id) {
      // id que me pasan por parametros//Suma 1
      cart[i].quantity++; //(ya no existe "cartProduct")
      found = true;
      cart[i].subtotal = cart[i].quantity * cart[i].price;
    }
  }
  if (!found) {
    for (let i = 0; i < products.length && !found; i++) {
      if (products[i].id === id) {
        var cartProduct = {
          // Generamos objeto con los datos del producto
          id: products[i].id,
          name: products[i].name,
          price: products[i].price,
          type: products[i].type,
          quantity: 1,
          subtotal: products[i].price,
          offer: products[i].offer,
          subtotalWithDiscount: 0,
        };
        found = true;
        cart.push(cartProduct); // Añadimos el producto con sus datos en el Cart
      }
    }
  }
  applyPromotionsCart();
  console.log(cart);
}