
var config = {
  apiKey: "AIzaSyC6sTYsioDQUQpJIcGVJryOsuiJePmUUkA",
  authDomain: "devgeral-359a0.firebaseapp.com",
  databaseURL: "https://devgeral-359a0.firebaseio.com",
  projectId: "devgeral-359a0",
  storageBucket: "devgeral-359a0.appspot.com",
  messagingSenderId: "515689976964"
};
firebase.initializeApp(config)

var provider  = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result){
     console.log(result.user);
     $('#login').hide();
     $('#root').append("img src='"+result.user.photoURL + "'/>");

  });
});

$('#gravar').click(function(){
  firebase.database.ref("tabajara")
  .set({
    nome : "Intech",
    idade : 42

  })
})
