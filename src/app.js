const express = require('express');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');

app.use(express.json());

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailID;
    try {
        const user = await User.find({ emailID: userEmail });
        if(!user){
            res.status(404).send("User not found");
        } else {
            res.send(user);
        }      
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        if(!users){
            res.status(404).send("No User found");
        } else {
            res.send(users);
        }      
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try {
        await User.findOneAndDelete(userId);
        res.send("User deleted successfully");
    }
     catch(err){
        res.status(500).send(err);
    }
   
})

app.post("/signup", async (req, res) => {
    const user = new User(req.body);
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

