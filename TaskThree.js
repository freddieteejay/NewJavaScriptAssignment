const array = [2,4,6,8,10];

let numbers = array.map(myFunction);

function myFunction(scores) {
    return scores ** 2;
}

console.log(numbers);
