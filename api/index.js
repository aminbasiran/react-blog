const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")

const low = require('lowdb');


app.use(cors)

app.get('/posts', (req, res) => {
    const posts = db.get("posts").value()
    res.send(posts)
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
