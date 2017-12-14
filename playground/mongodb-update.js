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
    //update Eat lunch using $set operator

    // db.collection('Todos').findOneAndUpdate(
    //   {
    //     text:'Eat lunch'
    //   },
    //   {
    //     $set:{
    //       completed:true,
    //       text:'Eat happy lunch'
    //     }
    //   },
    //   {
    //     returnOriginal:false
    //   }).then((result)=>{
    //       console.log(result);
    //   });

    // update using $inc operator
    db.collection('Users').findOneAndUpdate(
      {name:'John'},
      {
        $set:{name:'Lê Nguyễn'}
        ,$inc:{age:6}
      },{
        returnOriginal:false
      }).then((result)=>{console.log(result)});
  });
