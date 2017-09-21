var pass = prompt("Введите пароль", "");
if (pass == "1234") {
    alert( "Добро пожаловать!" );
    while (v%5!=0) {
        var v = prompt("Введите сумму кратную 5");
        a = 50;
        b = 25;
        c = 10;

        if (v % 5 == 0) {
            no = Math.floor(v / a);
            no1 = Math.floor(v % a / b);
            no2 = Math.floor(v % b / c);

            alert("номинал 50=" + no + "\r\nноминал 25=" + no1 + "\r\nноминал 10=" + no2);
        } else {
            alert("Не верная сумма!");
            // document.location.reload();
        }
    }
} else if (pass == null) {
    alert( 'Вход отменён' );
} else {
    alert( 'Пароль неверен' );
    document.location.reload();
}



