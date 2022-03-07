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
    return "Indefinido"
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
        opVigente=false;
        return display.textContent=operacion(op,parseInt(partes[0].replace(" ","")),parseInt(partes[1].replace(" ","")))
    }
})