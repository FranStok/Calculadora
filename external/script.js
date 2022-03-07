function suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}function multiplicacion(a,b){
    return a*b;
}
function division(a,b){
    if(b!=0)
        return a/b;
    alert("division por 0 es indefinida")
    return 0
}
function operacion(op,a,b){
    if(op=="+")
        return suma(a,b);
    if(op=="-")
        return resta(a,b);
    if(op=="X")
        return multiplicacion(a,b);
    if(op==":")
        return division(a,b);
}
let cuenta=null,opVigente=false;
const display=document.querySelector(".display");
const numeros=document.querySelectorAll(".numero");
numeros.forEach(elemento => {
    elemento.addEventListener("click",(e)=>{
        cuenta=display.textContent;
        if(cuenta.length>23) return;
        if(cuenta==0) return display.textContent=elemento.textContent;
        return display.textContent=display.textContent + elemento.textContent;
    })
});
const operaciones=document.querySelectorAll(".operacion");
operaciones.forEach(elemento => {
    elemento.addEventListener("click",(e)=>{
        if((opVigente!=false)) return;
        primerValor=display.textContent;
        opVigente=true;
        return display.textContent=primerValor + " " + elemento.textContent + " ";
    })
});
const igual=document.querySelector(".igual");
igual.addEventListener("click",(e)=>{
    cuenta=display.textContent;
    let partes,op;
    if((/(-|X|:|[+])/).test(cuenta)){
        op=cuenta.charAt(cuenta.search(/[-X:+]/))
        partes=cuenta.split(/[-X:+]/);
        if(partes[1]==" "){return;}
        opVigente=false;
        return display.textContent=operacion(op,parseInt(partes[0].replace(" ","")),parseInt(partes[1].replace(" ","")))
    }
});
const C=document.querySelector(".C");
C.addEventListener("click",(e)=>{
    display.textContent=0;
    cuenta=null;
    opVigente=false;
    return;
});
const borrar=document.querySelector(".borrar");
borrar.addEventListener("click",(e)=>{
    let sinEspacios=display.textContent.replaceAll(" ","");
    let eliminar=sinEspacios.charAt(sinEspacios.length-1);
    if(eliminar.match(/[-X:+]/)){
        opVigente=false;
    };
    let nuevo=sinEspacios.slice(0,-1);
    if(nuevo=="")
        nuevo="0"
    return display.textContent=nuevo;
})