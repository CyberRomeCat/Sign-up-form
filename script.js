function checkPassword() {
   let pw1 = document.getElementById("pwd").value;
   let pw2 = document.getElementById("confirm-pwd").value;
   let msg = document.getElementById("message");

   if (pw1 != pw2) {
    document.getElementById("btn").disabled;
    msg.textContent = 'password not match';
    console.log("password not match");
    msg.style.background = 'red';
    sg.style.color = 'white';
    return false;

   } if (pw1 == pw2){
    msg.textContent = 'password match';
    console.log("password match");
    msg.style.color = 'white';
    msg.style.background = 'green';
    return true;
   }
}