const express = require('express');
const app = express();
app.use(function (req, res) {
    res.send("Response from server");
})
app.listen(3000, () => {
    console.log('listening on port 3000');
});