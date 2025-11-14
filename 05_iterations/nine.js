const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curval) {
    console.log(`acc: ${acc} curval: ${curval}`);
    return acc + curval
}, 0)

console.log(myTotal);

// const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile DEV Course",
        price: 5999
    },
    {
        itemName: "Dats Science Course",
        price: 12999
    },
]


const totalCost = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalCost);
