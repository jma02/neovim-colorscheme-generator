import {PostFragment} from "../components/Common";

import * as Realm from "realm-web";

export default function post_preset(Preset: PostFragment, user: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const API_KEY = process.env.REACT_APP_MONGO_REALM_API_KEY as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.apiKey(API_KEY);
    return new Promise<boolean>((resolve, reject) => {
        app.logIn(credentials)
            .then(realm => {
                return realm.functions.post_user_preset(Preset, user);
            })
            .then(result => {
                console.log("Document inserted successfully:", result);
                resolve(false); // no api error
            })
            .catch(error => {
                console.log("Error for post_user_presets");
                console.error(error);
                reject(error); // reject the Promise with an error object
            });
    });
}