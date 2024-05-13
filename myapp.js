const express = require("express");
const app = express();
const port = 3000;

app.get("/api/:date", (req,res) => {
    let inputDate = req.params.date;
    let unix = "";
    let utc = "";
    if (inputDate.includes("-")) {
        unix = Math.floor(new Date(req.params.date).getTime())
        utc = new Date(inputDate).toUTCString();
    } else {
        unix = inputDate;
        let aux = new Date(0);
        aux.setUTCMilliseconds(req.params.date);
        utc = aux.toUTCString();
    }

    res.send({"unix": unix, "utc": utc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})