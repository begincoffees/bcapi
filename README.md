## bcapi
Back end services for bcweb.me

#### Description
An graphql server built with Typescript and graphql-yoga.
Uses Prisma as a data layer


#### Tech Stack
* [apollo-server (v2)](https://www.apollographql.com/docs/react/) - GraphQL client and react integration
* [babel (v7)](https://babeljs.io/) - ES6/JSX compiler
* [jest](https://facebook.github.io/jest/) - Test suite
* [stripe-js (v2.0.1)](https://github.com/stripe/react-stripe-elements) - Handles client side tokenization and payment authorizations via stripe.
* [typescript (v2.9.2)](https://www.typescriptlang.org/)

#### Development

You'll need a copy of the .env

Clone the repo:

```sh
$ git clone https://github.com/andrewangelle/bcapp.git
```

build the project:

```sh
$ docker-compose up --build
```


Open up the dev client at http://localhost:6006
