// -------------------------------   HOMEWORK   ---------------------------------------------------------
// Nova terminologija: snippet code - isecak koda, u ovom slucaju ce biti deo skripte zbog kratkih resenja.
// Napisati javascript snippet code koji :
// 1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
// 2. Od prosledjenjog niza brojeva ispisuje samo parne
// 3. Racuna sumu prosledjenog niza
// 4. Ispisuje koliko ima brojeva vecih od prvog elementa niza


var niz = [4, 5, 7, 2, 5];
// 1. nacin
for (i = 0; i < niz.length; i++)
    console.log(niz[i]);

// 2. Od prosledjenjog niza brojeva ispisuje samo parne
for (i = 0 ; i < niz.length ; i++) {
    if (niz[i] % 2 == 0)
        console.log(niz[i]);
}

// 3. Racuna sumu prosledjenog niza
var suma = 0;
for(i = 0 ; i < niz.length ; i++){
    suma += niz[i];
}

//4. Ispisuje koliko ima brojeva vecih od prvog elementa niza
var brEl=0;
for(i = 0 ; i < niz.length ; i++) {
    if(niz[i]>niz[0])
        brEl++;
}