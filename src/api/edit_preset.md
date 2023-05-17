```typescript
exports = async function(id, user, name, description){
  var serviceName = "mongodb-atlas";
  var dbName = "theme-cluster";
  var collName = user !== "" ? "presets-"+user : "presets";
  var collection = context.services.get(serviceName).db(dbName).collection(collName);
  
  var query = BSON.ObjectId(id);
  var update = { $set: { name: name, description: description } };
  return collection.updateOne({_id: query}, update);
};
```