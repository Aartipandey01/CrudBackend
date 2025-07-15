
import { Auth } from '../model/auth.model.js';

const loginUser = async (req, res) => {
  const { Username, Password } = req.body;

  if (!Username || !Password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const user = await Auth.login(Username, Password);
    if (user) {
      return res.json({ success: true, message: 'Login successful', user });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const signup = async (req, res) => {
  try {
    const { Firstname, Lastname, Email, Username, Password } = req.body;

    if (!Firstname || !Lastname || !Email || !Username || !Password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const result = await Auth.signup({ Firstname, Lastname, Email, Username, Password });

    res.json({ success: true, message: 'Signup successful', data: result });
  } catch (err) {
    console.error('Signup DB error:', err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ success: false, message: 'Username or Email already exists' });
    }
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
};

export { loginUser, signup };
// import jwt from 'jsonwebtoken';
// import { Auth } from '../model/auth.model.js';

// const JWT_SECRET = 'your_secret_key'; 


// const loginUser = async (req, res) => {
//   const { Username, Password } = req.body;

//   if (!Username || !Password) {
//     return res.status(400).json({ success: false, message: 'All fields are required' });
//   }

//   try {
//     const user = await Auth.login(Username, Password);

//     if (user) {
//       // 
//       const token = jwt.sign(
//         { id: user.id, Username: user.Username },
//         JWT_SECRET,
//         { expiresIn: '15days' }
//       );

//       return res.json({
//         success: true,
//         message: 'Login successful',
//         token,
//         user
//       });
//     } else {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid credentials. Please sign up first.'
//       });
//     }
//   } catch (err) {
//     console.error('Login error:', err);
//     return res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

// const signup = async (req, res) => {
//   try {
//     const { Firstname, Lastname, Email, Username, Password } = req.body;

//     if (!Firstname || !Lastname || !Email || !Username || !Password) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     const result = await Auth.signup({ Firstname, Lastname, Email, Username, Password });

//     res.json({ success: true, message: 'Signup successful. You can now log in.', data: result });
//   } catch (err) {
//     console.error('Signup DB error:', err);
//     if (err.code === 'ER_DUP_ENTRY') {
//       return res.status(409).json({ success: false, message: 'Username or Email already exists' });
//     }
//     res.status(500).json({ success: false, message: 'Signup failed' });
//   }
// };

// export { loginUser, signup };
