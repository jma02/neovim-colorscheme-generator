import * as Realm from "realm-web";

/**
   * Deletes an preset from the central item list
   *
   * @remarks
   * We took some liberty satisfying the prompt. 
   * Since we can't let everyone freely tamper with the presets collection,
   * we are requiring "super users" to possess an api key.
   *
   * @param api_key - potential MongoDB Realm api key 
   * @param id - _id of the preset we want to delete.
   * @returns boolean promise of whether or not we encounter an error.
   *
   */

export default function delete_preset(api_key: string, id: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.apiKey(api_key);
    return new Promise<boolean>((resolve, reject) => {
        app.logIn(credentials)
            .then(user => {
                return user.functions.delete_preset(id);
            })
            .then(result => {
                console.log("Document inserted successfully:", result);
                resolve(false); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to delete preset")); // reject the Promise with an error object
            });
    });
}