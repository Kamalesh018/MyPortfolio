import express from "express"
import bodyParser from "body-parser";
import path from "path"
import { fileURLToPath } from 'url'

const app = express();
const port = 8080;
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)


app.use(bodyParser.urlencoded({ extended: true }));

//middleware to link working directory to the express statics
app.use(express.static(path.join(__dirnameNew, '')));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirnameNew, '/index.html'));
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


