const mysql = require("mysql");
const inquirer = require("inquirer");

let connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"password",
    database:"bamazon_DB"
})
connection.connect(function (err){
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
       
    });
})

function mySystem() {
    inquirer    
        .prompt([
            {
                name: "item",
                type: "list",
                message: "What product would you like to select?",
                choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            },
            {
                name:"quantity",
                type:'input',
                message: 'How many of the selected items would you like to select?'
            }
        ]).then(function(answers) {
            updateDB(answers.item, answers.quantity);
        });
}

function updateDB(item, count) {
    console.log(item)
    connection.query('select stock_quantity, price from products where item_id = ?', item, function(err, res) {
      if (err) throw err;
      console.log(res)
      if(res[0].stock_quantity <= 0) {
          console.log('sorry, that item is out of stock');
      } else if (res[0].stock_quantity < count) {
          console.log('sorry, there is not enough stock of this item. Please enter a lower number');
      }else {
          connection.query('update products set stock_quantity = stock_quantity - ? where item_id = ?', [count, item], function(err) {
              if (err) throw err;
            console.log('Here is your order of' + count + '' + item)
            console.log('Your total comes out to $' + (count * parseFloat(res[0].price)).toFixed(2));
            console.log('Thank your for shopping at Bamazon!');
          });
      }
      connection.end();
    });
}
mySystem();