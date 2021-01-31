import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'


export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRp2KJRQfUTrw10rrwETGcE7qnxxOwiU4",
    authDomain: "treenest-a7319.firebaseapp.com",
    projectId: "treenest-a7319",
    storageBucket: "treenest-a7319.appspot.com",
    messagingSenderId: "273582505026",
    appId: "1:273582505026:web:cbddf81bf2085f2cf141db",
    measurementId: "G-Y4XNSHBVCR"
})

export const auth = firebaseApp.auth(); 

export default function install (Vue) {
	Object.defineProperty(Vue.prototype, '$firebase',{
		get () {
			return firebaseApp
		}
	})

}
