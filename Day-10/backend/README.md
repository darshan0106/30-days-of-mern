# JWT Authentication Middleware (Express)

This project implements JWT-based authentication in an Express.js backend using a reusable middleware to protect API routes. A JSON Web Token is generated on login and must be sent in the Authorization header (Bearer <token>) for accessing protected endpoints. The middleware verifies the token, attaches the decoded user data to the request, and allows only authenticated requests to proceed. This setup demonstrates secure route protection, proper middleware usage, and a scalable authentication flow suitable for real-world backend applications.
