function toggleDarkLightMode() {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light=mode" :
        "dark-mode";
}

//topshiriq 1


function france() {
    let a = document.getElementById('input_lavozim').value
    a = a.toLowerCase();
    if (a === "ishchi") {
        document.getElementById('plavozim').innerText = 'hello'
    }
    else if (a === "director") {
        document.getElementById('plavozim').innerText = "greeting"
    }
    else if (a === "") {
        document.getElementById('plavozim').innerText = "no login"
    }
    else {
        document.getElementById('plavozim').innerText = "bunday lavozim mavjud emas"
    }
}
document.getElementById('btn_la', addEventListener('click', () => {
    france()
}))


// topshiriq 2



function calculateDays() {
    let day = document.getElementById("day").value;
    let day2 = document.getElementById("day_two").value;
    const dateOne = new Date(day);
    const dateTwo = new Date(day2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24))
    document.getElementById("output").innerHTML = days + " kun";
}


//topshiriq 3


function numberFunc() {

    let number = document.getElementsByClassName("number")[0].value
    let result = document.getElementById("resultuchinchi")
    let demicalSystem = (number - number % 10) / 10
    console.log(demicalSystem)
    let firstWord;
    let secondWord;
    switch (demicalSystem) {
        case 0: firstWord = "";
            break;
        case 1: firstWord = "o'n";
            break;
        case 2: firstWord = "yigirma";
            break;
        case 3: firstWord = "o'ttiz";
            break;
        case 4: firstWord = "qirq";
            break;
        case 5: firstWord = "ellik";
            break;
        case 6: firstWord = "oltmish";
            break;
        case 7: firstWord = "ye tmish";
            break;
        case 8: firstWord = "sakson";
            break;
        case 9: firstWord = "to'qson";
            break;

    }
    let unitSystem = number % 10
    switch (unitSystem) {
        case 0: secondWord = "";
            break;
        case 1: secondWord = "bir";
            break;
        case 2: secondWord = "ikki";
            break;
        case 3: secondWord = "uch";
            break;
        case 4: secondWord = "to'rt";
            break;
        case 5: secondWord = "besh";
            break;
        case 6: secondWord = "olti";
            break;
        case 7: secondWord = "yetti";
            break;
        case 8: secondWord = "sakkiz";
            break;
        case 9: secondWord = "to'qqiz";
            break;

    }
    console.log(firstWord + " " + secondWord)
    let results = firstWord + " " + secondWord
    result.innerHTML = results;
}
numberFunc()

// topshiriq 4

let array = [3, 5, 22, 5, 7, 2, 45, 75];
let qiymat = document.getElementById('qiymat');
let sum = 0;
for (let i = 0; i < array.length; i++) {
    let javob = array[i] + 3;
    sum += javob;
}
qiymat.innerHTML = sum;


// topshiriq 5

let setter = new Array();
let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr2 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
let war = document.getElementById('solve--array')
for (let i = 0; i < arr1.length; i++) {

    setter[i] = arr1[i] + arr2[i];

}
war.innerText = setter

// topshiriq 6

$(function () {
    $('input').keyup(function () {
        this.value = this.value.toLocaleUpperCase();
    });
});

// topshiriq 7

function funcs() {
    const form = document.getElementById("forms")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(`Ismi:${form.name.value}`)
        console.log(`Yoshi: ${form.age.value}`)
    })
}
funcs()

// topshiriq 8


let a = [23, 56, 4, 78, 5, 63, 45, 210, 56]
let reset_massiv = document.getElementById("mass");

let reset = document.getElementById("rebok");
let new_massiv = document.getElementById("alpha_massive");

function push(massiv) {
    let array = new Array();
    let qiymat = document.getElementById("massive_status").value;

    for (let i = 0; i < massiv.length; i++) {

        if (massiv[i] != qiymat) {
            array.push(massiv[i]);
        }
    }
    console.log(array)
    new_massiv.innerHTML = array

}
reset_massiv.innerHTML = `[${a}]`;
reset.addEventListener('click', function (e) {
    e.preventDefault();
    push(a);
})

// topshiriq 9

let names = document.getElementById("names");
let all = document.getElementById("all");
names.addEventListener('change', function (e) {
    e.preventDefault();
    let p = document.createElement('p');
    p.innerHTML = e.target.value ;
    all.append(p)
    e.target.value = '';
})