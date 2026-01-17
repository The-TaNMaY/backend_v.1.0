require('dotenv').config()
const express = require('express')
const app = express()
const githubDB = {
  "login": "TanmayBarman",
  "id": 87917716,
  "node_id": "MDQ6VXNlcjg3OTE3NzE2",
  "avatar_url": "https://avatars.githubusercontent.com/u/87917716?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/TanmayBarman",
  "html_url": "https://github.com/TanmayBarman",
  "followers_url": "https://api.github.com/users/TanmayBarman/followers",
  "following_url": "https://api.github.com/users/TanmayBarman/following{/other_user}",
  "gists_url": "https://api.github.com/users/TanmayBarman/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/TanmayBarman/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/TanmayBarman/subscriptions",
  "organizations_url": "https://api.github.com/users/TanmayBarman/orgs",
  "repos_url": "https://api.github.com/users/TanmayBarman/repos",
  "events_url": "https://api.github.com/users/TanmayBarman/events{/privacy}",
  "received_events_url": "https://api.github.com/users/TanmayBarman/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-07-24T23:40:38Z",
  "updated_at": "2022-09-05T08:13:21Z"
}
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send('the_tanmay_67')
})

app.get('/login',(req,res) =>{
  res.send('<h1>Please Login To Stark Industries</h1>')
})

app.get('/youtube',(req,res) =>{
  res.send('<h2>Tanmay67</h2>')
})

app.get('/github',(req,res) =>{
  res.json(githubDB)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
