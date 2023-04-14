function thx() {
    let name = document.getElementById('thanks').value;

    document.getElementById('thanks-text').innerHTML `
        Danke ${name}! Wir haben deine Nachricht erhalten.
    `;
}