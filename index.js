require('dotenv').config()
const express = require('express')// require module syntax
// import express from "express" esa bhi syntax hta h first line ka

const app = express()// express ko use krke app variable bna lia
// app is very powerful ,we get access to many things
const port = 4000
//server listens through port

app.get('/', (req, res) => {// app ek get request krra h
  res.send('Hello World!')// response m send krdo hello world

})
app.get('/twitter',(req,res)=>{// "/twitter" pr req ko listen krke response send kro

    res.send('Aasthadotcom')

})
app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})
/* it will give error cannot get login */
// whenever we will make any changes in application we will have to restart it
// bcoz whenever we save any code,it automtaically restartes everything
// in backend and we dont get to know that all code is being processed 

app.get('/youtube',(req,res)=>{
    res.send('<h2> Chai aur code</h2>')
})

// yaha pr listen krenge through app as it is made from express
app.listen(process.env.PORT, () => {// on successfully listening console.log statement will be printed

  console.log(`Example app listening on port ${port}`)
})

// here app is not being closed as application is constantly listening


/*
dot env is a pacakge used to take
 application to production
 Dotenv is a popular npm (Node Package Manager)
  package used in NodeJS
  applications to manage environment variables.


*/



/*
Environment variables
Environment variables in Node.js are key-value pairs
 of data that 
are stored outside of your application code.
 They are often used to store configuration details
  such as API keys, database URLs, and other sensitive 
  information. Environment variables can be accessed
   throughout 
your application code using the process.env object.




*/




/*
How to deploy an appication?
-> services which deploy an application
1) railway
2) hiroku
3) seenode
4) render
5) cyclic
6) digital ocean
7) aws

steps to deploy:
1) push project on github






*/