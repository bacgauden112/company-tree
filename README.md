<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## GraphQL query and response

### Query
```
fragment SubcompanyFields on CompaniesResponse{
  id
  name
  parentId
  createdAt
  cost
  children {
    id
    name
    parentId
    createdAt
  }
}

fragment CompaniesRecursive on CompaniesResponse {
  children {
    ...SubcompanyFields
    children {
      ...SubcompanyFields
      children {
        ...SubcompanyFields
      }
    }
  }
}

query {
  companies {
    ...SubcompanyFields
    ...CompaniesRecursive
  }
}
```
### Response
```
{
  "data": {
    "companies": [
      {
        "id": "uuid-1",
        "name": "Webprovise Corp",
        "parentId": "0",
        "createdAt": "2021-02-26T00:55:36.632Z",
        "cost": 52983,
        "children": [
          {
            "id": "uuid-2",
            "name": "Stamm LLC",
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T10:35:32.978Z",
            "cost": 5199,
            "children": [
              {
                "id": "uuid-4",
                "name": "Price and Sons",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T06:11:47.519Z",
                "cost": 1340,
                "children": []
              },
              {
                "id": "uuid-7",
                "name": "Zieme - Mills",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T07:56:32.335Z",
                "cost": 1636,
                "children": []
              },
              {
                "id": "uuid-19",
                "name": "Schneider - Adams",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T21:06:18.777Z",
                "cost": 794,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-3",
            "name": "Blanda, Langosh and Barton",
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T15:16:30.887Z",
            "cost": 15713,
            "children": [
              {
                "id": "uuid-5",
                "name": "Hane - Windler",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T13:35:57.923Z",
                "cost": 1288,
                "children": []
              },
              {
                "id": "uuid-6",
                "name": "Vandervort - Bechtelar",
                "parentId": "uuid-3",
                "createdAt": "2021-02-26T01:41:06.479Z",
                "cost": 2512,
                "children": []
              },
              {
                "id": "uuid-9",
                "name": "Kuhic - Swift",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T16:02:49.099Z",
                "cost": 3086,
                "children": []
              },
              {
                "id": "uuid-17",
                "name": "Rohan, Mayer and Haley",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T11:17:52.132Z",
                "cost": 4072,
                "children": []
              },
              {
                "id": "uuid-20",
                "name": "Kunde, Armstrong and Hermann",
                "parentId": "uuid-3",
                "createdAt": "2021-02-26T01:51:25.421Z",
                "cost": 908,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-8",
            "name": "Bartell - Mosciski",
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T23:47:57.596Z",
            "cost": 28817,
            "children": [
              {
                "id": "uuid-10",
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "cost": 4288,
                "children": []
              },
              {
                "id": "uuid-11",
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "cost": 12236,
                "children": [
                  {
                    "id": "uuid-12",
                    "name": "Swaniawski Inc",
                    "parentId": "uuid-11",
                    "createdAt": "2021-02-25T06:44:56.245Z",
                    "cost": 2110,
                    "children": []
                  },
                  {
                    "id": "uuid-14",
                    "name": "Weimann, Runolfsson and Hand",
                    "parentId": "uuid-11",
                    "createdAt": "2021-02-25T15:22:08.098Z",
                    "cost": 7254,
                    "children": []
                  }
                ]
              },
              {
                "id": "uuid-13",
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "cost": 1686,
                "children": []
              },
              {
                "id": "uuid-15",
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "cost": 4725,
                "children": []
              },
              {
                "id": "uuid-16",
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "cost": 3277,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-18",
            "name": "Walter, Schmidt and Osinski",
            "parentId": "uuid-1",
            "createdAt": "2021-02-26T02:31:22.154Z",
            "cost": 2033,
            "children": []
          }
        ]
      }
    ]
  }
}
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test
```

## License

Nest is [MIT licensed](LICENSE).
