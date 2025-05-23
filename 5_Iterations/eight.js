//reduce

const myNums=[1,2,3,4]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr, 0)

// console.log(myTotal);

const cart=[
    {
        itemName: 'js course',
        price:999
    },
    {
        itemName: 'cpp course',
        price:1500
    },
    {
        itemName: 'java course',
        price:1999
    },
    {
        itemName: 'python course',
        price:1050
    }
]

const total=cart.reduce((acc, item)=>acc + item.price, 0)

console.log(total);