const mongoose = require('mongoose');
const UserData = new mongoose.Schema({
name:{
    type:String
},
password:{
    type:String
}
})

const Users = mongoose.model('user',UserData);
module.exports = Users;
