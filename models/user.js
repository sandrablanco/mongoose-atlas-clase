const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, { timestamps: true }); //añadir campo de fecha automaticamente   
                         // createdAt   // cuándo se creó el usuario
                        //updatedAt   // última vez que se modificó

const User = mongoose.model('User', UserSchema);

module.exports = User;