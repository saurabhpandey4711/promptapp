import db from "../config/db.js";

// Get All Prompts
export const getPrompts = (req, res) => {

  const sql = `
    SELECT
      p.*,
      c.name AS categoryName
    FROM prompts p
    LEFT JOIN categories c
    ON p.category_id = c.id
    ORDER BY p.id DESC
  `;

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
      prompts: result,
    });

  });

};

// Get Single Prompt
export const getPromptById = (req, res) => {

  const { id } = req.params;

  const sql = `
    SELECT
      p.*,
      c.name AS categoryName
    FROM prompts p
    LEFT JOIN categories c
    ON p.category_id = c.id
    WHERE p.id = ?
  `;

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Prompt not found",
      });
    }

    const updateViews =
  "UPDATE prompts SET views = views + 1 WHERE id = ?";

db.query(updateViews, [id], (updateErr) => {

  if (updateErr) {
    return res.status(500).json({
      success: false,
      message: updateErr.message,
    });
  }

  result[0].views = result[0].views + 1;

  res.status(200).json({
    success: true,
    prompt: result[0],
  });

});

  });

};

// Add Prompt
export const addPrompt = (req, res) => {

  const {
    title,
    description,
    prompt_text,
    image,
    category_id,
    user_id,
  } = req.body;

  const sql = `
    INSERT INTO prompts
    (title, description, prompt_text, image, category_id, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      title,
      description,
      prompt_text,
      image,
      category_id,
      user_id,
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Prompt Added Successfully",
        promptId: result.insertId,
      });

    }
  );
};

// Get User Prompts
export const getUserPrompts = (req, res) => {

  const { userId } = req.params;

  const sql = `
    SELECT
      p.*,
      c.name AS categoryName
    FROM prompts p
    LEFT JOIN categories c
    ON p.category_id = c.id
    WHERE p.user_id = ?
    ORDER BY p.id DESC
  `;

  db.query(sql, [userId], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      prompts: result,
    });

  });

};

// Update Prompt
export const updatePrompt = (req, res) => {

  const { id } = req.params;

  const {
    title,
    description,
    prompt_text,
    image,
    category_id,
  } = req.body;

  const sql = `
    UPDATE prompts
    SET
      title=?,
      description=?,
      prompt_text=?,
      image=?,
      category_id=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      title,
      description,
      prompt_text,
      image,
      category_id,
      id,
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Prompt Updated Successfully",
      });

    }
  );

};

// Delete Prompt
export const deletePrompt = (req, res) => {

  const { id } = req.params;

  const sql = "DELETE FROM prompts WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Prompt Not Found",
      });
    }

    res.json({
      success: true,
      message: "Prompt Deleted Successfully",
    });

  });

};
