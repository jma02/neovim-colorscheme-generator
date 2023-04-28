import {PostFragment} from "../components/Common";

import * as Realm from "realm-web";

export default function post_preset(Preset: PostFragment, api_key: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.apiKey(api_key);
    return new Promise<boolean>((resolve, reject) => {
        app.logIn(credentials)
            .then(user => {
                return user.functions.post_preset(Preset);
            })
            .then(result => {
                console.log("Document inserted successfully:", result);
                resolve(false); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to post preset")); // reject the Promise with an error object
            });
    });
}