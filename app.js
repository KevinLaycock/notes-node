console.log('starting app.js....');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Kevin','Kevin',1 ,1 ,2 ,3 ,4])
console.log(filteredArray);

var testinggit = "git test";

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// var addResult = notes.add(7,9);
//   console.log(addResult);

// var user = os.userInfo();
//
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//  if(err)  {
//      console.log ('unable to write to file');
//    }
//  });
