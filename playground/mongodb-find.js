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
    //by default we can fetch all by no agurment in find() method
    // db.collection('Todos').find().toArray().then((docs)=>{
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //   console.log('Unable to fetch todos',err);
    // });

    /*
      With conditions only completed Todo
    */
  /*  db.collection('Todos').find({
        _id:new ObjectID('5a2f54596afd7b1038ffa436')
      }).toArray().then(
      (docs)=>{
        console.log('Todos:');
        console.log(JSON.stringify(docs,undefined,2));
      },
      (err)=>{
        console.log('Unable to fetch data',err);
      });
      //Count
    db.collection('Todos').find({
      _id:new ObjectID('5a2f54596afd7b1038ffa436')
    }).count().then((count)=>{
      console.log(`Todos count: ${count}`);
    },(err)=>{
      console.log('Eroor:',err);
    })
  */
  // Find out users with name Andrew in users
  db.collection('Users').find({
    name:'John'
  }).toArray().then(
    (docs)=>{
      console.log('Username:');
      console.log(JSON.stringify(docs,undefined,2));
    },
    (err)=>{
      console.log('Error:',err);
    }

  )
    //db.close();
});
