var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {User}=require('./models/users');
var {Todo}=require('./models/todo.js');
const {ObjectId} = require('mongodb');
var app=express();
app.use(bodyParser.json());

//  POST /todos   add new todo items
app.post('/todos',(req,res)=>{
  var todo=new Todo({
      text: req.body.text
  });
  todo.save().then(
    (doc)=>{res.send(doc);}
   ,(e)=>{res.status(400).send(e);}
  );
});
//  GET  /todos  listing all existing todo listen
app.get('/todos',(req,res)=>{
     Todo.find().then((todos)=>{
       res.send({todos});
     },(e)=>{
       res.status(400).send(e);
     });
});
//Get /todos/id
app.get('/todos/:id',(req,res)=>{
  //coudnot send response here,causing error  res.send(req.params);
    var id=req.params.id;
    if(!ObjectId.isValid(id)) {
      console.log('Invalid id!');
      return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
      if(!todo) return res.status(404).send();
      res.send({todo});

    }).catch((e)=>{
      res.status(400).send();
    })
});

app.listen(3000,()=>{
  console.log('Start on port 4000');
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
