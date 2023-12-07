function validateForm() {
    var petName = document.getElementById("petName").value;
    var species = document.getElementById("species").value;
    var breed = document.getElementById("breed").value;
    var sex = document.getElementById("sex").value;
    var clientName = document.getElementById("clientName").value;
    var age = document.getElementById("age").value;
    var cpf = document.getElementById("cpf").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var petDisease = document.getElementById("petDisease").value;
    var treatment = document.getElementById("treatment").value;
    var totalValue = document.getElementById("totalValue").value;

    if (
        petName === "" || species === "" || breed === "" || sex === "" ||
        clientName === "" || age === "" || cpf === "" || address === "" || phone === "" ||
        date === "" || petDisease === "" || treatment === "" || totalValue === ""
    ) {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "tela_seleção.html";
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

document.getElementById("back").addEventListener("click", function () {
    window.location.href = "tela_seleção.html";
});