const express = require('express');
const app = express();
app.get('/users', (req, res)=>{
    res.send({ fullName: 'sushmita', address: 'bangalore' });
})
app.post('/users', (req, res)=>{
    res.send({ fullName: 'Abhishek', address: 'bangalore' });
})
app.put('/users', (req, res)=>{
    res.send({ fullName: 'sachin', address: 'bangalore' });
})
app.patch('/users', (req, res)=>{
    res.send({address: 'bangalore' });
})
app.listen(3000, () => {
    console.log('listening on port 3000');
});