let testScores = [20,39,50,70,67,22,90,75,98,60];

let numbers = testScores.filter(studentScore);

function studentScore(data) {
    return data >= 70;
}

console.log(numbers);
