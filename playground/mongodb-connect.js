const MongoClient = require('mongodb').MongoClient;

//localhost url
MongoClient.connect(
  'mongodb://localhost:27017/TodoAPI',
  (err,db)=>{
    //handle error
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne(
    //   {
    //     text:'Something to do',
    //     completed: false
    //   }
    // ,(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

// Insert new doc into Users(name,age,location)
    // db.collection('Users').insertOne({
    //   name:'Andrew',
    //   age:25,
    //   location:'Philadelphia'
    // },(err,results)=>{
    //   if(err){
    //   return console.log('Cannot insert user',err);
    //   }
    //   console.log(JSON.stringify(results.ops,undefined,2));
    // })

    db.collection('Footbal Club').insertOne({
      name:'Manchester United',
      'established year':1895,
      home: 'Old Traford',
      manager:'Jose Mourinho'
    },(err,results)=>{
        if(err){
          return console.log('Cannot insert club',err);
        }
        console.log(JSON.stringify(results.ops,undefined,2));
    })
    db.close();
});
