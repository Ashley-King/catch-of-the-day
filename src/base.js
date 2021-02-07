import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8s3utgTlDthbfxoBnN3OopZDIy5B8YZE",
    authDomain: "catch-of-the-day-b0706.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-b0706-default-rtdb.firebaseio.com",
    
})

const base = Rebase.createClass(firebaseApp.database())

//named export
export {firebaseApp}
//this is a default export
export default base