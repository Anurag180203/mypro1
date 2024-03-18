import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.static("public"));
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("signup");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});