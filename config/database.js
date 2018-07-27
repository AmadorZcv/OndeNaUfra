import * as firebase from 'firebase';
export function listenLugares(callback){
    let lugaresPath = "/lugares";
    firebase.database().ref(lugaresPath).on("child_added",(snapshot)=>{
        if(snapshot.val()){callback(snapshot)}
    })
}