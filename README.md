## Crazy Cards Application

TotallyMoney coding exercise based on [React Starter Kit](https://www.reactstarterkit.com). In order to run it clone this repo and in the cloned folder run  
```shell
$ npm install
```
and then
```shell
$ npm start
```
to test use
```shell
$ npm test
```
### The Problem

I have been asked to develop a web application to allow customers to review Credit Cards that are applicable to their status. The application should call an API to return the list of cards available for each user. The user should be allowed to select one or more of the returned cards and see the details for the cards selected. When multiple cards are selected, the total amount of credit available to the user on those cards should be displayed.

### The Solution 

This app is basically based on Node.js with Express and GraphQL on the server and React styled with Pure CSS on the client. The programming language is ES6 with some ES7 features (class properties, async/await). WebPack is used for packaging of the app. Mocha, Chai and Enzyme are used for testing.  

### License

Copyright © 2016 Roman Nosov. This source code is licensed under the MIT license.
