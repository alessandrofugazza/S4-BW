function checkCheckbox() {
    const checkbox = document.getElementById("agree-checkbox");
    const proceedButton = document.querySelector(".custom-button");
    proceedButton.disabled = !checkbox.checked;
}
window.onload = function() {
    checkCheckbox(); // Controlla lo stato del checkbox al caricamento della pagina
};
document.getElementById("agree-checkbox").addEventListener("change", checkCheckbox);
document.querySelector(".custom-button").addEventListener("click", function(event) {
    event.preventDefault(); // Evita il comportamento predefinito del pulsante (submit del form)
    if (document.getElementById("agree-checkbox").checked) {
        // Inserisci qui il link alla pagina successiva
        window.location.href = "pagina_successiva.html";
        }
    });