const user = {
    username: "shobhit",
    loginCount :5,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this
}

const user1 = new User("Rohit",12, true)
const user2 = new User("Ankit",18, false)

console.log(user1.constructor);
// console.log(user2);