//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')//.MongoClient;
//localhost url
MongoClient.connect(
  'mongodb://localhost:27017/TodoAPI',
  (err,db)=>{
    //handle error
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').deleteMany({text:'Eat lunch'})
    //    .then((result)=>{console.log(result);})
    // db.collection('Todos').findOneAndDelete({completed:false})
    //   .then((result)=>{console.log(result);})
    //
    // db.collection('Users').findOneAndDelete({name:'Andrew'})
    // .then((result)=>{console.log(result);})
    //db.collection('Users').findOneAndDelete({_id:new ObjectID("5a2f81e5b878e397c09ff19b")})
    db.collection('Users').deleteMany(({name:'Andrew'}))
   });
// deleteOne;   deleteMany;  FindOneAndDelete
