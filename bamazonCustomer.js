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
        console.log(res);
    });
})

function mySystem() {
    inquirer    
        .prompt([
            {
                name: "item",
                type: "list",
                message: "What product would you like to select?"
            }
            {
                name:"quantity",
                type:'input',
                message: 'How many of the selected items would you like to select?'
            }
        ])
}

