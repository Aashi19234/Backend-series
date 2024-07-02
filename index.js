require('dotenv').config()
const express = require('express')// require module syntax
// import express from "express" esa bhi syntax hta h first line ka

const app = express()// express ko use krke app variable bna lia
// app is very powerful ,we get access to many things
const port = 4000
//server listens through port

const githubdata={
  "login": "Aashi19234",
  "id": 140010647,
  "node_id": "U_kgDOCFhklw",
  "avatar_url": "https://avatars.githubusercontent.com/u/140010647?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aashi19234",
  "html_url": "https://github.com/Aashi19234",
  "followers_url": "https://api.github.com/users/Aashi19234/followers",
  "following_url": "https://api.github.com/users/Aashi19234/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aashi19234/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aashi19234/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aashi19234/subscriptions",
  "organizations_url": "https://api.github.com/users/Aashi19234/orgs",
  "repos_url": "https://api.github.com/users/Aashi19234/repos",
  "events_url": "https://api.github.com/users/Aashi19234/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aashi19234/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Aastha Jain",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Student at Bhagwan Parshuram Institute Of Technology | Cse’26 | C| C++| Beginner in DSA | Front End Developer",
  "twitter_username": null,
  "public_repos": 34,
  "public_gists": 0,
  "followers": 6,
  "following": 5,
  "created_at": "2023-07-19T18:40:26Z",
  "updated_at": "2024-06-20T10:35:54Z"
}

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
app.get('/github',(req,res)=>{
  res.json(githubdata)
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
2) go to digital ocean
3) click on create and then app
4) upload repository
5) write main branch
6) click on next
7) pay money
8) go to environment variables
7) add ur env variable PORT and its value 
8) yaha pr agr unpe 3000 ka port availabe ni hua toh unpe jo
hga availabe vo usse overwrite krdenge 3000 ko
9) review and click create resource
10) go to build log
11) Apps m url mil jaega







*/