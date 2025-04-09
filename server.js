import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
app.use(express.static("frontend"));
const port = 3000;
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/Welcome.html");
});
app.listen(port, () => {
    console.log('server is listening at localhost:3000');
})