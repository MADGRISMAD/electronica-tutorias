const bcrypt = require("bcryptjs");

const compareHash = async function(value,hash){
    if(process.env.NODE_ENV === "prod"){
        return bcrypt.compare(contrasena, alumno.contrasena)
    }
    if(process.env.NODE_ENV === "dev"){
        return value === hash;
    }
}

module.exports = {
    compareHash
}