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

massive(CONNECTION_STRING).then(db => { app.set('db', db); })
// app.set stores info by setting it on a key:val pair

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
// stores user info in session the session store/memory
// use req.session to access the person's session we are interacting with
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
    // when the user authenticates, this is what we will get back
}, (accessToken, refreshToken, extraParams, profile, done) => {
    // this is where auth0 sends info back from google
    const db = app.get('db')
    // here, we ask passport to retrieve the value tied to db, which is set above
    let { displayName, picture, adminStatus, id } = profile;
    // the id used here is the auth_id from the database
    db.find_user([id]).then(user => {
        // here, we query our sql database to see if there is a user with the passed-in id
        // the info we get back is usally an object, but it is nested in an array
        if (user[0]) {
            done(null, user[0].id)
        } else {
            db.create_user([displayName, picture, adminStatus, id]).then((createdUser) => {
                done(null, createdUser[0].id)
            })
        }
    })
}));

passport.serializeUser((primaryKeyId, done) => {
    // the profile from above is an object that is added to the session store here
    done(null, primaryKeyId);
})

passport.deserializeUser((primaryKeyId, done) => {
    // deserializeUser runs as middleware
    // goes into the session store, grabs any value tied to the session(profile) and injects info into the callback
    app.get("db").find_session_user([primaryKeyId]).then(user => {
        // whatever we pass out of deserializeUser gets added to req.user
        done(null, user[0])
    })
})


app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    // redirects the user back to the front end where they started the login
    successRedirect: 'http://localhost:3000/#/tours'
    // the hash symbol is used because we are using HashRouter
}))

app.get('/auth/user', (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Unauthorized user');
    }
})

app.get('/api/tours', controller.getTrips)

const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})