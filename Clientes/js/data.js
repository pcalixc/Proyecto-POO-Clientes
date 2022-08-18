let usuarioActual;
let usuarios;
let categorias;
let locales;
let productos;
//-------------------------


const cargarCategorias= async () => {
    const respuesta = await fetch('/cat', {
        method: "get"});
        categorias = await respuesta.json();
        console.log('Categorias', categorias)
    }
cargarCategorias();

const cargarLocales= async () => {
    const respuesta = await fetch('/locales', {
        method: "get"});
        locales = await respuesta.json();
        console.log('Locales', locales)
    }
cargarLocales();

const cargarUsuarios= async () => {
    const respuesta = await fetch('/users', {
        method: "get"});
        usuarios = await respuesta.json();
        console.log('Usuarios', usuarios)
    }
cargarUsuarios();

const cargarProductos= async () => {
    const respuesta = await fetch('/menus', {
        method: "get"});
        productos = await respuesta.json();
        console.log('Productos', productos)
    }
cargarProductos();


function comenzar(){
    document.getElementById('landing-page').classList.add('oculto');
    document.getElementById('sign-in-screen').classList.remove('oculto'); 
}

function verificarUsuario(){

        let enteredUser= document.getElementById("user").value;
        let enteredPassword=document.getElementById("password").value;
    
    usuarioActual = usuarios.filter(user => user.usuario == enteredUser);
    if(usuarioActual.length>0){
        if(usuarioActual[0].contrasena==enteredPassword){
            document.getElementById('sign-in-screen').classList.add('oculto');
                mostrarCategorias();
                document.getElementById('home').classList.remove('oculto');
                setProfileInfo(usuarioActual[0]);
                
        }else{
            alert("Usuario o contrasena incorrecta");}
    }else{
        alert("Usuario o contrasena incorrecta");
    } 
    }


function setProfileInfo(user){
    document.getElementById("info-perfil").innerHTML= ``
    
    document.getElementById("info-perfil").innerHTML+=
    `<div class="imagen-perfil">
    <img src="./imagenes/imagen-perfil1.png" alt="">
    <h1>${user.usuario}</h1>
    </div>
    <div style="margin:5px" type="button" class=" direccion-perfil" data-bs-toggle="modal" data-bs-target="#adressModal"><i class="fa-solid fa-location-dot"></i>Direccion
    </div>
    <div style="margin:5px" type="button" class="metodos-de-pago-perfil" data-bs-toggle="modal" data-bs-target="#paymentsModal" ><i class="fa-solid fa-money-check-dollar"></i>Metodos de pago
    </div>
    <div style="margin:5px" class="ajustes-perfil"><i class="fa-solid fa-gear"></i>Ajustes
    </div>
    <div style="margin:5px" onclick="backLogOut('profile-screen','sign-in-screen')" class="cerrar-sesion-perfil"><i class="fa-solid fa-arrow-right-from-bracket"></i>Cerrar sesion
    </div>
    
    <div class="modal fade" id="adressModal" tabindex="-1" aria-labelledby="adressModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="adressModalLabel">Direcciones guardadas</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${user.direccion}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Agregar</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="paymentsModal" tabindex="-1" aria-labelledby="paymentsModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="paymentsModalLabel">Metodos de pago guardados</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${user.metodoPago}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Agregar</button>
        </div>
      </div>
    </div>
  </div>`


}

function crearCuenta(){
    document.getElementById('sign-in-screen').classList.add('oculto');
    document.getElementById('new-acc').classList.remove('oculto');
}

function crearNuevaCuenta(){

let usuario= document.getElementById("newuser").value;
let contrasena=document.getElementById("newpsw").value;

    fetch('/newuser',{
        method: "post",
        body: JSON.stringify({usuario,
                           contrasena}),
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        }}).then(res => {
        alert("Usuario creado");

        console.log('Success:', res);

        document.getElementById('new-acc').classList.add('oculto');
        document.getElementById('sign-in-screen').classList.remove('oculto');
    })
    .catch(error => console.error('Error:', error))
    }
    

function back(hide,show){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById(show).classList.remove('oculto'); 
}

