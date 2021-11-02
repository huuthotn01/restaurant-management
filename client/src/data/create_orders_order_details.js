const fs = require('fs');
const order_details = require('./order_details.json');
const product_price = require('./product_price.json');
let order_number = [];

for (let i = 0; i < order_details.length; i++)
{
    if (!(order_number.includes(order_details[i]['Order Number'])))
        order_number.push(order_details[i]['Order Number']);
}

let orders = [];

for (let i = 0; i < order_number.length; i++) {
    let details = order_details.filter((detail) => {
       return detail['Order Number'] === order_number[i];
    })

    let total = 0;

    for (let j = 0; j < details.length; j++) 
        total += details[j]['Product Price'] * details[j]['Quantity'];

    total = Math.round(total * 10000) / 10000;

    let order = {
        'Index': (i+1),
        'Order Number': order_number[i],
        'Customer Name': '',
        'Order Date': details[0]['Order Date'],
        'Total Products': details.length,
        'Total Price': total 
    };
    orders.push(order);
}

let details = [];

for (let i = 0; i < 300; i++) {
    const total_product = Math.floor(Math.random() * 5 + 1);
    let products = [];

    for (let j = 0; j < total_product; j++) {
        let product = Math.floor(Math.random()*28);

        while (products.includes(product)) product = Math.floor(Math.random()*28);

        products.push(product);

        const detail = {
            'Order Number': order_number[i],
            'Order Date': orders[i]['Order Date'],
            'Item Name': product_price[product]['Item Name'],
            'Quantity': Math.floor(Math.random() * 4 + 1),
            'Product Price': product_price[product]['Product Price']
        }
        details.push(detail);
    }
}

try {
    const data = JSON.stringify(details, null, 4);

    fs.writeFileSync('./order_details_2.json', data, 'utf8');

    console.log(`File is written successfully!`);

} catch (err) {
    console.log(`Error writing file: ${err}`);
}

orders = [];

for (let i = 0; i < 300; i++) {
    let details_1 = details.filter((detail) => {
       return detail['Order Number'] === order_number[i];
    })

    let total = 0;

    for (let j = 0; j < details_1.length; j++) 
        total += details_1[j]['Product Price'] * details_1[j]['Quantity'];

    total = Math.round(total * 10000) / 10000;

    let order = {
        'Index': (i+1),
        'Order Number': order_number[i],
        'Customer Name': '',
        'Order Date': details_1[0]['Order Date'],
        'Total Products': details_1.length,
        'Total Price': total 
    };
    orders.push(order);
}

try {
    const data = JSON.stringify(orders, null, 4);

    fs.writeFileSync('./orders.json', data, 'utf8');

    console.log(`File is written successfully!`);

} catch (err) {
    console.log(`Error writing file: ${err}`);
}