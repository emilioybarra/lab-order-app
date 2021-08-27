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

## this is for testing on other devices on the local network,
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
Then enter in the following fields into the collection

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

// install crypto if not already installed
const crypto = require('crypto') 

const passwordHasher = (password) => {
  return {
    hash: crypto.pbkdf2Sync(password, process.env.HASH_SECRET, 1000, 64, `sha512`).toString(`hex`)
  }
}

console.log(passwordHasher('password'))
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
