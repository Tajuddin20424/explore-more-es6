// Task-3:
// access and then show habluder adda
// show output Beginner

let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "habluder adda",
                category: "xyz",
                price: "20$",
            },
            // bookCategory: "Basic",
        },
        {
            bookId: 2,
            bookDetails: {
                name: "gobluder adda",
                category: "ABC",
                price: "40$",
            },
            bookCategory: "Beginner"
        }
    ]
}

let bookId= 0;
let name = data2.data[bookId].bookDetails.name;
let bookCategory = data2.data[bookId].bookCategory;
console.log(`${name}`);

// let bookId= 1;
// let name = data2.data[bookId].bookDetails.name;
// let bookCategory = data2.data[bookId].bookCategory;
// console.log(`${bookCategory}`);
