const jwt = require('jsonwebtoken');
const globalConstants = require('../const/globalConst')

module.exports = function (usuario) { 

    if (usuario) {

        const token = jwt.sign({
            id: usuario.id,
            // roleId: usuario.roleId
        },
            globalConstants.JWT_SECRET, 
            {
                expiresIn: '300m' 
            }
        )
        return token 
    } else {
        return null 
    }


}