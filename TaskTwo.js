const studentScores = [85, 92, 78, 88, 95];

let numbers = studentScores.map(newFunction);

function newFunction(scores) {
    return scores + 5;
}
console.log(numbers);

