
function resRec () {
    var a=document.form1.st1.value;
    var b=document.form1.st2.value;
    var s=a*b;
    document.form1.resS.value=s;
    var p=(a+b)*2;
    document.form1.resP.value=p;
}

function resRec () {
    var a=document.form1.st1.value;
    var b=document.form1.st2.value;
    s=a*b;
    document.form1.resS.value=s;
    p=(a+b)*2;
    console.log("S");
    console.log(s);
    document.form1.resP.value=p;
    console.log("P");
    console.log(p);
}
//прямоугольник
var ap=2;
    bp=5;
    pp=(ap+bp)*2;
    console.log("Периметр прямоугольника P = (a + b) *2");
    console.log(pp);
    sp=ap*bp;
    console.log("Площадь прямоугольника P = a * b");
    console.log(sp);
//треугольник
var at=2;
bt=5;
ct=5;
ht=5;
pt=at+bt+ct;
console.log("Периметр треугольника P = a + b + c");
console.log(pt);
st=at*ht/2;
console.log("Площадь треугольника P = a * h / 2");
console.log(st);
// круг
var r=3;
po=2*Math.PI*r;
console.log("Длина P = 2 * Math.PI * r");
console.log(po);
so=Math.PI*r*r;
console.log("Площадь круга P = PI * r^2");
console.log(so);


