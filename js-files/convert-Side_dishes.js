function rezept1() {
    let zutatA = 500;
    let zutatB = 1;
    let zutatC = 1;
    let zutatD = 250;
    let zutatE = 0.5;
    let zutatF = 5;
    let Bezugsmenge = 4;
    let Gesamtmenge;
    Gesamtmenge = document.getElementById("Gesamt").value;
    let prozFaktor = Gesamtmenge / Bezugsmenge;

    if (Gesamtmenge >= 1) { 

    let Mehl = zutatA * prozFaktor;
    let Trockenhefe = zutatB * prozFaktor;
    let Zucker = zutatC * prozFaktor;
    let Milch = zutatD * prozFaktor;
    let Salz = zutatE * prozFaktor;
    let Öl = zutatF * prozFaktor;

    document.getElementById("ZutA").value = Mehl;
    document.getElementById("ZutB").value = Trockenhefe;
    document.getElementById("ZutC").value = Zucker;
    document.getElementById("ZutD").value = Milch;
    document.getElementById("ZutE").value = Salz;
    document.getElementById("ZutF").value = Öl;
    }

    else {
       let showmsg = document.getElementById("errorMsg");
        showmsg.classList.add("d-show");
    }
}

function rezept2() {
    let zutatA2 = 8;
    let zutatB2 = 40;
    let zutatC2 = 40;
    let zutatD2 = 1.5;
    let zutatE2 = 40
    let zutatF2 = 8
    let Bezugsmenge = 4;
    let Gesamtmenge;
    Gesamtmenge = document.getElementById("Gesamt2").value;
    let prozFaktor = Gesamtmenge / Bezugsmenge;

    if (Gesamtmenge >= 1) { 

    let Kartoffeln = zutatA2 * prozFaktor;
    let Olivenöl = zutatB2 * prozFaktor;
    let Butter = zutatC2 * prozFaktor;
    let Knoblauchzehen = zutatD2 * prozFaktor;
    let Parmesan = zutatE2 * prozFaktor;
    let Spieße = zutatF2 * prozFaktor;

    document.getElementById("ZutA2").value = Kartoffeln;
    document.getElementById("ZutB2").value = Olivenöl;
    document.getElementById("ZutC2").value = Butter;
    document.getElementById("ZutD2").value = Knoblauchzehen;
    document.getElementById("ZutE2").value = Parmesan;
    document.getElementById("ZutF2").value = Spieße;
    }

    else {
        let showmsg = document.getElementById("errorMsg");
         showmsg.classList.add("d-show");
     }
}

function hideMsg() {
    let hidemsg = document.getElementById("errorMsg");
    hidemsg.classList.remove("d-show");
}
