function rezept() {
    let zutatA = 10;
    let zutatB = 2;
    let zutatC = 2;
    let zutatD = 500;
    let zutatE = 3;
    let zutatF = 10;
    let zutatG = 200;
    let Bezugsmenge = 4;
    let Gesamtmenge;
    Gesamtmenge = document.getElementById("Gesamt").value;
    let prozFaktor = Gesamtmenge / Bezugsmenge;

    if (Gesamtmenge >= 1) {

        let Tomaten = zutatA * prozFaktor;
        let Zwiebel = zutatB * prozFaktor;
        let Knoblauch = zutatC * prozFaktor;
        let Brühe = zutatD * prozFaktor;
        let Tomatenmark = zutatE * prozFaktor;
        let Basillikum = zutatF * prozFaktor;
        let Schmant = zutatG * prozFaktor;

        document.getElementById("ZutA").value = Tomaten;
        document.getElementById("ZutB").value = Zwiebel;
        document.getElementById("ZutC").value = Knoblauch;
        document.getElementById("ZutD").value = Brühe;
        document.getElementById("ZutE").value = Tomatenmark;
        document.getElementById("ZutF").value = Basillikum;
        document.getElementById("ZutG").value = Schmant;
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