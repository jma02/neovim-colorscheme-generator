import {PostFragment} from "../components/Common";
import * as Realm from "realm-web";

/**
   * Edits a preset.
   *
   * @remarks
   * We took some liberty satisfying the prompt. 
   * Since we can't let everyone freely tamper with the presets collection,
   * we are requiring "super users" to possess an api key.
   * 
   * This function in particular actually will be passed in the correct api key by
   * our front end if the theme being edited is a user theme.
   * 
   * @param id: the _id of the preset being edited
   * @param name: the updated name for a theme
   * @param description: the updated description for a theme
   * @param api_key - potential MongoDB Realm api key 
   * @param user - the user id of the user whose theme is being edited: is "" for a central list item
   * @returns boolean promise of whether or not we encounter an error.
   *
   */

export default function edit_preset(id: string, user: string, name: string, description: string, api_key: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.apiKey(api_key);
    return new Promise<boolean>((resolve, reject) => {
        app.logIn(credentials)
            .then(realm => {
                return realm.functions.edit_preset(id, user, name, description);
            })
            .then(result => {
                console.log("Document edited successfully:", result);
                resolve(false); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to edit preset")); // reject the Promise with an error object
            });
    });
}