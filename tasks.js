// JavaScript.info tasks
// task 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";
delete user.name;

// Task 2

const isEmpty = (obj) => {
    for (let key in obj){
        return false;
    }

    return true;
}

let schedule = {};

console.log(isEmpty(schedule))

schedule["8:30"] = "get up";

console.log(isEmpty(schedule))

// task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function checkSum(obj) {
    let sum = 0;
    for (let keys in obj) {
        sum += obj[keys];
    }
    return sum;
}

console.log(checkSum(salaries))


// task 4

const multiplyNumeric  = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu)

console.log(menu)