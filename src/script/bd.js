
var config = {
    apiKey: "AIzaSyC6sTYsioDQUQpJIcGVJryOsuiJePmUUkA",
    authDomain: "devgeral-359a0.firebaseapp.com",
    databaseURL: "https://devgeral-359a0.firebaseio.com",
    projectId: "devgeral-359a0",
    storageBucket: "devgeral-359a0.appspot.com",
    messagingSenderId: "515689976964"
  };
  firebase.initializeApp(config)
    var nome =     document.getElementById('nome');
    var endereco = document.getElementById('endereco');
    var userList = document.getElementById('userList');
    var add =      document.getElementById('add');
    add.addEventListener('click',function(){
      gravar(nome.value,endereco.value);
    });
function gravar(nome,endereco){
   var data = {
        nome:nome,
        endereco:endereco
   };
     return firebase.database().ref().child('cliente').push(data);
}

firebase.database().ref('cliente').on('value',function(snapshot){
  userList.InnerHTML = '';
  snapshot.forEach(function(item){
var li = document.createElement('li');
    li.appendChild(document.createTextNode(item.val().nome + '  '+ item.val().endereco));
    userList.appendChild(li);
  });
});
