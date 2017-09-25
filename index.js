// №0
var m = "";
var r = "";
var t = "";
function R(m, r, t) {
    var str = r;
    var len = 18;
    for(i=0; i<len-1; i++) {   //for(i=0; i<len1-1; i++) =>  for(var i=0; i<len1-1; i++)
        str += r; //str += '' + r; => str += r;
    }
    var res = (r + r + r + r + r + r + " " + t + " " + r + r + r + r + r + r + "\n" + m + "\n" + str);
    console.log(res);
}
R("test test", "#", "Test")

// №1-2

function s(a) {
    res = Math.random(a) - 0.5;
    return res;
}
var u = s(100)
R(u,"*", "DZ1-2");

//№3
function UpperCase(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
k = UpperCase('dfdsfsffaw');
R(k,"*", "DZ1-3");
//№4


