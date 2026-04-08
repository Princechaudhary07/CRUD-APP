const express=require('express');
const fs =require('fs');

const app=express();
const users = require('./users_400.json');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("Welcome to our website");
});
app.get('/api/users',(req,res)=>{
    return res.json(users);
});
app.get('/user',(req,res)=>{
    const html=`
    <ul>
    ${users.map(user=> `<li>${user.name}</li>`).join(' ')}
    </ul>`
    res.send(html);
});
app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    console.log(id);
    const user = users.find(u=>u.id===id);
    return res.json(user);
})


app.post('/api/users',(req,res)=>{
    //will do this mongodb or postman
    const newData={
        "id": 400,
        "name": "User_IaVQi",
        "email": "user1@example.com",
        "address": "511 Street ZcWQCK, City_CCxj",
        "contact": "9589904272"
    

    }
    const data=req.body;
    console.log(data);
    return res.json({ message: "Done" });
    
    
    res.send("User added successfully");
})

app.put('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    console.log("PUT ID:", id);
    console.log("New Data:", data);

    return res.json({ message: "User replaced (PUT)" });
});

app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    console.log("PATCH ID:", id);
    console.log("Updated Fields:", data);

    return res.json({ message: "User updated (PATCH)" });
});

app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    console.log("DELETE ID:", id);

    return res.json({ message: "User deleted (DELETE)" });
});


app.listen(3000,()=>{
   console.log("Server Started");
})
