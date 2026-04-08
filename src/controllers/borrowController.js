import pool from '../config/db.js';

const getBorrowedBooks = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        books.title,
        members.name,
        members.email,
        borrow_records.borrow_date
      FROM borrow_records
      JOIN books ON borrow_records.book_id = books.id
      JOIN members ON borrow_records.member_id = members.id
      WHERE borrow_records.return_date IS NULL;
    `);

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getBorrowedBooks;