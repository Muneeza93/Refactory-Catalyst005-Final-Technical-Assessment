const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
    surname: String,
    given_name: String,
    dateofBirth: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
})

module.exports= mongoose.model("covid19", UserSchema)