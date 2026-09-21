import db from "../config/db.js";

export const toggleLike = (req, res) => {
  const { promptId } = req.params;

 
  const userId = 1;

  const checkSql =
    "SELECT * FROM likes WHERE user_id=? AND prompt_id=?";

  db.query(checkSql, [userId, promptId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    // Unlike
    if (result.length > 0) {
      const deleteSql =
        "DELETE FROM likes WHERE user_id=? AND prompt_id=?";

      db.query(deleteSql, [userId, promptId], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        return res.json({
          success: true,
          liked: false,
          message: "Prompt Unliked",
        });
      });
    }

    // Like
    else {
      const insertSql =
        "INSERT INTO likes(user_id,prompt_id) VALUES(?,?)";

      db.query(insertSql, [userId, promptId], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        res.json({
          success: true,
          liked: true,
          message: "Prompt Liked",
        });
      });
    }
  });
};

export const getLikes = (req, res) => {
  const { promptId } = req.params;

  const sql =
    "SELECT COUNT(*) AS totalLikes FROM likes WHERE prompt_id=?";

  db.query(sql, [promptId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      likes: result[0].totalLikes,
    });
  });
};


export const getLikedPrompts = (req, res) => {

  const { userId } = req.params;

  const sql = `
    SELECT
      p.*,
      c.name AS categoryName
    FROM likes l
    JOIN prompts p
      ON l.prompt_id = p.id
    LEFT JOIN categories c
      ON p.category_id = c.id
    WHERE l.user_id = ?
    ORDER BY l.id DESC
  `;

  db.query(sql, [userId], (err, result) => {

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