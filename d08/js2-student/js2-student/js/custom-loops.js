/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
console.log("01.")
console.log("")

let zodis = "labas"

for (let i = 0; i < 10; i++) {
    console.log(zodis)
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log("")
console.log("02.")

for (let i = 0; i <= 9; i++ ) {
    console.log(i)
}

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
console.log("")
console.log("03.")

let augalai = ["obelis", "alyva", "dobilas", "viksva", "motiejukas", "linas", "rabarbaras", "mėta", "kiškiakopūstis", "papartis"]

console.log(augalai)
console.log(augalai[4]);

/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
console.log("")
console.log("04.")

for(let i = 0; i < augalai.length; i++) {
    console.log(augalai[i])
}

/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log("")
console.log("05.")

for(let i = augalai.length - 1; i >= 0; i--) {
    console.log(augalai[i])
}

/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log("")
console.log("06.")

for(i = 10; i <=50; i += 2){
    console.log(i)
}

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log("")
console.log("07.")

for(i = 10; i <=50; i += 2){
    if (i % 10 == 0) {
        continue
    }
    console.log(i)
}

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
console.log("")
console.log("08.")

let g = -1

for(i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        g++
    }
}
console.log(g)

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
console.log("")
console.log("09.")

let trumpesniPenkiu = 0
let ilgesniSeptyniu = 0

for(let i = 0; i < augalai.length; i++) {
    augalai[i].length
    console.log(augalai[i].length)
    if (augalai[i].length < 5) {
        trumpesniPenkiu ++
    }
    if (augalai[i].length > 7) {
        ilgesniSeptyniu ++
    }
}

console.log(trumpesniPenkiu + " žodžiai trumpesni nei 5 simboliai")
console.log(ilgesniSeptyniu + " žodžiai ilgesni nei 7 simboliai")

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
console.log("")
console.log("Sunkesnis 01.")

let numbers = []
let didesni = 0

for (i = 0; i < 300; i++) {
    numbers.push(Math.round(Math.random(i) * 300))
}

for (i = 0; i < 300; i++){

    if (numbers[i] > 150) {
        didesni ++  
    }
    if (numbers[i] > 275) {
        numbers[i] = "[" + numbers[i] + "]"
    }
}

console.log(numbers.join(" "))
console.log("Kiek didesnių už 150: " + didesni)

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log("")
console.log("Sunkesnis 02.")






/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
console.log("")
console.log("Sunkesnis 03.")

console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")
console.log("* * * * * * * * * *")

console.log("")

let a = "* * * * * * * * * *"

for (i = 0; i < 10; i++) {
    console.log(a)
}

console.log("")

let zvaigzdutes = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]

for (i = 0; i < 10; i++) {
    console.log(zvaigzdutes.join(" "))
}

