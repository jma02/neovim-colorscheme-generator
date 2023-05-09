import * as Realm from "realm-web";

import { ObjectId } from "bson";

export default function post_preset(user: string, id: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const api_key = process.env.REACT_APP_MONGO_REALM_API_KEY as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.apiKey(api_key);
    return new Promise<boolean>((resolve, reject) => {
        app.logIn(credentials)
            .then(realm => {
                return realm.functions.delete_user_preset(user, id);
            })
            .then(result => {
                console.log("Document deleted successfully:", result);
                resolve(true); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to delete preset")); // reject the Promise with an error object
            });
    });
}