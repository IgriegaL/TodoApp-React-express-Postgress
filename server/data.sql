CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

/* Insert */
insert into todos (id, user_email,title, progress, date ) VALUES('0', 'ania@test.cl', 'First todo', 10, 'thu Dec 29 2022 13:25:45 GMT+0400 (Gulf Standart time)');
/* Ver all Todos*/
select * from todos;

/**
Package to install
*/
npm i express cors bcrypt jsonwebtoken uuid dotenv nodemon
-- Instalar global
npm i -g ...