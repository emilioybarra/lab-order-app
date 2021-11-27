# DWLS Lab Order Form

## Development Setup

### Prerequisites
Before Running the project, create an env file with the following variables:

```dotenv
## for the JWT token
JWT_SECRET=secret

## for password hashing
HASH_SECRET=secret

## use or create a new mongodb cluster
MONGO_DB_URI=uri

## this is for the api requests to the backend and for
## testing on other devices on the local network,
## use your ip address before starting the project.
VUE_APP_LOCALHOST_URL=http://192.168.178.186:3000

```

### Build Setup

```bash
## install dependencies
$ npm install

## serve with hot reload at localhost:3000
$ npm run dev

## build for production and launch server
$ npm run build
$ npm start

## generate static project
$ npm run generate
```

### Creating a new admin user

When creating a new admin user, go to the mongodb cluster, and if not already there, create an admin collection.
Then enter the following fields into the collection

*Also remember to set the 'HASH_SECRET' variable in your .env file.

```text
// Role has to be admin
role: "admin"

// Username can be whatever you'd like
username: "username"

// Hash has to be the return value of the 'passwordHasher' function,
// put the actual password of the user in the function (see below).
hash: (return value of 'passwordHasher')
```

```javascript
// Password Hasher for creating a new admin

// install crypto and dotenv if not already installed
require('dotenv').config()
const crypto = require('crypto') 

const passwordHasher = (password) => {
  return {
    hash: crypto.pbkdf2Sync(password, process.env.HASH_SECRET, 1000, 64, `sha512`).toString(`hex`)
  }
}

console.log(passwordHasher('password'))
```

### Changing the Terms and Conditions date

When changing the date in the file: `utils/termsAndConditionsDate.js`,
this will remove the cookie named: `lof__termsAndConditions`.
This will need to be changed for example when DWLS wants to update the terms and conditions.

```javascript
// termsAndConditionsDate.js

// Format must be: YYYY-MM-DD
export const termsAndConditionsDate = '2021-08-24'
```


### User Cookie

You can also see in the file: `middleware/userAuth.js`,
that the cookie is hardcoded for now until the app is ready
for production, I assume the hashed user cookie will be sent
from the backend.

```javascript
// line 5:
// const wordpressUser = cookies.get('wordpress_user')

// line 6:
const wordpressUser = 'webdev_1'
```


For more detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
