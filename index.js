require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHubData = {
    "login": "iabhilashlenin",
    "id": 118419822,
    "node_id": "U_kgDOBw7xbg",
    "avatar_url": "https://avatars.githubusercontent.com/u/118419822?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/iabhilashlenin",
    "html_url": "https://github.com/iabhilashlenin",
    "followers_url": "https://api.github.com/users/iabhilashlenin/followers",
    "following_url": "https://api.github.com/users/iabhilashlenin/following{/other_user}",
    "gists_url": "https://api.github.com/users/iabhilashlenin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/iabhilashlenin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/iabhilashlenin/subscriptions",
    "organizations_url": "https://api.github.com/users/iabhilashlenin/orgs",
    "repos_url": "https://api.github.com/users/iabhilashlenin/repos",
    "events_url": "https://api.github.com/users/iabhilashlenin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/iabhilashlenin/received_events",
    "type": "User",
    "site_admin": false,
    "name": "AbhilashLenin.dev",
    "company": null,
    "blog": "",
    "location": "Bangalore",
    "email": null,
    "hireable": null,
    "bio": "Full Stack Javascript Developer\r\n",
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-11-17T04:50:47Z",
    "updated_at": "2024-06-20T15:01:44Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send('abhilash-dev')
})

app.get('/login',(req,res) =>{
    res.send('<h1> please login at abhilash-dev</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>welcome to abhilash youtube</h2>')
})

 
app.get('/github',(req,res) => {
    res.json(gitHubData)

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})