import * as Realm from "realm-web";

/**
   * Attempts to register a user.
   *
   * @remarks
   * We were limited in our capacity to actually verify a user's email.
   * Currently, the only criterion for registering are that a user's email
   * must not already be registered, and their password must be greater
   * than 6 characters long.
   * 
   * Actual email confirmation requires a backend for sending / verifying emails
   * to a registered email address.
   * 
   * We thought we could do this with MongoDB's Atlas functions, but 
   * Atlas functions do not support RealmSDK, which is what MongoDB itself
   * uses for email verification ... this sucks.
   * 
   * @returns boolean promise of whether or not we encounter an error.
   *
   */

export default async function register_user(email: string, password: string){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const app = new Realm.App({id : REALM_APP_ID});
    
    return new Promise<boolean>((resolve, reject) => {
        app.emailPasswordAuth.registerUser({ email, password })
            .then(result => {
                resolve(false); // no api error
            })
            .catch(error => {
                console.error(error);
                reject(new Error("Failed to register new user"));
            });
    });
}