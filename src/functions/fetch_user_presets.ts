import { Preset } from "../components/Common";
import * as Realm from "realm-web";

export default function fetch_user_presets(user: string, setThemes: (x: Preset[])=> void){
    const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
    const app = new Realm.App({id : REALM_APP_ID});
    const api_key = process.env.REACT_APP_MONGO_REALM_API_KEY as string;
    const credentials = Realm.Credentials.apiKey(api_key);
    app.logIn(credentials)
        .then(realm => {
            return realm.functions.fetch_user_presets(user);
        })
        .then(userPresets => {
            setThemes(userPresets);
        })
        .catch(error => {
            console.log("Error for fetch_user_presets:");
            console.error(error);
        });
}