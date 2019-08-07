DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    id INT AUTO_INCREMENT not null;
    item_id INT not null;
    product_name varchar(50) not null;
    department_name varchar(50);
    price INT() not null;
    stock_quantity INT() not null;
    PRIMARY KEY (id)
)

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity(1, ))
VALUES(1, 'Pop Tarts', "Grocery", 5, 3)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(2, "Pepsi", "Groceery", 5, 5)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(3, "Twizzlers", "Grocery", 3, 12)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(4, "Jelly Beans", "Grocery", 2, 10)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(5, "Orange Chicken", "Grocery", 12, 8)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(6, "Colored Keyboard", "Electronics", 35, 3)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(7, "Gaming Mouse", "Electronics", 50, 52)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(8, "20' Computer Monitor", "Electronics",99, 3)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(9, "Pot Soil", "Gardening", 10, 9)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(10, "Salt Vinegar Chips", "Grocery", 4, 20)
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(11, "Shovel", "Hardware", 11, 3)