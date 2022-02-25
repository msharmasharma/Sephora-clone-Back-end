const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect("mongodb+srv://shivu_123:shivu_123@cluster0.szbob.mongodb.net/Sephora?retryWrites=true&w=majority")
}

module.exports = connect;