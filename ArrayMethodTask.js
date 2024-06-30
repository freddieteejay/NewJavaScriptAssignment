//Number one
let testScores = [20,39,50,70,67,22,90,75,98,60];

let numbers = testScores.filter(studentScore);

function studentScore(data) {
    return data >= 70;
}

console.log(numbers);

// number 2
const studentScores = [85, 92, 78, 88, 95];

let numbers = studentScores.map(newFunction);

function newFunction(scores) {
    return scores + 5;
}
console.log(numbers);

//number 3
const array = [2,4,6,8,10];

let numbers = array.map(myFunction);

function myFunction(scores) {
    return scores ** 2;
}

console.log(numbers);

//number 4
let array = ["Emily", "jack", "Sophia", "Daniel"];
let bookArr = ["Math", "English", "Science", "Computer"];
for (let user of array) {
    let book = bookArr.shift();
    console.log(`${user} ${book}`);
}
//number 5
let classTiming = ["9:00 AM", "11:00 AM", "1:00PM", "3:00 PM", "5:00 PM"];
let afternoonClassTiming = classTiming.filter(timing => timing.includes("PM"));
console.log(afternoonClassTiming);

//number 6
let expenses ={
    "groceries" : 150,
    "dining out": 100,
    "transportation" : 50,
    "entertainment" : 80,
};

let totalExpenses = 0;

for(let liability in expenses){
    totalExpenses += expenses[liability];
}
console.log(totalExpenses);
