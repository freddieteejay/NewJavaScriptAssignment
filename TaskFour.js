let array = ["Emily", "jack", "Sophia", "Daniel"];
let bookArr = ["Math", "English", "Science", "Computer"];
for (let user of array) {
    let book = bookArr.shift();
    console.log(`${user} ${book}`);
}
