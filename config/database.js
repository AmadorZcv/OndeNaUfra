import * as firebase from 'firebase';
import {database  } from "./firebase";
//https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot
//Link de como trabalhar com um snapShot
//Função que escuta qualquer adição no banco
export function listenLugares(callback){
    //Caminho no Firebase
    let lugaresPath = "/lugares";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase.database().ref(lugaresPath).on("child_added",(snapshot)=>{
        if(snapshot.val()){callback(snapshot)}
    })
}

export function listenBage(callback) {
    //Caminho no Firebase
    let lugaresPath = "/motorista";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase.database().ref(lugaresPath).on("child_added",(snapshot)=>{
        if(snapshot.val()){callback(snapshot)}
    })
}

export function updateBage(callback) {
    //Caminho no Firebase
    let lugaresPath = "/motorista";
    //Toda vez que for adicionado algo no /lugares,retornamos um snapshot
    firebase.database().ref(lugaresPath).on("child_changed",(snapshot)=>{
        if(snapshot.val()){callback(snapshot)}
    })
}