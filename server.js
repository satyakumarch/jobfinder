import express from "express";
import  { auth } from "express-openid-connect";

const app=express();
const port=8000;


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8000',
  clientID: 'LTaplGFWI0pq2lQPwSQ3cIdqUrJELY7j',
  issuerBaseURL: 'https://dev-yzzvcumay8y0t307.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});