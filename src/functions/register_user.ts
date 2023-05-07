import * as Realm from "realm-web";
import { StringMappingType } from "typescript";

export default async function register_user(email: string, password: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const API_KEY = process.env.REACT_APP_MONGO_REALM_API_KEY as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.apiKey(API_KEY);
    
    return new Promise<boolean>((resolve, reject) => {
        app.emailPasswordAuth.registerUser({ email, password })
            .then(result => {
                resolve(true); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to register new user"));
            });
    });
}