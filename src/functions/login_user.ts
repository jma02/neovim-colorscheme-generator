import * as Realm from "realm-web";

/**
    * Attempts a user login given an email and password.
   * @returns promise of error if an error is encountered.
   */


export default async function login_user(email: string, password: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const credentials = Realm.Credentials.emailPassword(email, password);

    return new Promise<Realm.User>((resolve, reject) => {
        app.logIn(credentials)
            .then(result => {
                resolve(result); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to login!"));
            });
    });
}