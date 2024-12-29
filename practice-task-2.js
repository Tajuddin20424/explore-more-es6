// Task-2:
// console.log output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "c",
        className: "IX",
        address: {
            "building no": 12,
            "street": "st. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        className: "A",
        address: {
            "building no": 85,
            "street": "Dc road",
            "city": "Kochukhet",
            "country": "Bangladesh"
        }
    }
};

let city = students[2222].address.city;
let name = students[3333].name;

console.log(`${city}, ${name}`);



