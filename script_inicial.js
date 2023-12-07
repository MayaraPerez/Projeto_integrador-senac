document.getElementById("entrarButton").addEventListener("click", function () {
    var loginInput = document.getElementById("login");
    var senhaInput = document.getElementById("senha");

    if (loginInput.value.trim() === "" || senhaInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        window.location.href = "tela_seleção.html";
    }
});