import * as firebase from "firebase";
import { database } from "./firebase";
//https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot
//Link de como trabalhar com um snapShot
//Função que escuta qualquer adição no banco
export function listenLugares(callback) {
    //Caminho no Firebase
    let lugaresPath = "/lugares";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase
        .database()
        .ref(lugaresPath)
        .on("child_added", snapshot => {
            if (snapshot.val()) {
                callback(snapshot);
            }
        });
}

export function listenBage(callback) {
    //Caminho no Firebase
    let lugaresPath = "/motorista";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase
        .database()
        .ref(lugaresPath)
        .on("child_added", snapshot => {
            if (snapshot.val()) {
                callback(snapshot);
            }
        });
}
export function listenVendas(callback) {
    //Caminho no Firebase
    let lugaresPath = "/vendas";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase
        .database()
        .ref(lugaresPath)
        .on("child_added", snapshot => {
            if (snapshot.val()) {
                callback(snapshot);
            }
        });
}

export function updateVenda(callback) {
    //Caminho no Firebase
    let lugaresPath = "/vendas";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase
        .database()
        .ref(lugaresPath)
        .on("child_changed", snapshot => {
            if (snapshot.val()) {
                callback(snapshot);
            }
        });
}

export function addvenda(userId, name, descricao, longitude, latitude) {
    firebase.database().ref('vendas/' + userId).set({
        vendaname: name,
        descricao: descricao,
        longitude: longitude,
        latitude: latitude,
    });
}

export function updateBage(callback) {
    //Caminho no Firebase
    let lugaresPath = "/motorista";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase
        .database()
        .ref(lugaresPath)
        .on("child_changed", snapshot => {
            if (snapshot.val()) {
                callback(snapshot);
            }
        });
}
export function onAuthStateChanged(callback) {
    //Caminho no Firebase
    firebase.auth().onAuthStateChanged(user => {
        callback(user);
    });
}
export function onLoginWithEmailAndPassword(
    user,
    callbackSucess,
    callbackFail
) {
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => callbackSucess())
        .catch(error => callbackFail(error));
}
export function onCreateUserWithEmailAndPassword(
    user,
    callbackSucess,
    callbackFail
) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => callbackSucess())
        .catch(error => callbackFail(error));
}
export function onLogout(callbackSucess, callbackFail) {
    firebase
        .auth()
        .signOut()
        .then(() => callbackSucess())
        .catch(error => callbackFail(error));
}
