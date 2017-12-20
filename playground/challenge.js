const {User} = require('./../server/models/users');
const {mongoose} = require('./../server/db/mongoose');
const {ObjectId} = require('mongodb');
/**
Challenge: Query the user collection from 'User document'
Filter by ID
case1 :user not found
case2: print user to the screen if any
case3: print out the error message if any
*/
var id='5a31e57c8f5b87d42d6e4ff6';
var fakeId='5a31e57c8f5b87d42d6e4ff';
var notFoundId='5a31e57c8f5b87d42d6e4ff7';

// if(!ObjectId.isValid(fakeId))
//   return console.log('Fake id,insert a valid Id');
if(!ObjectId.isValid(id))
  return console.log('Fake id,insert a valid Id');

User.findById(id).then((user)=>{
    if(!user){
      return console.log('Id not found');
    }
    console.log('Todos:',user);
}).catch((e)=>{
  console.log(e);
});
