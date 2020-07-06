const express = require('express');
const passport = require('passport');
const ldap = require('passport-ldapauth');

const options = {
    server: {
        url: "ldap://ldap.forumsys.com",
        bindDN: "cn=read-only-admin,dc=example,dc=com",
        bindCredentials: 'password',
        searchBase: "dc=example,dc=com",
        searchFilter: "(uid={{username}})"
    }
};

passport.use(new ldap(options));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.post('/login', passport.authenticate('ldapauth', { session: false }), function(req, res) {
  console.log(req)
    res.send({
        status: 'ok',
        user: req.user
    });
});

app.listen(3000, () => {
    console.log('Running...');
});
