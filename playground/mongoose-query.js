const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');
const {ObjectId} = require('mongodb');
var id='5a30f408a61989c00cbb464c';
var queryString="Feed the cat";
if(!ObjectId.isValid(id))
  return console.log('Please insert an valid objectId');
Todo.find({
  // _id:id
  text:queryString
}).then((todos)=>{
  console.log('Todos',todos);
}
);
Todo.findOne({
  _id:id,
  text:queryString
}).then((todo)=>{
  if(!todo){
    return console.log('Todo not found');
  }
  console.log('Todo',todo);
});
Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by Id:',todo);
}).catch((e)=>console.log(e));
