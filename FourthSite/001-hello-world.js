// ********** Merhaba Dunya Ornekleri ********** 

// Dokumana(document) Yazdirma Islemi ile Merhaba Dunya:
// document.write('Merhaba Dunya');

// Uyari Mesaji (Alert) ile Merhaba Dunya:
// alert("Merhaba Dunya")

// console.log ile Merhaba Dunya:

let girilenIsim = prompt("Lütfen isminizi girin:");

    let Tarih = new Date(); 
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let suankiSaat = Tarih.getHours() + ":" + Tarih.getMinutes() + ":" + Tarih.getSeconds();
    let suankiGun = gunler[Tarih.getDay()];

    let getName = document.querySelector('#greeting');
    let setTime = document.querySelector('#clock');

    function welcomeFunction(isim) {
        getName.innerHTML = "Merhaba, " + isim + "! Hoş geldin!";
    }

    welcomeFunction(girilenIsim);

    function setClock(saat, gun) {
        setTime.innerHTML = saat + " " + gun;
    }

    setClock(suankiSaat, suankiGun);

