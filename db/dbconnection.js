const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://shivrajkhetri:developer@2021@cluster0.0phiq.mongodb.net/UserData?retryWrites=true&w=majority",{  useNewUrlParser: true, useUnifiedTopology: true  }).then(()=>{
    console.log('connection is Successful')
}).catch((err)=>{
    console.log('connection not')
})