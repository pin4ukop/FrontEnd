function random() {
    var text = "";
    // var a = prompt("");
    var a = "В каком виде указывать первый параметр"
    var max = a.length;
    var b = ( Math.random() * max );
    for (var i = 0; i < b; i++) {
        text = text + (a.charAt(Math.floor(Math.random() * a.length)));
    }
    return text;
}
console.log(random());
