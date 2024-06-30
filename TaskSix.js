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