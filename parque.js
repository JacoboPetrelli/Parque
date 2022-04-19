let nacionalidad = prompt("¿Es usted gringo o colombiano? (¿US o COL?)")
nacionalidad = nacionalidad.toUpperCase()
let estatura
let temperatura
if(nacionalidad == "US"){
    estatura = Number(prompt("Ingrese su estatura en pies"))
}else{
    estatura = Number(prompt("Ingrese su estatura en metros"))
}
if(nacionalidad == "COL"){
    temperatura = Number(prompt("Ingrese SU temperatura en grados centigrados"))
}else{
    temperatura = Number(prompt("Ingrese SU temperatura en grados Farengate"))
}
let acompañante = prompt("¿Esta acompañado por un adulto? (Si o no?)")
acompañante = acompañante.toUpperCase()

if(nacionalidad == "US" && (estatura >= 4.59318 || acompañante == "Si") && temperatura < 100.4  ){
    contenedor.innerHTML = "Si puede entrar"}
    else{
        contenedor.innerHTML = "No puede entrar"
    }

    if(nacionalidad == "COL" && (estatura >= 1.4 || acompañante == "Si") && temperatura < 38  ){
    contenedor.innerHTML = "Si puede entrar"}
    else{
        contenedor.innerHTML = "No puede entrar"
    }
    contenedor = document.querySelector("#contenedor")
     




