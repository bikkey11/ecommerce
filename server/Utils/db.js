
const mongoose = require("mongoose")



const DB_URI = `mongodb+srv://`;

 const db = () => {
    mongoose.connect(DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Database connected sucessfully")
    })
}

module.exports=db
