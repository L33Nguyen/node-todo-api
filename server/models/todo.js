//create a Mongoose Model
var mongoose=require('mongoose');
var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required:true,
    minlength:3,
    trim:true
  },
  complete:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default:null
  }  //when completed Todo
});
module.export={Todo};
