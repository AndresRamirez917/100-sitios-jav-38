function navbar() {
    const arr = [["#mainheader", "home"], ["#contact", "contact"]]
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; i++){
            const li = document.createRange().createContextualFragment(`
                
                 <li><a href="${arr[i][0]}">${arr[i][1]}</a></li>
                
                `)
                const lista = document.querySelector('.lista');
                lista.append(li)
        }
    }
}

const btn_validar = document.getElementById('btn-validar');
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

btn_validar.addEventListener("click", validar)
navbar()