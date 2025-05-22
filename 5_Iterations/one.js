//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is coming....")
    }
    // console.log(element);
}

for (let i = 1; i <=10; i++) {
    //console.log(`Table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        //console.log(i + '*' + j +' = '+i*j)
    }
}

let arr=['flash','batman','superman']

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element);
}

//break and continue

// for (let i = 1; i <=20; i++) {
//     if(i==5){
//         console.log("5 Detected...");
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log("5 Detected...");
        continue
    }
    console.log(`Value of i is ${i}`);
}
