// data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];

console.log(data[0].address);


const products = {
    const: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}
// second product price
console.log(products.data[1].price);


const user = {
    id: 50001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no doral',
        } 
    },
    city: 'dhaka'
}

console.log(user.address.street.second);


const user2 = {
    id: 50002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'bangladesh'
    }
}
console.log(user2.address.street?.second);
