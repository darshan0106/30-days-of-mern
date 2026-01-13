# JWT login

This project implements a secure JWT-based authentication system using Node.js, Express, and MongoDB. It provides /register and /login APIs where user passwords are safely hashed using bcrypt, and authenticated users receive a signed JSON Web Token (JWT) upon successful login. The token contains user identity data and is used to protect backend routes through middleware-based verification, enabling stateless and scalable authentication suitable for modern web applications.
