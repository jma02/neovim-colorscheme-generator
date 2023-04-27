```typescript
exports = async function(arg){
  // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
  var serviceName = "mongodb-atlas";

  var dbName = "theme-cluster";
  var collName = "presets";

  // Get a collection from the context
  var collection = context.services.get(serviceName).db(dbName).collection(collName);

  return collection.find({});
};
```