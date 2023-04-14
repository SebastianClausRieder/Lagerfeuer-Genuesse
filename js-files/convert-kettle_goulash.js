function rezept() {
    let zutatA = 500;
    let zutatB = 5;
    let zutatC = 3;
    let zutatD = 3;
    let zutatE = 5;
    let zutatF = 500;
    let zutatG = 500;
    let Bezugsmenge = 4;
    let Gesamtmenge;
    Gesamtmenge = document.getElementById("Gesamt").value;
    let prozFaktor = Gesamtmenge / Bezugsmenge;

    if (Gesamtmenge >= 1) {

        let Rinder_Nuss = zutatA * prozFaktor;
        let Zwiebel = zutatB * prozFaktor;
        let Knoblauch = zutatC * prozFaktor;
        let Gelbe_Paprika = zutatD * prozFaktor;
        let Fleischtomaten = zutatE * prozFaktor;
        let Rotwein = zutatF * prozFaktor;
        let Brühe = zutatG * prozFaktor;

        document.getElementById("ZutA").value = Rinder_Nuss;
        document.getElementById("ZutB").value = Zwiebel;
        document.getElementById("ZutC").value = Knoblauch;
        document.getElementById("ZutD").value = Gelbe_Paprika;
        document.getElementById("ZutE").value = Fleischtomaten;
        document.getElementById("ZutF").value = Rotwein;
        document.getElementById("ZutG").value = Brühe;
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