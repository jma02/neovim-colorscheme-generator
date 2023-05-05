```typescript
exports = async function(preset){
  var serviceName = "mongodb-atlas";
  var dbName = "theme-cluster";
  var collName = "presets";

  var collection = context.services.get(serviceName).db(dbName).collection(collName);

  const result = await collection.insertOne(preset);

  return result;
};
```
