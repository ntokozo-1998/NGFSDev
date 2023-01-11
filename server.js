const express = require('express')
const app = express();
bodyParser = require("body-parser")
port = 3080;
const users =[];
app.use(bodyParser.json());
app.get('/api/users', (req,res)=>{
res.json(users)
});
app.post('/api/user/', (req,resp)=>{
const user = req.body.user;
users.push(user); //Insert data into the array
resp.json('user added succesfully');
});
app.get('/', (req,res)=>{
res.json("Server Online")
})
app.listen(port, ()=>{
console.log(`Server listening on port::${port}`)
});