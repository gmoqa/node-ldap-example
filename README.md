# Node.js LDAP Example

## Run

```bash
$ npm install
$ npm start
```

## Test
POST -> localhost:3000/login
```json
{
    "username": "riemann",
    "password": "password"
}
```

### Response
```json
{
    "status": "ok",
    "user": {
        "dn": "uid=riemann,dc=example,dc=com",
        "controls": [],
        "objectClass": [
            "inetOrgPerson",
            "organizationalPerson",
            "person",
            "top"
        ],
        "cn": "Bernhard Riemann",
        "sn": "Riemann",
        "uid": "riemann",
        "mail": "riemann@ldap.forumsys.com"
    }
}
```