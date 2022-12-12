

const isAdmin = (req, res, next) => {
    const { roleId } = res.locals.usuario;
    if (roleId === 1) {
        next();
    } else {
        
        return res
            .status(403)
            .json({ message: "Acceso no autorizado (solo admin)" });
    }
};

module.exports = { isAdmin };