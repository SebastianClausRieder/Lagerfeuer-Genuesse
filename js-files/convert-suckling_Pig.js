function rezept() {
    let zutatA = 5;
    let zutatC = 10;
    let zutatD = 0;
    let zutatE = 0;
    let zutatF = 2;
    let zutatG = 100;
    let zutatH = 2;
    let Bezugsmenge = 20;
    let Gesamtmenge;
    Gesamtmenge = document.getElementById("Gesamt").value;
    let prozFaktor = Gesamtmenge / Bezugsmenge;

    if (Gesamtmenge >= 1) {

        let Spanferkel = zutatA * prozFaktor;
        let Knoblauch = zutatC * prozFaktor;
        let Honig = zutatF * prozFaktor;
        let Sonnenblumen_Öl = zutatG * prozFaktor;
        let Zitrone = zutatH * prozFaktor;

        document.getElementById("ZutA").value = Spanferkel;
        document.getElementById("ZutC").value = Knoblauch;
        document.getElementById("ZutF").value = Honig;
        document.getElementById("ZutG").value = Sonnenblumen_Öl;
        document.getElementById("ZutH").value = Zitrone;
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