function backLogOut(hide,show){ 
    document.getElementById(hide).classList.add('oculto');
    document.getElementById(show).classList.remove('oculto'); 
    document.getElementById("user").value='';
    document.getElementById("password").value=''}

function mostrarCategorias(){
    
        document.getElementById("categories").innerHTML= ``

        categorias.forEach(c => {
           
        document.getElementById("categories").innerHTML+=
    `
        <div class="category" onclick="mostrarLocales('${c.nombre}')">
            <img src=${c.imagen} alt="logo">
            <h3>${c.nombre}<h3>
        </div>
    ` })

}

function mostrarLocales(nombreCategoria){
    fetch('/locales')
    .then(response => response.json())
    .then(informacion => {  
        
        document.getElementById('home').classList.add('oculto');

        document.getElementById("shops").innerHTML= ``

        let localesArray=informacion.filter(local => local.categoria == nombreCategoria);
        localesArray.forEach(l => {
            document.getElementById("shops").innerHTML+=
        ` <div class="shop" onclick="mostrarProductos('${l.nombre}')">
        <div><img style="height: 100px; width:100px"  src=${l.imagen} alt=""></div>
        <div class="shop-info">
            <div class="name">${l.nombre}</div>
            <div class="adress">${l.direccion}</div>
            <div class="stars"><i class="fa-solid fa-star"></i>${l.calificacion}</div>
        </div>
    </div>`
    })
    document.getElementById('shops-screen').classList.remove('oculto'); 


    })
}


function mostrarProductos(localSelecionado){
    fetch('/menus')
    .then(response => response.json())
    .then(informacion => {  


    var idBtn=["1","2","3","4","5","6","7","8","9","10","11","12",];
    var cont=0;
    document.getElementById('shops-screen').classList.add('oculto');

    let productosArray=informacion.filter(p => p.local == localSelecionado);
    document.getElementById("products").innerHTML= ``
    productosArray.forEach(p => {
        document.getElementById("products").innerHTML+=
        `<div class="product">
            <div><img type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${p.id2}" style="height: 100px; width:100px"  src=${p.imagen} alt="">
            </div>
            <div class="product-info">
                <div class="name">${p.nombre}</div>
                <div class="price">L.${p.precio}</div>
            </div>
                <div id="${idBtn[cont]}">
                    <button onclick="agregarProducto('${p._id}','${p.id2}','${p.imagen}',${p.precio}, ${idBtn[cont]} )"  type="button" class="btn btnAdd porAgregar" style="background-color: #2c2d4c; color: white"><h4>Agregar</h4></button>
                </div>
        </div>
    
    <div class="modal fade" id="${p.id2}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title" id="exampleModalLabel">${p.nombre}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div><img style="height: 200px; width:200px; margin-left: 60px"  src=${p.imagen} alt=""></div>
                <h4>${p.descripcion}
                </div>
                <div class="modal-footer">
                    <button style="height: 30px; width:80px; background-color: #2c2d4c; color: white; border: none; border-radius: 10px; font-size: 1.4rem; font-weight: bold;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
        </div>`    
        cont++;
    })
        
    document.getElementById('products-screen').classList.remove('oculto'); 
})
}

var totalActual=0;


const agregarProducto= async(id, nombre, img, precio, idBtn)=> { 

    agregarIconoAlCarrito();

    console.log(id,nombre,img,precio);
    
    const respuesta = await fetch(
        `/${usuarioActual[0]._id}/ordenes`, 
        {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify( { 
            id: id ,
            nombre: nombre,
            imagen: img,
            precio: precio 
        }),
        },
    );
        const resJson = await respuesta.json();
        console.log('REs add orden',resJson); 


    


    document.getElementById('empty-cart').classList.add('oculto');
    document.getElementById('detalles-pago').classList.remove('oculto');

    //cambio al pesionar el boton de agregar
    document.getElementById(idBtn).innerHTML= `<button type="button" class="btn btn-primary btnAdd agregado"><h4 style="font-weight: bold">Agregado</h4></button>`



    document.getElementById("orders").innerHTML+=
        `<div class="order">
            <div><img style="height: 100px; width:100px"  src="${img}" alt=""></div>
            <div class="order-info">
                <div class="name">${nombre}</div>
                <div class="precio">L${precio}</div>
            </div>
            <div class="add-remove">
                <div class="menos"><i class="fa-solid fa-circle-minus fa-2x"></i></div>
                <div style="font-size: large; margin:5px" class="cantidad">1</div>
                <div class="mas"><i class="fa-solid fa-circle-plus fa-2x"></i></div>
            </div>
        </div>
        `
        totalActual= totalActual+ precio;
        let impuesto=totalActual*0.5;
        let envio=60;
        const total=totalActual+impuesto+envio;
        document.getElementById("detalles-pago").innerHTML=
        `   <h3>Sub-total: L.${totalActual}</h3>
            <h3>Impuesto: L.${impuesto}</h3>
            <h3>Costo de envio: L.${envio}</h3>
            <h1>Total: L.${total}</h1>
            <button onclick="continuarOrden(${total})" type="button" class="btn btn-primary"><h4 style="font-weight: bold">Continuar</h4></button>`
} 

