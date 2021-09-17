/* Creacion de BD */

DROP DATABASE IF EXISTS grupo4;
CREATE DATABASE grupo4;
USE grupo4;

/* Creacion de tablas */
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    is_admin TINYINT(10) NOT NULL,
    image VARCHAR(255) NOT NULL
);
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    quantity TINYINT(255) UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    price VARCHAR(255) NOT NULL,
    discount VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(500) NOT NULL UNIQUE,
    category_id INT NOT NULL
);
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE product_color (
    product_id INT(100) NOT NULL,
    color_id INT(100) NOT NULL
);
CREATE TABLE colors (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL
);

/* Insertamos los colores */
INSERT INTO colors (name) VALUES ("Black");
INSERT INTO colors (name) VALUES ("White");
INSERT INTO colors (name) VALUES ("Pink");
INSERT INTO colors (name) VALUES ("Grey");
INSERT INTO colors (name) VALUES ("Blue");
INSERT INTO colors (name) VALUES ("Red");
INSERT INTO colors (name) VALUES ("Yellow");
INSERT INTO colors (name) VALUES ("Orange");
INSERT INTO colors (name) VALUES ("Green");
INSERT INTO colors (name) VALUES ("Beige");

/* Insertamos los usuarios 
INSERT INTO users (name, lastname, email, password,address, is_admin,image) 
VALUES ("Francisco", "Puig","fp@dh.com", 12341234, "congreso1234", true, "img_avatar2.png");
INSERT INTO users (name, lastname, email, password,address, is_admin,image) 
VALUES ("Stefania", "Ann","sa@dh.com", 12341234, "congreso1234", true, "img_avatar2.png");
INSERT INTO users (name, lastname, email, password,address, is_admin,image) 
VALUES ("Catriel", "Basile","cb@dh.com", 12341234, "congreso1234", true, "img_avatar2.png");
*/

/* Insertamos las categorias */
INSERT INTO categories (name) VALUES ("Sweater");
INSERT INTO categories (name) VALUES ("T-Shirt");
INSERT INTO categories (name) VALUES ("Skirt");
INSERT INTO categories (name) VALUES ("Hoodie");
INSERT INTO categories (name) VALUES ("Jumper");
INSERT INTO categories (name) VALUES ("Short");
INSERT INTO categories (name) VALUES ("Dress");
INSERT INTO categories (name) VALUES ("Coat");
INSERT INTO categories (name) VALUES ("Jacket");
INSERT INTO categories (name) VALUES ("Diver");

/* Insertamos los productos */
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Chaleco Cuadriculado", "$1500", "10%", "chaleco-cuadriculado.jpeg", "chaleco-cuadriculado",9);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (120, "Buzo Oxford", "$1500", "10%", "buzo-oxford.jpeg","buzo-oxford",10);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (80, "Remera Angel", "$1500", "10%", "remera-angel.jpeg", "remera-angel",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Chaleco Trenza", "$1500", "10%", "chaleco-trenza.jpeg", "chaleco-trenza",9);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Chaleco Tejido", "$1500", "10%", "chaleco-tejido.jpeg", "chaleco-tejido",9);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Chomba", "$1500", "10%", "chomba-gris.jpeg", "chomba-gris",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (120, "Manguita", "$1500", "10%", "manguita-gris.jpeg","manguita-gris",3);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (80, "Saco", "$1500", "10%", "saco-marron.jpeg", "saco-marron",4);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Paisana", "$1500", "10%", "paisana-roja.jpeg", "paisana-roja",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Remera-Morley", "$1500", "10%", "remera-morley.jpeg", "remera-morley",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (120, "Polera", "$1500", "10%", "polera-gris.jpeg","polera-gris",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (80, "Remera Aro", "$1500", "10%", "remera-aro.jpeg", "remera-aro",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Jumper Cuadrille", "$1500", "10%", "jumper-cuadrille.jpeg", "jumper-cuadrille",5);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (100, "Jumper", "$1500", "10%", "jumper-negro.jpeg", "jumper-negro",5);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (120, "Remera", "$1500", "10%", "remera-mangalarga.jpeg","remera-mangalarga",2);
INSERT INTO products (quantity, name, price, discount, image, description,category_id) 
VALUES (80, "Chaleco Cuadrille", "$1500", "10%", "chaleco-cuadrille.jpeg", "chaleco-cuadrille",9);

/* Insertamos los productos_color */
INSERT INTO product_color (product_id, color_id) VALUES (1,1);
INSERT INTO product_color (product_id, color_id) VALUES (2,1);
INSERT INTO product_color (product_id, color_id) VALUES (3,1);
INSERT INTO product_color (product_id, color_id) VALUES (4,1);
INSERT INTO product_color (product_id, color_id) VALUES (5,1);
INSERT INTO product_color (product_id, color_id) VALUES (6,1);
INSERT INTO product_color (product_id, color_id) VALUES (7,1);
INSERT INTO product_color (product_id, color_id) VALUES (8,1);
INSERT INTO product_color (product_id, color_id) VALUES (9,1);
INSERT INTO product_color (product_id, color_id) VALUES (10,1);
INSERT INTO product_color (product_id, color_id) VALUES (11,1);
INSERT INTO product_color (product_id, color_id) VALUES (12,1);
INSERT INTO product_color (product_id, color_id) VALUES (13,1);
INSERT INTO product_color (product_id, color_id) VALUES (14,1);
INSERT INTO product_color (product_id, color_id) VALUES (15,1);
INSERT INTO product_color (product_id, color_id) VALUES (16,1);

