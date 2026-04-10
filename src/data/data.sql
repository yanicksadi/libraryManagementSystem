-- -- CREATE TABLE IF NOT EXISTS users (
-- --     id SERIAL PRIMARY KEY,
-- --     name VARCHAR(100) NOT NULL,
-- --     email VARCHAR(100) UNIQUE NOT NULL,
-- --     created_at TIMESTAMP DEFAULT NOW()
-- -- )

-- import pool from "../config/db.js";

-- CREATE TABLE members (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL
-- );

-- CREATE TABLE authors (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE books (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author_id INT NOT NULL,
--     FOREIGN KEY (author_id) REFERENCES authors(id)
-- );

-- CREATE TABLE borrow_records (
--     id SERIAL PRIMARY KEY,
--     member_id INT NOT NULL,
--     book_id INT NOT NULL,
--     borrow_date DATE NOT NULL,
--     return_date DATE,
--     FOREIGN KEY (member_id) REFERENCES members(id),
--     FOREIGN KEY (book_id) REFERENCES books(id)
-- );


-- INSERT INTO authors (name)
-- VALUES ('J.D. Salinger');

-- INSERT INTO books (title, author_id)
-- VALUES ('Peace of Mind', 1);

-- INSERT INTO books (title, author_id)
-- VALUES ('The River', 1);

-- INSERT INTO members (name, email)
-- VALUES ('Yanick','nckmuhire@gmail.com'),
--  ('SADI','sad@gmail.com');

-- INSERT INTO borrow_records (book_id, member_id, borrow_date, return_date) VALUES (1,1,'2025-01-01', NULL);

-- SELECT 
--     books.title, 
--     members.name, 
--     members.email,
--     borrow_records.borrow_date 
-- FROM borrow_records
-- JOIN books
--     ON borrow_records.book_id = books.id
-- JOIN members
--     ON borrow_records.member_id = members.id
-- WHERE borrow_records.return_date IS NULL;
