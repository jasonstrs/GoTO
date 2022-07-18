const jwt = require('jsonwebtoken');
const config = require('./config');

const generateToken = (payload, response) => {
  const token = jwt.sign(payload, config.secret_key, {
    algorithm: 'HS256',
    expiresIn: '365d',
  });
  response.cookie('token', token, { maxAge: 2147483647 });
};

const verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secret_key, (err, decoded) => {
      if (err) {
        reject();
      }
      resolve(decoded);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
