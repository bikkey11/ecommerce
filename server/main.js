const express = require("express");
const db = require("./Utils/db.js");
const userRouter=require("./Routes/userRoutes.js")
const productRouter = require("./Routes/productRoutes.js");
const cors=require("cors")
const bodyParser = require('body-parser')


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

app.get("/", (req, res) => {
    res.send("hellow world")
})
app.use(userRouter);
app.use(productRouter);



app.listen(port, () => {
    console.log(`App is running on port ${port}`)
    db()
});