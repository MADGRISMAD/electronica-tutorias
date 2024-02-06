const Alumno = {
    name: {
        type: String,
        required: true
    },
    numControl: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'User email required']
    },
    password: {
        type: String,
        required: true
    },
}

module.exports = Alumno;