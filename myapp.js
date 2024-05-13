const express = require("express");
const app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

const port = 3000;

app.get("/api/:date", (req,res) => {
    let inputDate = req.params.date;
    let unixTime = "";
    let utcTime = "";
    if (inputDate.includes("-")) {
        unixTime = Math.floor(new Date(req.params.date).getTime())
        utcTime = new Date(inputDate).toUTCString();
    } else if(inputDate == "") {
        
    } else {
        unixTime = inputDate;
        let aux = new Date(0);
        aux.setUTCMilliseconds(req.params.date);
        utcTime = aux.toUTCString();
    }

    res.json({unix: unixTime, utc: utcTime})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})