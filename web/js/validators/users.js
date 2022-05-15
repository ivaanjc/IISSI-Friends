"use strict";
const userValidator = {
    validateRegister: function (formData) {
        let errors = [];
        let firstName = formData.get("username");
        let password = formData.get("password");
        let password2 = formData.get("password2");
        if (password !== password2) {
            errors.push("Las contraseñas deben ser iguales");
        }
        if (firstName.length < 3) {
            errors.push("El nombre debe tener más de 3 carácteres");
        }
        return errors;
    }
};
export { userValidator };