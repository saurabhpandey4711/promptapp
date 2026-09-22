import db from "../config/db.js";

export const getCategories = (req, res) => {
  const sql = "SELECT * FROM categories";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      categories: result,
    });
  });
};


//import db from "../config/db.js";

export const addCategory = (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Category name is required",
    });
  }

  const categoryName = name.trim();

  const checkSql = `
    SELECT id
    FROM categories
    WHERE LOWER(name) = LOWER(?)
  `;

  db.query(checkSql, [categoryName], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }

    const insertSql = `
      INSERT INTO categories (name)
      VALUES (?)
    `;

    db.query(insertSql, [categoryName], (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Category added successfully",
        category: {
          id: result.insertId,
          name: categoryName,
        },
      });
    });
  });
};