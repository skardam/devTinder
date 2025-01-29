const express = require('express');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Bholu",
        lastName: "baghel",
        emailID: "bholu.baghel@gmail.com",
        password: "password",
        age: 27,
        gender: "male"
    });
    await user.save();
    res.send("User created successfully");
})

connectDB().then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
}).catch((err) => {
    console.log(err);
});

