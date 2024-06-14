const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const rfidRouter = require('./routes/rfid.routes');
const qrRouter = require('./routes/qr.routes');
app.use('/api/rfid', rfidRouter);
app.use('/api/qr', qrRouter);

app.get("/", (req, res) => {
    res.json({ message: "RFID server is running well :)" });
});

app.listen(8080, () => {
    console.log("Server started on PORT 8080");
});