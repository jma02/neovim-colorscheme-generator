```typescript
exports = async function(id){
  // This default function will get a value and find a document in MongoDB
  // To see plenty more examples of what you can do with functions see: 
  // https://www.mongodb.com/docs/atlas/app-services/functions/
  // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
  var serviceName = "mongodb-atlas";

  // Update these to reflect your db/collection
  var dbName = "theme-cluster";
  var collName = "presets";

  // Get a collection from the context
  var collection = context.services.get(serviceName).db(dbName).collection(collName);
  
  var query = BSON.ObjectId(id);
  return collection.deleteOne({_id: query});
};
```