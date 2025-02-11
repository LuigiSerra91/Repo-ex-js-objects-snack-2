//Code Question 1

/* const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ? */

// viene stampato Double cheese burger in tutti e 2


//Code Question 2


/* const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ? */

// viene stampato Salad in tutti e 2

// Code Question 3

/* const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger); */

// sono stati creati 9 oggetti

// Code Question 4

/* const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
}; */

// il metodo migliore per clonare l'oggetto chef  è lo spreed perchè con spreed tiene anche la funzione makeBurger

// il metodo migliore per clonare l'oggetto resturant è structuredClone perchè clona in profondita e tiene new Date


// Code Question 5


//  gli oggetti creati in memoria  sono 5

// Chef Hyur

// Chef Hyur

//  Hyur's Burgers

// Hyur's II