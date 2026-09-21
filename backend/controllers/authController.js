import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const checkUser = "SELECT * FROM users WHERE email=?";

    db.query(checkUser, [email], async (err, result) => {

      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message
        });
      }

      if (result.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Email already exists"
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const sql =
        "INSERT INTO users(username,email,password) VALUES(?,?,?)";

      db.query(
        sql,
        [username, email, hashedPassword],
        (err, result) => {

          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message
            });
          }

          res.status(201).json({
            success: true,
            message: "User Registered Successfully"
          });

        }
      );

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

console.log("Entered Password:", password);
console.log("Stored Hash:", user.password);
console.log("Password Match:", isMatch);


    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  });
};

export const getCurrentUser = (req, res) => {
  const userId = req.user.id;

  const sql = `
    SELECT
      id,
      username,
      email,
      profile_image,
      role,
      created_at
    FROM users
    WHERE id = ?
  `;

  db.query(sql, [userId], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: result[0],
    });

  });
};

export const getProfile = (req, res) => {

  const { id } = req.params;

  const sql = `
    SELECT
      id,
      username,
      email,
      profile_image,
      created_at
    FROM users
    WHERE id = ?
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
        message: "User Not Found",
      });
    }

    res.json({
      success: true,
      user: result[0],
    });

  });

};


export const updateProfile = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({
      success: false,
      message: "Username and Email are required",
    });
  }

  // Security: user sirf apna profile update kar sake
  if (Number(req.user.id) !== Number(id)) {
    return res.status(403).json({
      success: false,
      message: "You can only update your own profile",
    });
  }

  // Agar new image upload hui hai
  if (req.file) {
    const profileImage = `/uploads/profiles/${req.file.filename}`;

    const sql = `
      UPDATE users
      SET username = ?, email = ?, profile_image = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [username, email, profileImage, id],
      (err, result) => {
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

        res.status(200).json({
          success: true,
          message: "Profile Updated Successfully",
          profile_image: profileImage,
        });
      }
    );
  } else {
    // Image select nahi ki → purani image same rahegi
    const sql = `
      UPDATE users
      SET username = ?, email = ?
      WHERE id = ?
    `;

    db.query(
      sql,
      [username, email, id],
      (err, result) => {
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

        res.status(200).json({
          success: true,
          message: "Profile Updated Successfully",
        });
      }
    );
  }
};