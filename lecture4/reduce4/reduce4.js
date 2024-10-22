let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
    const total = arr.reduce( (acc, cur) => {
        return acc + cur.price;
    }, 0 );
    return total;  
}

console.log(shoppingSpree(wishlist));