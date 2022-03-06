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
    if(op=="x")
        return multiplicacion(a,b);
    if(op=="/")
        return division(a,b);
}