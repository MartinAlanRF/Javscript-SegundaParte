let enviar= () => {
    let nameuser = document.getElementById('nameUser');
    console.log(nameuser.value);
    let usuario = document.createElement("p");
    usuario.innerText = nameuser.value;
    document.getElementById("result").appendChild(usuario);
    nameuser.value = null;
}
