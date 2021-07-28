function validar(){
  var nome = formUser.nome.value;
  var email = formUser.email.value;
  var senha = formUser.senha.value;

  if (nome == "") {
    alert("Por favor, digite o seu nome!");
    formUser.nome.focus();
    return false;
  } 
  if (email == "" || email.indexOf("@") == -1) {
    alert("Por favor, digite um E-mail válido!");
    formUser.email.focus();
    return false;
  }
  if (senha == "" || senha.length <=7) {
    alert("Por favor, defina uma senha com mínimo 8 caracteres!");
    formUser.email.focus();
    return false;
  }

}