//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB 2 Connected for ${name}`)
})('Shobhit')