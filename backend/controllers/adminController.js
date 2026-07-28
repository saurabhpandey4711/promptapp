import db from "../config/db.js";

// Get All Users
export const getAllUsers = (req, res) => {

  const sql = `
    SELECT
      id,
      username,
      email,
      role,
      created_at
    FROM users
    ORDER BY id DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      count: result.length,
      users: result,
    });

  });

};

export const deleteUser = (req, res) => {

  const { id } = req.params;

  // खुद को delete करने से रोकना
  if (req.user.id == id) {
    return res.status(400).json({
      success: false,
      message: "You cannot delete your own account."
    });
  }

  const sql = "DELETE FROM users WHERE id = ?";

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
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });

  });

};


export const getAllPrompts = (req, res) => {

  const sql = `
    SELECT
      prompts.id,
      prompts.title,
      prompts.views,
      prompts.copies,
      users.username,
      categories.name AS category
    FROM prompts
    JOIN users
      ON prompts.user_id = users.id
    JOIN categories
      ON prompts.category_id = categories.id
    ORDER BY prompts.id DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      prompts: result,
    });

  });

};

export const getDashboardStats = (req, res) => {

  const sql = `
    SELECT
      (SELECT COUNT(*) FROM users) AS totalUsers,
      (SELECT COUNT(*) FROM prompts) AS totalPrompts,
      (SELECT COUNT(*) FROM likes) AS totalLikes,
      (SELECT IFNULL(SUM(views),0) FROM prompts) AS totalViews
  `;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      stats: result[0],
    });

  });

};

export const updateUserRole = (req, res) => {

  const { id } = req.params;
  const { role } = req.body;

  if (!["user", "admin"].includes(role)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Role",
    });
  }

  const sql = "UPDATE users SET role=? WHERE id=?";

  db.query(sql, [role, id], (err) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      message: "Role Updated Successfully",
    });

  });

};