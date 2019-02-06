## BCAPI
  [![CircleCI](https://circleci.com/gh/begincoffees/bcapi.svg?style=shield)](https://circleci.com/gh/begincoffees/bcclient)
  [![Uptime Robot status](https://img.shields.io/uptimerobot/status/m779426128-6b6e81ed8dc987db17d4cad2.svg)](https://status.api.bcweb.me)
Back end services for bcweb.me

#### Description
A graphql server built with Graphql, Apollo and Typescript.
It features Prisma as an abstraction over a Postgres data layer.


#### Tech Stack
* [apollo-server (v2)](https://www.apollographql.com/) - graphql server
* [babel (v7)](https://babeljs.io/) - ES6/JSX compiler
* [jest](https://facebook.github.io/jest/) - Test suite
* [stripe (v2.0.1)](https://github.com/stripe/stripe-node) - Payment Authorization and Subscriptions
* [typescript (v2.9.2)](https://www.typescriptlang.org/)
* [graphql-yoga (latest)](https://github.com/prisma/graphqlyoga)
* [prisma-client](https://github.com/prisma/prisma-client)
* [graphqlgen](https://github.com/prisma/graphqlgen)


#### Development

You'll need a copy of the .env

You'll also need docker installed locally

Clone the repo:

```sh
$ git clone http://github.com/begincoffees/bcapi.git
```

build and run the images:
```sh
$ docker-compose up --build
```





Open up the dev client at http://localhost:6006
