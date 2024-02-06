const verifySession = async (req, res, next) => {
    // Check if the user is logged in and is a student
    // Sends 401 if not logged in
    if (req.session.usuario) next();
    else res.status(401).send("Unauthorized");
};

module.exports = verifySession;
