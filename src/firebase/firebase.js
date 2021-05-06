import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    this.githubProvider = new app.auth.GithubAuthProvider()

  }
  
  // Authentification
  login = async provider => {
    await this.auth.signInWithPopup(this[`${provider}Provider`])
  }

  logout = async () => {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();

export default firebase;