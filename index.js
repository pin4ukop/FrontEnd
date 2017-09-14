var m = "Сообщение";
var r = "$";
var t = "Тема";
function R(m, r, t) {
    var str = r;
    var len = 12;
    for(i=0; i<len-1; i++) {
        str += '' + r;
    }
    var res = (r + r + r + " " + t + " " + r + r + r + "<br />" + m + "<br />" + str + "<br />" + "<br />");
    return res;
}
document.write(R(m, r, t));

////////////////////////////////// AND


function N(m1, r1, t1) {
    var str1, str2 = r1;
    var len1 = 12;
    for(i=0; i<len1-1; i++) {
        str1 += '' + r1;
    }
    var len2 = 3;
    for(i=0; i<len2-1; i++) {
        str2 += '' + r1;
    }
    var res = (str2 + " " + t + " " + str2 + "<pre>" + m + "<pre>" + str1);
    return res;
}
document.write(R("Сообщение", "$", "Тема"));
