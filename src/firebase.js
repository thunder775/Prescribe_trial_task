import firebase from 'firebase';

const app = firebase;

const firebaseConfig = {
    apiKey: "AIzaSyBKGC6xvIWi-8w3-5AEHmzOp5bXH0ZMu0o",
    authDomain: "testtask-bf1f7.firebaseapp.com",
    databaseURL: "https://testtask-bf1f7.firebaseio.com",
    projectId: "testtask-bf1f7",
    storageBucket: "testtask-bf1f7.appspot.com",
    messagingSenderId: "803841005192",
    appId: "1:803841005192:web:9740d3e95258e35137313d"
};

class FirebaseApp {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    getUserDetails(email, pass) {
        this.login(email, pass).then(async (res) => {
            return await this.getDoc(email);
        });
    }

    setUserDetails(doc) {
        let email = doc.email;
        let pwd = doc.pwd;
        this.signUp(email, pwd).then(async (res) => {
            await this.setDoc(doc)
        })
    }

    async getDoc(email) {
        let collection = await this.db.collection("users").where("email", "==", email).get();
        return collection.docs[0].data()
    }


    setDoc = (doc) =>
        this.db.collection("users").doc().set(doc);


    login = (email, pass) =>
        this.auth.signInWithEmailAndPassword(email, pass);


    signUp = (email, pass) =>
        this.auth.createUserWithEmailAndPassword(email, pass);

    signOut = () => this.auth.signOut();

}

export default FirebaseApp
