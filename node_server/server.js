const express = require('express');
const app =  express();
const port = process.env.PORT || 5500;
const session = require('express-session');
const LokiStore = require('connect-loki')(session);
const cors = require('cors');
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(session({
    store: new LokiStore({
        path: './session-store.db',
        logErrors: true
    }),
    resave: false,
    saveUninitialized: false,
    secret: 'mytopsecretsecret',
    cookie: { secure: false, httpOnly: false}

}));



app.use(routes);



app.listen(port,()=>{
    console.log(`listening on ${port}`);
});