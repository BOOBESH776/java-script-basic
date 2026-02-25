//user object with properties and methods

let user1 = {
    name: "John",
    age: "30",

    login() {
        console.log("hi", this.name, "User logged in");
    },
    loginout() {
        console.log(this.name, "User logged out");
    }
}

let user2 = {
    name: "John",
    age: "30",

    login() {
        console.log("hi", this.name, "User logged in");

    },
    loginout() {
        console.log("User logged out");
    }
}


let user3 = {
    name: "jaya",
    age: "30",

    login() {
        console.log("hi", this.name, "User logged in");

    },
    loginout() {
        console.log("User logged out");
    }
}


user1.login(); // Output: User logged in
user2.loginout(); // Output: User logged out
user3.login(); // Output: User logged in

//class

class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let userone = new User("jhon",30);
let usertwo = new User("jaya",25);