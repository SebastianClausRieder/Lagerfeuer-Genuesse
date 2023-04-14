letction rezept() {
    let zutatA = 1;
    let zutatB = 2;
    let Bezugsmenge = 4;
    let Gesamtmenge;
    Gesamtmenge = document.getElementById("Gesamt").value;
    let prozFaktor = Gesamtmenge / Bezugsmenge;

    if (Gesamtmenge >= 1) {

        let Rinder_Rücken = zutatA * prozFaktor;
        let Honig = zutatB * prozFaktor;

        document.getElementById("ZutA").value = Rinder_Rücken;
        document.getElementById("ZutB").value = Honig;
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