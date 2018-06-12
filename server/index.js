const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

const {
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    const db = app.get('db')
    let { id, displayName, picture } = profile;
    db.find_user([id]).then(user => {
        if (user[0]) {
            done(null, user[0].id)
        } else {
            db.create_user([displayName, picture, id]).then((createdUser) => {
                done(null, createdUser[0].id)
            })
        }
    })
}));

passport.serializeUser((primaryKeyId, done) => {
    done(null, primaryKeyId);
})

passport.deserializeUser((primaryKeyId, done) => {
    app.get("db").find_session_user([primaryKeyId]).then(user => {
        done(null, user[0])
    })
})


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:4000/#/tours'
}))

app.get('/auth/user', (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Unauthorized user');
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:4000');
})



massive(CONNECTION_STRING).then(db => { app.set('db', db); })

const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})