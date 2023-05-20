/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
console.log("1. Uzduotis")
let Vardas = "Vardenis"
let Pavarde = "Pavardenis"
const gMetai = 2000
let metai = 2023
let amzius = metai - gMetai
console.log("Aš esu " + Vardas + " " + Pavarde + ". Man yra " + amzius + " metai(-ų)")


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log("2. Uzduotis")
let n1 = Math.round(Math.random() * 4)
let n2 = Math.round(Math.random() * 4)
//let n1 = 3
//let n2 = 4
console.log(n1);
console.log(n2);

if (n1 == 0 && n2 == 0) {
    console.log(`NOPE!`)
}
else if (n1 > n2) {
    console.log((n1 / n2).toFixed(2))
} else if (n1 < n2) {
    console.log((n2 / n1).toFixed(2))
} else {
    console.log((n2 / n1).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
console.log("3. Uzduotis")
let n3 = Math.round(Math.random() * 25)
let n4 = Math.round(Math.random() * 25)
let n5 = Math.round(Math.random() * 25)

console.log(n3);
console.log(n4);
console.log(n5);

if (n3 > n4 && n4 > n5) {
    console.log("Vidurine reiksme " + n4)
} else if (n4 > n3 && n5 > n3) {
    console.log("Vidurine reiksme " + n4)

} else if (n4 > n3 && n3 > n5) {
    console.log("Vidurine reiksme " + n3)
} else if (n3 > n4 && n5 > n4) {
    console.log("Vidurine reiksme " + n3)

} else if (n3 > n5 && n5 > n4) {
    console.log("Vidurine reiksme " + n5)


} else if (n3 == n5 && n5 == n4 && n4 == n3) {
    console.log("visos reiksmes lygios")
} else if (n3 == n5 || n5 == n4 || n4 == n3) {
    console.log("nera vidurines reiksmes")
}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log("4. Uzduotis")
let kr1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let kr2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let kr3 = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(kr1);
console.log(kr2);
console.log(kr3);

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
    console.log("Trikampi sudaryti galima")
}

else {console.log("Trikampio sudaryti negalima")}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log("5. Uzduotis")
let k1 = Math.round(Math.random() * 2)
let k2 = Math.round(Math.random() * 2)
let k3 = Math.round(Math.random() * 2)
let k4 = Math.round(Math.random() * 2)

let r0 = 0;
let r1 = 0;
let r2 = 0;

console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);

if (k1 == 0) {
    r0 = r0 + 1
}
else if (k1 == 1) {
    r1 = r1 + 1 
} 
else if (k1 == 2) {
    r2 = r2 + 1 
} 

if (k2 == 0) {
    r0 = r0 + 1
}
else if (k2 == 1) {
    r1 = r1 + 1 
} 
else if (k2 == 2) {
    r2 = r2 + 1 
}

if (k3 == 0) {
    r0 = r0 + 1
}
else if (k3 == 1) {
    r1 = r1 + 1 
} 
else if (k3 == 2) {
    r2 = r2 + 1 
}

if (k4 == 0) {
    r0 = r0 + 1
}
else if (k4 == 1) {
    r1 = r1 + 1 
} 
else if (k4 == 2) {
    r2 = r2 + 1 
}

console.log("nuliu: " + r0)
console.log("vienetu: " + r1)
console.log("dvejetu: " + r2)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log("6. Uzduotis")
let sk1 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
let sk2 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
let sk3 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));

console.log(sk1);
console.log(sk2);
console.log(sk3);

if (sk1 < 0) {
    console.log("[" + sk1 + "]")
}
else if (sk1 > 0) {
    console.log("{" + sk1 + "}")
}
else if (sk1 == 0) {
    console.log("(" + sk1 + ")")
}


if (sk2 < 0) {
    console.log("[" + sk2 + "]")
}
else if (sk2 > 0) {
    console.log("{" + sk2 + "}")
}
else if (sk2 == 0) {
    console.log("(" + sk2 + ")")
}


if (sk3 < 0) {
    console.log("[" + sk3 + "]")
}
else if (sk3 > 0) {
    console.log("{" + sk3 + "}")
}
else if (sk3 == 0) {
    console.log("(" + sk3 + ")")
}


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log("7. Uzduotis")
let zvakes = Math.floor(Math.random() * (3000 - 5 + 1) + 5);
console.log("Perkamu zvakiu skaicius: " + zvakes);

let kaina = 1 * zvakes;
//console.log("Kaina: " + kaina + " EUR")

if (zvakes >= 1000) {
    kaina = zvakes * 0.97
    console.log("Kaina su nuolaida: " + kaina + " EUR")
}
else if (zvakes >= 2000) {
    kaina = zvakes * 0.96
    console.log("Kaina su nuolaida: " + kaina + " EUR")
}
else {
    kaina = zvakes
    console.log("Kaina: " + kaina + " EUR")
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("8. Uzduotis")
let z1 = Math.round(Math.random() * 100)
let z2 = Math.round(Math.random() * 100)
let z3 = Math.round(Math.random() * 100)

console.log(z1)
console.log(z2)
console.log(z3)

let w = (z1 + z2 + z3) / 3;
console.log("Vidurkis: " + parseInt(w))

let n = 0

if (z1 >= 10 && z1 <= 90) {
    n++
}
else z1 = 0

if (z2 >= 10 && z2 <= 90) {
    n++
}
else z2 = 0

if (z3 >= 10 && z3 <= 90) {
    n++
}
else z3 = 0

let w1 = (z1 + z2 + z3) / n;
console.log("Kitas vidurkis: " + parseInt(w1))


/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

