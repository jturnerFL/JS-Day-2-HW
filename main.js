/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
     pizza:["Deep Dish","South Side Thin Crust"],
     tacos:"Anything not from Taco bell",
     burgers:"Portillos Burgers",
     ice_cream:["Chocolate","Vanilla","Oreo"],
     shakes:[{
         oberwise:"Chocolate",
         dunkin:"Vanilla",
         culvers:"All of them",
         mcDonalds:"Sham-rock-shake",
         cupids_candies:"Chocolate Malt"
     }]
}
console.log(Object.keys(person3));
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


// Person = (name,age) => {
//     this.name = name;
//     this.age = age;
//     this.printInfo = function(name, age){
//         console.log(age)
//     }
// }
// let my_person = new Person('Steve', 22)
// let my_person2 = new Person('Kevin', 43)
// console.log(my_person.age(+1))
// console.log(my_person2)


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
// function addAge(){
//     return addAge +1

/*  Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (num) => {
    return new Promise( (resolve, reject) => {
        if(num > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
stringLength(5)
.then( (result) => {
    console.log('Big Number')
})
.catch( (error) => {
    console.log('Small Number')
})