<p align="center">
  <img src="https://raw.githubusercontent.com/ironlota/movieFreak/master/client/screenshot/ssLogo.png">
</p>

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![Build Status](https://travis-ci.org/ironlota/Seleksi-2017.svg?branch=master)](https://travis-ci.org/ironlota/Seleksi-2017)
[![dependencies](https://david-dm.org/ironlota/Seleksi-2017.svg)](https://david-dm.org/ironlota/Seleksi-2017)
[![devDependencies](https://david-dm.org/ironlota/Seleksi-2017.svg)](https://david-dm.org/ironlota/Seleksi-2017/dev-status.svg)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![LiveAtHeroku](https://img.shields.io/badge/live%20at-moviefreak.herokuapp.com-blue.svg)](<http://moviefreak.herokuapp.com>)

# <http://moviefreak.herokuapp.com>
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ironlota/movieFreak/tree/heroku)

## Getting Started

Restful API using react, redux, and rxjs implementation

### Prerequisites

What things you need to install the software and how to install them

```
Installed :
- Docker (https://www.docker.com/)
```

### Installing

```
(sudo) npm install -g yarn
wget https://github.com/ironlota/movieFreak/archive/master.zip
unzip master.zip
cd movieFreak-master
yarn (install root dependency)
yarn install (install client and server dependency)
(sudo) docker-compose build (it will take a little longer)
```

### Running
PS: if you got internal server error, try it on your incognito mode browser

For development
```
- (sudo) docker-compose up -d
- open your browser at http://localhost:3000
```

For production
```
- (sudo) docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d (it will take a little longer)
- open your browser at http://localhost:3000
```

For updating movie (beware, if you get error message, it means you did not run it via docker container)
```
- yarn updateMovie (retrive data to tmpMovies collection)
- yarn transferMovie (move from tmpMovies collection to mainMovies collection)
```

'-d' means that it will be running on the background, if you want to see the log, just erase '-d'

### Screenshot
![s1](https://raw.githubusercontent.com/ironlota/movieFreak/master/client/screenshot/s1.png) <!-- .element height="50%" width="50%" -->
![s2](https://raw.githubusercontent.com/ironlota/movieFreak/master/client/screenshot/s2.png) <!-- .element height="50%" width="50%" -->
![s3](https://raw.githubusercontent.com/ironlota/movieFreak/master/client/screenshot/s3.png) <!-- .element height="50%" width="50%" -->

## Version

1.0 Major Release

## Authors

* **Ray Andrew** - [Ironlota](https://github.com/ironlota)
* **Adrian HP** - [Adrian HP](https://github.com/adrianhp97)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details