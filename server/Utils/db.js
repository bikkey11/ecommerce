
const mongoose = require("mongoose")



const DB_URI = `mongodb+srv://Bikkey:Bikkey@cluster0.gzgo9gk.mongodb.net/PURANOBAZAR?retryWrites=true&w=majority`;

 const db = () => {
    mongoose.connect(DB_URI)
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Database connected sucessfully")
    })
}

module.exports=db