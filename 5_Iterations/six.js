//filter

const nums=[1,2,3,4,5,6,7,8,9,10]

// let newNums = nums.filter((num)=>num > 5)

// let newNums = nums.filter((num)=>{
//     return num > 5
// })

// const newNums=[]
// nums.forEach((num)=>{
//     if(num > 5){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books =[
    {title:'Book 1', genre:'Fiction', publish : 1981, edition:2004},
    {title:'Book 2', genre:'Non-Fiction', publish : 1990, edition:2000},
    {title:'Book 3', genre:'History', publish : 2001, edition:2009},
    {title:'Book 4', genre:'Fiction', publish : 1987, edition:2014},
    {title:'Book 5', genre:'Science', publish : 1979, edition:2005},
    {title:'Book 6', genre:'Non-Fiction', publish : 2011, edition:2016},
    {title:'Book 7', genre:'History', publish : 2019, edition:2023},
    {title:'Book 8', genre:'Fiction', publish : 1980, edition:1995}
];

// const userBooks = books.filter((bk)=>bk.genre==='History')

let userBooks = books.filter((bk)=>{
    return bk.publish>=1990 && bk.genre==='History'
})
console.log(userBooks);
