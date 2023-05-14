import * as Realm from "realm-web";

/**
   * Deletes an theme from a user's list.
   *
   * @param user - id of the logged in user.
   * @param id - _id of the preset we want to delete.
   * @returns boolean promise of whether or not we encounter an error.
   *
   */

export default function delete_user_preset(user: string, id: string){
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