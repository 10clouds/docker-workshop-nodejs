const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    let name = req.query.name || "world";
    res.send("hello " + name);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(0);
});
