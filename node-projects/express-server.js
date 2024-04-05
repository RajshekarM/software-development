//creating http server


const express = require("express")

const app = express()

const users = []

const user1 = {
name : 'john',
age : '25',
conidition : 'kidney malfunction',
cured : false
};

const user2 = {
name : 'john',
age : '30',
conidition : 'heart malfunction',
cured : true
}   

const user3 = {
name : 'rajesh',
age : '28',
condition : 'lung cancer',
cured : false
}

users.push(john, david, user3)


app.get('/users', (req, res)=>{
    res.send(users)
})

app.listen(3000, ()=>{console.log("server started to listen")})
