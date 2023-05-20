let num = 6 + 4;
let vcs = "Labas";
let relationship = (vcs == num);
console.log(num + ", " + vcs + ", " + typeof(vcs) + ", " + relationship);
console.log(` ${num}, ${vcs}, ${typeof(vcs)}, ${relationship}`);

let vardas = "Ursule";
let pavarde = "Mikneviciute";
let vardasPavarde = vardas + " " + pavarde;
console.log(vardasPavarde);

let tekstas = "Pirmas";
console.log(tekstas.length);
console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());
console.log(tekstas.charAt(1));
console.log(tekstas.indexOf("m"));
tekstas = "Cia gali buti jusu reklama";
console.log(tekstas.replace("gali buti", "yra"));
console.log(tekstas.substring(4,14));
console.log(tekstas.substring(14));
console.log(tekstas.substr(4,9));

let x = 6.34;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));

let y = 5.8;
let z = 9;

console.log(Math.max(x,y,z));
console.log(Math.min(x,y,z));

let i = Math.round(Math.random() * 30);
console.log(i);

// Math.random() * (max - min + 1) + min
//sugeneruokite atsitiktini skaiciu nuo 10 iki 50
let a = Math.floor(Math.random() * (50 - 10 + 1) + 10)
console.log(a);

let b = 5;
let c = "5";

if (b != c) {
    console.log("Lygu")
} else {
    console.log("Nelygu")
}

let number = 1;
while (number <=10) {
    console.log(number)
    number += 2
}
//i = 1
//for(; i <= 10; i+=2)
for(let i = 1; i <= 10; i+= 2) {
    console.log(i)
}

let suma = 0
for(let i = 0; i < 5; i++) {
    suma += i
}
console.log(suma)

// i = 0, 1, 2, 3, 4, 5
//suma = 0, 1, 3, 6, 10

let sum = 0
let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80]
for(let i = 0; i < skaiciai.length; i++) {
    sum += skaiciai [i]
}
console.log(sum)

//  i = 0, 1, 2, 3, 4, 5, 6, 7, 8 bet salygos neatitinka
// reiksme = 10, 20, 30, 40, 50, 60, 70, 80
//sum = 10, 30, 60, 100, 150, 210, 280, 360

//T && T = T //kompo laidas
//T && F = F
//F && T = F
//F && F = F


// alert("Labas rytas!");

// confirm("Spresim užduotis?");

// prompt("Koks tavo vardas?");

// while (turimVarda == false) {
//     let userVardas = prompt("Koks tavo vardas?");
// if(userVardas) {
//     if(confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
//         alert(`Labas, ${userVardas}!`);
//         turimVarda = true;
//     } else {
//         alert("Bandyk dar kart.");
//     }
// } else {
//     alert("bakdyk dar kart.");
// }

// }




