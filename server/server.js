var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/users');

var app=express();
app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
  var todo=new Todo({
      text: req.body.text
  });
  todo.save().then(
    (doc)=>{res.send(doc);}
   ,(e)=>{res.status(400).send(e);}
  );
});

app.listen(3000,()=>{
  console.log('Start on port 3000');
});



/*
Challenge: create User Model
*/

//
// var user1=new User({
//    email:'  hao.nguyen@itt.vn '
// })
// user1.save().then((doc)=>{
//   console.log('User:',doc);
// });

//
// var newTodo = new Todo(
//   {
//     text:'Washing dishes',
//     complete:false,
//     completedAt:000000
//   }
// );
// newTodo.save().then((doc)=>{
//   console.log('Todo item',doc);
// },(e)=>{
//   console.log('Unable to save Todo item');
// });

// var otherTodo=new Todo(
//   {
//     text:'Feed baby',
//     complete:false,
//     completedAt:123
//   }
// );
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc),undefined,2);
// },(e)=>{
//   console.console.log('Unable to save');
// })
