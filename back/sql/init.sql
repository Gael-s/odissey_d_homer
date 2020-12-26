CREATE TABLE users 
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    firstname VARCHAR(90), 
    lastname VARCHAR(90),
    email VARCHAR(90) UNIQUE, 
    pass VARCHAR(90)
);