function continuarOrden(total){

        fetch('/users')
        .then(response => response.json())
        .then(usuarios => { 
            let enteredUser1= document.getElementById("user").value;
            console.log(enteredUser1);
        
            const actualUser1 = usuarios.filter(user => user.usuario == enteredUser1);
            console.log(actualUser1);
    document.getElementById("details-order-confirmation").innerHTML=
        `<div class="direccion-entrega">
            <div class="descrp">Entregar en:</div>
            <div class="dato">${actualUser1[0].direccion}</div>
            <div type="button" class=" direccion-perfil edit" data-bs-toggle="modal" data-bs-target="#adressModal1">Añadir o Editar</div>
        </div>
        <div class="metodo-pago">
            <div class="descrp">Metodo de pago:</div>
            <div class="dato">${actualUser1[0].metodoPago}</div>
            <div type="button" class="metodos-de-pago-perfil edit" data-bs-toggle="modal" data-bs-target="#paymentsModal1">Añadir o Editar</div>
        </div>
        <div class="cantidad-pago-confirmar">
            <div class="total-final">Total: L. ${total}</div>
            <button onclick="confirmarOrden(${total})" type="button" class="btn btn-primary"><h4 style="font-weight: bold">Confirmar</h4></button>
        </div>

        <div class="modal fade" id="adressModal1" tabindex="-1" aria-labelledby="adressModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 style="color: black" class="modal-title" id="adressModalLabel">Direcciones guardadas</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${actualUser1[0].direccion}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Agregar</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="paymentsModal1" tabindex="-1" aria-labelledby="paymentsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 style="color: black" class="modal-title" id="paymentsModalLabel">Metodos de pago guardados</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${actualUser1[0].metodoPago}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Agregar</button>
      </div>
    </div>
  </div>
</div>
        
        `

        document.getElementById("cart-screen").classList.add('oculto');
        document.getElementById("order-confirmation-screen").classList.remove('oculto');
    })
}

function confirmarOrden(total){
    alert("¡Orden procesada con exito!");
    document.getElementById("order-confirmation-screen").classList.add('oculto');
    document.getElementById("notifications-screen").classList.remove('oculto');

    const carts =document.getElementsByClassName("cart-icon");
    for (let i = 0; i < carts.length; i++) {
        const cart = carts[i];
        cart.classList.remove('ordenAgregada');
      }

      document.getElementById("notification").classList.add('ntf');
      document.getElementById("notification").innerHTML=
      `<h2 style="margin: 15px;">Su orden esta siendo confirmada</h2>
      <h2 style="margin: 15px;">total: L.${total}</h2>`
     //vaciarOrdenes();
}


 function agregarIconoAlCarrito(){
    const carts =document.getElementsByClassName("cart-icon");
    for (let i = 0; i < carts.length; i++) {
        const cart = carts[i];
        cart.classList.add('ordenAgregada');
      }
} 



function cartButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("cart-screen").classList.remove('oculto');
}


function homeButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("home").classList.remove('oculto');
}


function notificationButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("notifications-screen").classList.remove('oculto');

}

function profileButton(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("profile-screen").classList.remove('oculto');

}

function confirmarUbicacion(hide){
    document.getElementById(hide).classList.add('oculto');
    document.getElementById("home").classList.remove('oculto');

}