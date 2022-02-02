let number=101010;
console.log(number+100);
console.log(typeof number);

let product1= {
    title:'milk',
    prise: 20,
    quantity: 15,
    manufacturer: {
        title: 'milka',
        citi: 'kiyev',
        zip: 1234,
        conservants: [
            {id: 'c122', status: 1},
            {id: 'a10', status: 2},
            {id: 'b1', status: 1}
        ]
    }
}
console.log(product1);
console.log(product1.title);
console.log(product1.quantity);
console.log(product1.manufacturer.conservants[2].status);


let xxx = 1005000 + " ";
console.log(xxx);
console.log(typeof xxx);


let smg = "hello okten";
document.write('<div>'+ smg +'</div>');
document.write(`<div>${smg}</div>`);
