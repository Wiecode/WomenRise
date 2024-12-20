var jwt = require('jsonwebtoken');
const JWT_SECRET = 'welcome';

const fetchmentor = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
      
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; 

        next();  
    } catch (error) {
   
        return res.status(401).send("Invalid or expired token.");
    }
}

module.exports = fetchmentor;
